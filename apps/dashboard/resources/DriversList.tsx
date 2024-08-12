export type TDriver = {
    id_user: number;
    full_name: string;
    da_user_code: string;
    driver_status: string;
    dropoff_zone_code: string;
    is_called_up: number;
    order_latitude: number;
    order_longitude: number;
    driver_latitude: number;
    driver_longitude: number;
    warehouse_latitude: number;
    warehouse_longitude: number;
    waiting_loc_latitude: number;
    waiting_loc_longitude: number;
    timezone: string;
    vehicle_code: string;
    vehicle_name: string;
    vehicle_type_code: string;
    vehicle_type_description: string;
    queue_position: number;
    orders: string[];
    shipments: string[];
    queue: {
        position: number;
        top_x_value: number;
        should_show_requeue_reason: number;
        requeue_reason: string;
        is_queue_enabled: boolean;
    };
    eta: number;
    eta2: string;
    sort_key: [number, number, string];
    can_callup: number;
    estimated_ready_at: number;
};

export const driversList: TDriver[] = [
    {
        id_user: 34,
        full_name: 'Dima Arafat',
        da_user_code: 'stg-cfdfd6039c64486782d377e5f6015e27@idp.noon.partners',
        driver_status: 'undelivered',
        dropoff_zone_code: 'null',
        is_called_up: 0,
        order_latitude: 25.2047675,
        order_longitude: 55.265,
        waiting_loc_latitude: 25.198,
        waiting_loc_longitude: 55.2677267,
        timezone: '+04:00',
        vehicle_code: 'car_toyota_rush_ae',
        vehicle_name: 'Toyota Rush',
        vehicle_type_code: 'car',
        vehicle_type_description: 'Car',
        queue_position: 1,
        orders: ['Sedky-test-8519', 'Ola-test-3833'],
        shipments: ['PEA3737771228A', 'PEA6783381396A'],
        queue: {
            position: 1,
            top_x_value: 1,
            should_show_requeue_reason: 0,
            requeue_reason: 'null',
            is_queue_enabled: false,
        },
        eta: 1680,
        eta2: '2024-07-18T06:10:16+00:00',
        sort_key: [1, 1680, '2024-07-18T06:10:16+00:00'],
        can_callup: 0,
        estimated_ready_at: 1680,
        driver_latitude: 0,
        driver_longitude: 0,
        warehouse_latitude: 0,
        warehouse_longitude: 0,
    },
    {
        id_user: 32,
        full_name: 'Esraa Sherif',
        da_user_code: 'stg-3b780a9b79da40b0ad86712f27b79713@idp.noon.partners',
        driver_status: 'undelivered',
        dropoff_zone_code: 'null',
        is_called_up: 0,
        order_latitude: 25.21,
        order_longitude: 55.2749021,
        waiting_loc_latitude: 25.1988001,
        waiting_loc_longitude: 55.2750001,
        timezone: '+04:00',
        vehicle_code: 'motorcycle_normal_ae',
        vehicle_name: 'Standard Motorcycle',
        vehicle_type_code: 'motorcycle',
        vehicle_type_description: 'Motorcycle',
        queue_position: 2,
        orders: ['test-20240711-1', 'Sedky-test-15-7-4'],
        shipments: ['PEA2560243502A', 'PEA8001097624A'],
        queue: {
            position: 2,
            top_x_value: 1,
            should_show_requeue_reason: 0,
            requeue_reason: 'null',
            is_queue_enabled: false,
        },
        eta: 7682182.628360033,
        eta2: '2024-07-26T10:01:53+00:00',
        sort_key: [2, 7682182.628360033, '2024-07-26T10:01:53+00:00'],
        can_callup: 0,
        estimated_ready_at: 0,
        driver_latitude: 0,
        driver_longitude: 0,
        warehouse_latitude: 0,
        warehouse_longitude: 0,
    },
    {
        id_user: 30,
        full_name: 'Ahmed Mohamed',
        da_user_code: 'stg-3b780a9b79da40b0ad86712f27b79716@idp.noon.partners',
        driver_status: 'undelivered',
        dropoff_zone_code: 'null',
        is_called_up: 0,
        order_latitude: 25.1987675,
        order_longitude: 55.284,
        waiting_loc_latitude: 25.1945,
        waiting_loc_longitude: 55.2712,
        timezone: '+04:00',
        vehicle_code: 'motorcycle_normal_ae',
        vehicle_name: 'Standard Motorcycle',
        vehicle_type_code: 'motorcycle',
        vehicle_type_description: 'Motorcycle',
        queue_position: 2,
        orders: ['test-20240711-1', 'Sedky-test-15-7-4'],
        shipments: ['PEA2560243502A', 'PEA8001097624A'],
        queue: {
            position: 2,
            top_x_value: 1,
            should_show_requeue_reason: 0,
            requeue_reason: 'null',
            is_queue_enabled: false,
        },
        eta: 7682182.628360033,
        eta2: '2024-07-26T10:01:53+00:00',
        sort_key: [2, 7682182.628360033, '2024-07-26T10:01:53+00:00'],
        can_callup: 0,
        estimated_ready_at: 0,
        driver_latitude: 0,
        driver_longitude: 0,
        warehouse_latitude: 0,
        warehouse_longitude: 0,
    },

    {
        id_user: 25,
        full_name: 'Mahmoud Ahmed',
        da_user_code: 'stg-cfdfd6039c64486782d377e5f6015e25@idp.noon.partners',
        driver_status: 'fullfilled',
        dropoff_zone_code: 'null',
        is_called_up: 0,

        order_latitude: 25.2087675,
        order_longitude: 55.265,
        waiting_loc_latitude: 25.1941575,
        waiting_loc_longitude: 55.284,
        timezone: '+04:00',
        vehicle_code: 'car_toyota_rush_ae',
        vehicle_name: 'Toyota Rush',
        vehicle_type_code: 'car',
        vehicle_type_description: 'Car',
        queue_position: 1,
        orders: ['Sedky-test-8519', 'Ola-test-3833'],
        shipments: ['PEA3737771228A', 'PEA6783381396A'],
        queue: {
            position: 1,
            top_x_value: 1,
            should_show_requeue_reason: 0,
            requeue_reason: 'null',
            is_queue_enabled: false,
        },
        eta: 1680,
        eta2: '2024-07-18T06:10:16+00:00',
        sort_key: [1, 1680, '2024-07-18T06:10:16+00:00'],
        can_callup: 0,
        estimated_ready_at: 1680,
        driver_latitude: 0,
        driver_longitude: 0,
        warehouse_latitude: 0,
        warehouse_longitude: 0,
    },
];
