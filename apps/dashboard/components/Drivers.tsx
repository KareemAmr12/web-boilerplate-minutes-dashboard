'use client';
import { useEffect, useReducer } from 'react';

import { driversList } from '@/resources/DriversList';

import styles from './Drivers.module.scss';
import Driver from './Driver';

function reducer(state, action) {
    switch (action.type) {
        case 'SET_DRIVERS':
            return { ...state, drivers: action.payload };
        case 'ADD_DRIVER':
            return { ...state, drivers: [...state.drivers, action.payload] };
        case 'REMOVE_DRIVER':
            return { ...state, drivers: state.drivers.filter((driver) => driver.id_user !== action.payload) };
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
                {state.drivers.map((driver) => (
                    <Driver key={driver.id_user} driver={driver} />
                ))}
            </tbody>
        </table>
    );
};

export default Drivers;
