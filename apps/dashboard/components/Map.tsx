'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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

const fetchOrdersAndDrivers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const updatedOrders = ordersList.map((order) => ({
                id: order.order_nr,
                position: { lat: order.delivery_address.lat, lng: order.delivery_address.lng },
            }));

            const updatedDrivers = driversList.map((driver) => ({
                id: driver.id_user,
                position: { lat: driver.waiting_loc_latitude, lng: driver.waiting_loc_longitude },
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

    const [map, setMap] = useState(null);
    const [orderMarkers, setOrderMarkers] = useState([]);
    const [driverMarkers, setDriverMarkers] = useState([]);
    const element = useRef(null);

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

    const HandleMarkerClick = (id) => {
        const temp = document.getElementById(id);
        if (element.current) {
            element.current.style.border = '';
        }
        if (temp) {
            // temp.style.border = '1px solid black';
            element.current = temp;
            element.current.scrollIntoView({ behavior: 'smooth' });
            element.current.focus();
            element.current.style.border = '1px solid black';
        }
    };

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8} onLoad={onLoad} onUnmount={onUnmount}>
            {orderMarkers.map((marker) => (
                <Marker
                    onClick={() => HandleMarkerClick(marker.id)}
                    key={marker.id}
                    position={marker.position}
                    icon="/order.svg"
                />
            ))}
            {driverMarkers.map((marker) => (
                <Marker
                    onClick={() => HandleMarkerClick(marker.id.toString())}
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
