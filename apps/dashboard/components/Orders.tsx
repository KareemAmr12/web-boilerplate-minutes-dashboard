'use client';
import { useEffect, useReducer } from 'react';

import { ordersList } from '@/resources/OrdersList';

import Order from './Order';
import styles from './Orders.module.scss';

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ordersList;

            if (data) {
                resolve(data);
            } else {
                reject('Failed to fetch data');
            }
        }, 2000); // Simulate a 2-second delay
    });
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return { ...state, orders: action.payload };
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] };
        case 'REMOVE_ORDER':
            return { ...state, orders: state.orders.filter((order) => order.id !== action.payload) };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const Orders = () => {
    const [state, dispatch] = useReducer(reducer, { orders: [] });

    useEffect(() => {
        // Function to fetch and update orders
        const updateOrders = () => {
            fetchData()
                .then((fetchedOrders) => {
                    dispatch({ type: 'SET_ORDERS', payload: fetchedOrders });
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        updateOrders();

        const intervalId = setInterval(updateOrders, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableTitle}>Orders</tr>
                <tr className={styles.tableHeaderRow}>
                    <th className={styles.th}>Order Number</th>
                    <th className={styles.th}>Package</th>
                    <th className={styles.th}>Status</th>
                    <th className={styles.th}>Pickup/ Delivery ETA</th>
                </tr>
            </thead>
            <tbody>
                {state.orders.map((order) => (
                    <Order key={order.order_nr} order={order} />
                ))}
            </tbody>
        </table>
    );
};

export default Orders;
