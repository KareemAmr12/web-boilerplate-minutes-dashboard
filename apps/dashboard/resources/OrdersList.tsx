export type TOrder = {
    order_nr: string;
    is_cancellation_requested: number;
    mp_code: string;
    order_status: string;
    awb_nr: string;
    delivery_address: {
        lat: number;
        lng: number;
        city: string;
        address: string;
        version: number;
        contact_name: string;
        country_code: string;
        customer_code: string;
        contact_phone_number: string;
    };
    estimated_pickup_at: string;
    estimated_delivery_at: string;
    timezone: string;
    country_code: string;
    id_delivery_job: string;
    is_cancelled: number;
    delivery_job_line_status: string;
    dropoff_delivery_job_line_status: string;
    warehouse_code: string;
    is_batched: number;
    is_with_associate_driver: number;
    has_customization: number;
    is_gift_bag_required: number;
    is_heavy_order: number;
    is_delivery_code_required: number;
    is_id_capture_required: number;
    order_volume: number;
    order_weight: number;
    order_type: string;
    dropoff_zone_code: string;
    is_hll_delivery: number;
    delivery_tags: string[];
    recommended_mot_code: string;
    bikes_ratio: number;
    batch_group_name: string;
    batch_recommended_orders: string;
    batch_orders: string;
};

export const ordersList: TOrder[] = [
    {
        order_nr: 'IAEE7V002RPZ93X4JD',
        is_cancellation_requested: 0,
        mp_code: 'noon',
        order_status: 'fullfilled',
        awb_nr: null,
        delivery_address: {
            lat: 25.21,
            lng: 55.2749021,
            city: 'Dubai',
            address: 'test, 155 - Financial Center Rd - Downtown Dubai - Dubai - Dubai',
            version: 3,
            contact_name: 'joud zouzou',
            country_code: 'ae',
            customer_code: '618aba09-1202-4835-a214-94330fbd32ef',
            contact_phone_number: '+971-54-5730612',
        },
        estimated_pickup_at: '2024-07-31T00:36:12',
        estimated_delivery_at: null,
        timezone: '+04:00',
        country_code: 'ae',
        id_delivery_job: null,
        is_cancelled: 0,
        delivery_job_line_status: null,
        dropoff_delivery_job_line_status: null,
        warehouse_code: 'W00000002A',
        is_batched: 0,
        is_with_associate_driver: 0,
        has_customization: 0,
        is_gift_bag_required: 0,
        is_heavy_order: 0,
        is_delivery_code_required: 0,
        is_id_capture_required: 0,
        order_volume: 0,
        order_weight: 1,
        order_type: null,
        dropoff_zone_code: null,
        is_hll_delivery: 0,
        delivery_tags: ['dont_leave_at_door'],
        recommended_mot_code: 'runner',
        bikes_ratio: 0.1,
        batch_group_name: null,
        batch_recommended_orders: null,
        batch_orders: null,
    },
    {
        order_nr: 'IAEE7V002RPZ93X4JS',
        is_cancellation_requested: 0,
        mp_code: 'minutes',
        order_status: 'undelivered',
        awb_nr: null,
        delivery_address: {
            lat: 25.1987675,
            lng: 55.284,
            city: 'Dubai',
            address: 'test, 155 - Financial Center Rd - Downtown Dubai - Dubai - Dubai',
            version: 3,
            contact_name: 'joud zouzou',
            country_code: 'ae',
            customer_code: '618aba09-1202-4835-a214-94330fbd32ef',
            contact_phone_number: '+971-54-5730612',
        },
        estimated_pickup_at: '2024-07-31T00:36:12',
        estimated_delivery_at: null,
        timezone: '+04:00',
        country_code: 'ae',
        id_delivery_job: null,
        is_cancelled: 0,
        delivery_job_line_status: null,
        dropoff_delivery_job_line_status: null,
        warehouse_code: 'W00000002A',
        is_batched: 0,
        is_with_associate_driver: 0,
        has_customization: 0,
        is_gift_bag_required: 0,
        is_heavy_order: 0,
        is_delivery_code_required: 0,
        is_id_capture_required: 0,
        order_volume: 0,
        order_weight: 1,
        order_type: null,
        dropoff_zone_code: null,
        is_hll_delivery: 0,
        delivery_tags: ['dont_leave_at_door'],
        recommended_mot_code: 'runner',
        bikes_ratio: 0.1,
        batch_group_name: null,
        batch_recommended_orders: null,
        batch_orders: null,
    },
    {
        order_nr: 'IAEE7V002RPZ93X4JK',
        is_cancellation_requested: 0,
        mp_code: 'namshi',
        order_status: 'undelivered',
        awb_nr: null,
        delivery_address: {
            lat: 25.1987675,
            lng: 55.265,
            city: 'Dubai',
            address: 'test, 155 - Financial Center Rd - Downtown Dubai - Dubai - Dubai',
            version: 3,
            contact_name: 'joud zouzou',
            country_code: 'ae',
            customer_code: '618aba09-1202-4835-a214-94330fbd32ef',
            contact_phone_number: '+971-54-5730612',
        },

        estimated_pickup_at: '2024-07-31T00:36:12',
        estimated_delivery_at: null,
        timezone: '+04:00',
        country_code: 'ae',
        id_delivery_job: null,
        is_cancelled: 0,
        delivery_job_line_status: null,
        dropoff_delivery_job_line_status: null,
        warehouse_code: 'W00000002A',
        is_batched: 0,
        is_with_associate_driver: 0,
        has_customization: 0,
        is_gift_bag_required: 0,
        is_heavy_order: 0,
        is_delivery_code_required: 0,
        is_id_capture_required: 0,
        order_volume: 0,
        order_weight: 1,
        order_type: null,
        dropoff_zone_code: null,
        is_hll_delivery: 0,
        delivery_tags: ['dont_leave_at_door'],
        recommended_mot_code: 'runner',
        bikes_ratio: 0.1,
        batch_group_name: null,
        batch_recommended_orders: null,
        batch_orders: null,
    },
    {
        order_nr: 'IAEE7V002RPZ93X4JF',
        is_cancellation_requested: 0,
        mp_code: 'noon',
        order_status: 'fullfilled',
        awb_nr: null,
        delivery_address: {
            lat: 25.2087675,
            lng: 55.265,
            city: 'Dubai',
            address: 'test, 155 - Financial Center Rd - Downtown Dubai - Dubai - Dubai',
            version: 3,
            contact_name: 'joud zouzou',
            country_code: 'ae',
            customer_code: '618aba09-1202-4835-a214-94330fbd32ef',
            contact_phone_number: '+971-54-5730612',
        },
        estimated_pickup_at: '2024-07-31T00:36:12',
        estimated_delivery_at: null,
        timezone: '+04:00',
        country_code: 'ae',
        id_delivery_job: null,
        is_cancelled: 0,
        delivery_job_line_status: null,
        dropoff_delivery_job_line_status: null,
        warehouse_code: 'W00000002A',
        is_batched: 0,
        is_with_associate_driver: 0,
        has_customization: 0,
        is_gift_bag_required: 0,
        is_heavy_order: 0,
        is_delivery_code_required: 0,
        is_id_capture_required: 0,
        order_volume: 0,
        order_weight: 1,
        order_type: null,
        dropoff_zone_code: null,
        is_hll_delivery: 0,
        delivery_tags: ['dont_leave_at_door'],
        recommended_mot_code: 'runner',
        bikes_ratio: 0.1,
        batch_group_name: null,
        batch_recommended_orders: null,
        batch_orders: null,
    },
    {
        order_nr: 'IAEE7V002RPZ93X4JN',
        is_cancellation_requested: 0,
        mp_code: 'noon',
        order_status: 'fullfilled',
        awb_nr: null,
        delivery_address: {
            lat: 25.2047675,
            lng: 55.265,
            city: 'Dubai',
            address: 'test, 155 - Financial Center Rd - Downtown Dubai - Dubai - Dubai',
            version: 3,
            contact_name: 'joud zouzou',
            country_code: 'ae',
            customer_code: '618aba09-1202-4835-a214-94330fbd32ef',
            contact_phone_number: '+971-54-5730612',
        },
        estimated_pickup_at: '2024-07-31T00:36:12',
        estimated_delivery_at: null,
        timezone: '+04:00',
        country_code: 'ae',
        id_delivery_job: null,
        is_cancelled: 0,
        delivery_job_line_status: null,
        dropoff_delivery_job_line_status: null,
        warehouse_code: 'W00000002A',
        is_batched: 0,
        is_with_associate_driver: 0,
        has_customization: 0,
        is_gift_bag_required: 0,
        is_heavy_order: 0,
        is_delivery_code_required: 0,
        is_id_capture_required: 0,
        order_volume: 0,
        order_weight: 1,
        order_type: null,
        dropoff_zone_code: null,
        is_hll_delivery: 0,
        delivery_tags: ['dont_leave_at_door'],
        recommended_mot_code: 'runner',
        bikes_ratio: 0.1,
        batch_group_name: null,
        batch_recommended_orders: null,
        batch_orders: null,
    },
];
