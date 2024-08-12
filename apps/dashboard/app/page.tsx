import Map from '@/components/Map';
import Drivers from '@/components/Drivers';
import Orders from '@/components/Orders';

import styles from './page.module.scss';

const HomePage = async () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Live Orders/Drivers</h1>
            <Map />
            <div className={styles.tablesSection}>
                <Orders />
                <Drivers />
            </div>
        </div>
    );
};

export default HomePage;
