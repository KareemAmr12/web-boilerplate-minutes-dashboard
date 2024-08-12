/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useReducer } from 'react';

import { driversList } from '@/resources/DriversList';

import styles from './Drivers.module.scss';
import Driver from './Driver';
import { TDriver } from '@/resources/DriversList';

function reducer(state: { drivers: TDriver[] }, action: { type: any; payload: any }) {
    switch (action.type) {
        case 'SET_DRIVERS':
            return { ...state, drivers: action.payload };
        case 'ADD_DRIVER':
            return { ...state, drivers: [...state.drivers, action.payload] };
        case 'REMOVE_DRIVER':
            return {
                ...state,
                drivers: state.drivers.filter((driver: { id_user: any }) => driver.id_user !== action.payload),
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const initialState = { drivers: [] };

const Drivers = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchDrivers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = driversList;
                if (data) {
                    resolve(data);
                } else {
                    reject('Failed to fetch drivers data');
                }
            }, 2000); // Simulate a 2-second delay
        });
    };

    useEffect(() => {
        // Function to fetch and update drivers
        const updateDrivers = () => {
            fetchDrivers()
                .then((fetchedDrivers) => {
                    dispatch({ type: 'SET_DRIVERS', payload: fetchedDrivers });
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        updateDrivers();

        const intervalId = setInterval(updateDrivers, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableTitle}>Drivers</tr>
                <tr className={styles.tableHeaderRow}>
                    <th className={styles.th}>Vehicle</th>
                    <th className={styles.th}>Driver</th>
                    <th className={styles.th}>Status</th>
                    <th className={styles.th}>Distance</th>
                    <th className={styles.th}>Arrival ETA</th>
                </tr>
            </thead>
            <tbody>
                {state.drivers.map(
                    (driver: {
                        id_user: any;
                        full_name?: string;
                        da_user_code?: string | undefined;
                        driver_status?: string;
                        dropoff_zone_code?: string | undefined;
                        is_called_up?: number | undefined;
                        order_latitude?: number;
                        order_longitude?: number;
                        driver_latitude?: number;
                        driver_longitude?: number;
                        warehouse_latitude?: number;
                        warehouse_longitude?: number;
                        waiting_loc_latitude?: number | undefined;
                        waiting_loc_longitude?: number | undefined;
                        timezone?: string | undefined;
                        vehicle_code?: string;
                        vehicle_name?: string;
                        vehicle_type_code?: string;
                        vehicle_type_description?: string;
                        queue_position?: number | undefined;
                        orders?: string[] | undefined;
                        shipments?: string[] | undefined;
                        queue?:
                            | {
                                  position: number;
                                  top_x_value: number;
                                  should_show_requeue_reason: number;
                                  requeue_reason: string;
                                  is_queue_enabled: boolean;
                              }
                            | undefined;
                        eta?: number | undefined;
                        eta2?: string | undefined;
                        sort_key?: [number, number, string] | undefined;
                        can_callup?: number | undefined;
                        estimated_ready_at?: number | undefined;
                    }) => (
                        <Driver key={driver.id_user} driver={driver as TDriver} />
                    ),
                )}
            </tbody>
        </table>
    );
};

export default Drivers;
