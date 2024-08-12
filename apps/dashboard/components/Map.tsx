/* eslint-disable unicorn/prefer-query-selector */
'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

import { GoogleMap, useJsApiLoader, Marker as GoogleMapMarker } from '@react-google-maps/api';

import { driversList } from '@/resources/DriversList';
import { ordersList } from '@/resources/OrdersList';

const containerStyle = {
    width: '50%',
    margin: '0px 0px 30px 0px',
    height: '400px',
    border: '1px solid rgba(99, 99, 99, 0.2)',
    borderRadius: '1%',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
};

const center = {
    lat: 25.1987675,
    lng: 55.2749021,
};

type TOrder = {
    id: string;
    position: {
        lat: number;
        lng: number;
    };
};

type TDriver = {
    id: string;
    position: {
        lat: number;
        lng: number;
    };
};

const fetchOrdersAndDrivers = (): Promise<{ orders: TOrder[]; drivers: TDriver[] }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const updatedOrders: TOrder[] = ordersList.map((order) => ({
                id: String(order.order_nr),
                position: { lat: order.delivery_address.lat ?? 0, lng: order.delivery_address.lng ?? 0 },
            }));

            const updatedDrivers: TDriver[] = driversList.map((driver) => ({
                id: String(driver.id_user),
                position: {
                    lat: driver.waiting_loc_latitude ?? 0,
                    lng: driver.waiting_loc_longitude ?? 0,
                },
            }));

            resolve({ orders: updatedOrders, drivers: updatedDrivers });
        }, 2000); // Simulate a 2-second delay
    });
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyANWPf72r_A0rSYpmnXJ_1J4MRIhCswK0c',
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [orderMarkers, setOrderMarkers] = useState<TOrder[]>([]);
    const [driverMarkers, setDriverMarkers] = useState<TDriver[]>([]);
    const element = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const updateMarkers = () => {
            fetchOrdersAndDrivers()
                .then(({ orders, drivers }) => {
                    setOrderMarkers(orders);
                    setDriverMarkers(drivers);
                })
                .catch((error) => {
                    console.error('Failed to fetch markers:', error);
                });
        };

        // Initial fetch when the component mounts
        updateMarkers();

        // Set up polling every 60 seconds
        const intervalId = setInterval(updateMarkers, 60000); // 60000ms = 60 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (map && orderMarkers.length > 0 && driverMarkers.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            orderMarkers.forEach((marker) => bounds.extend(marker.position));
            driverMarkers.forEach((marker) => bounds.extend(marker.position));
            map.fitBounds(bounds);
        }
    }, [map, orderMarkers, driverMarkers]);

    const HandleMarkerClick = (id: string) => {
        const temp = document.getElementById(id);
        if (element.current) {
            element.current.style.border = '';
        }
        if (temp) {
            element.current = temp as HTMLElement; // Type assertion for HTMLElement
            element.current.scrollIntoView({ behavior: 'smooth' });
            element.current.focus();
            element.current.style.border = '1px solid black';
        }
    };

    const onLoad = useCallback((mapInstance: google.maps.Map) => {
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8} onLoad={onLoad} onUnmount={onUnmount}>
            {orderMarkers.map((marker) => (
                <GoogleMapMarker
                    onClick={() => HandleMarkerClick(marker.id)}
                    key={marker.id}
                    position={marker.position}
                    icon="/order.svg"
                />
            ))}
            {driverMarkers.map((marker) => (
                <GoogleMapMarker
                    onClick={() => HandleMarkerClick(marker.id)}
                    key={marker.id}
                    position={marker.position}
                    icon="/driver.svg"
                />
            ))}
        </GoogleMap>
    ) : (
        <></>
    );
};

export default Map;
