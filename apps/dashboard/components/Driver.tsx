import { useMemo } from 'react';

import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

import { TDriver } from '@/resources/DriversList';

import styles from './Driver.module.scss';

const Driver = ({ driver }: { driver: TDriver }) => {
    const haversine_distance = useMemo(() => {
        return (mk1Lat: number, mk1Lng: number, mk2Lat: number, mk2Lng: number) => {
            var R = 6371.071; // Radius of the Earth in miles
            var rlat1 = mk1Lat * (Math.PI / 180); // Convert degrees to radians
            var rlat2 = mk2Lat * (Math.PI / 180); // Convert degrees to radians
            var difflat = rlat2 - rlat1; // Radian difference (latitudes)
            var difflon = (mk2Lng - mk1Lng) * (Math.PI / 180); // Radian difference (longitudes)

            var d =
                2 *
                R *
                Math.asin(
                    Math.sqrt(
                        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
                            Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2),
                    ),
                );
            return d;
        };
    }, []);
    return (
        <tr id={driver.id_user.toString()} className={styles.tr}>
            <td className={styles.tableDriverVehicle}>
                {driver.vehicle_type_code === 'motorcycle' ? (
                    <img src="/motorcycle.svg" alt="motorcycle icon" />
                ) : (
                    <img src="/car.svg" alt="car icon" />
                )}{' '}
            </td>
            <td className={styles.tableDriverName}>{driver.full_name}</td>
            <td className={styles.tableDriverStatus}>{driver.driver_status}</td>
            <td className={styles.tableDriverDistance}>
                {haversine_distance(
                    driver.order_latitude as number,
                    driver.order_longitude as number,
                    driver.waiting_loc_latitude as number,
                    driver.waiting_loc_longitude as number,
                ).toFixed(2)}{' '}
                KM
            </td>
            <td className={styles.tableDriverEta}>
                {format(toZonedTime(driver.eta2 ?? new Date(), driver.timezone ?? 'UTC'), 'yyyy-MM-dd HH:mm')}
            </td>
        </tr>
    );
};

export default Driver;
