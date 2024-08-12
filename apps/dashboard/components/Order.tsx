import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

import { TOrder } from '@/resources/OrdersList';

import styles from './Order.module.scss';

const Order = ({ order }: { order: TOrder }) => {
    return (
        <tr id={order.order_nr} className={styles.tr}>
            <td className={styles.tableOrderNumber}>{order.order_nr}</td>
            <td className={styles.tableOrderPackage}>254</td>
            <td className={styles.tableOrderStatus}>{order.order_status}</td>
            <td className={styles.tableOrderEta}>
                {format(toZonedTime(order.estimated_pickup_at, order.timezone), 'yyyy-MM-dd HH:mm')}
            </td>
        </tr>
    );
};

export default Order;
