export interface MeliProductInterface {
    id?: string,
    site_id?: string,
    title?: string,
    seller: { id?: string, permalink?: string, power_seller_status?: string, car_dealer?: boolean, real_estate_agency?: boolean },
    price?: number,
    currency_id?: string,
    available_quantity?: number,
    sold_quantity?: number,
    buying_mode?: string,
    listing_type_id?: string,
    stop_time?: string,
    condition?: string,
    permalink?: string,
    thumbnail?: string,
    accepts_mercadopago?: boolean,
    installments?: { quantity?: number, amount?: number, rate?: number, currency_id?: string },
    address?: { state_id?: string, state_name?: string, city_id?: string, city_name?: string },
    shipping?: { free_shipping?: boolean, mode?: string, tags?: {}, logistic_type?: string, store_pick_up?: boolean },
    seller_address?: { id?: string, comment?: string, address_line?: string, zip_code?: string, country?: {}, state?: {}, city?: {} },
    attributes?: [],
    differential_pricing?: [],
    original_price?: number,
    category_id?: string,
    official_store_id?: string,
    catalog_product_id?: string,
    tags?: [],
    catalog_listing?: boolean
}

export interface MeliInterface {
    site_id?: string,
    query?: string,
    paging?: { total?: number, offset?: number, limit?: number, primary_results?: number },
    results?: MeliProductInterface[],
    secondary_results?: [],
    related_results?: [],
    sort?: { id?: string, name?: string },
    available_sorts?: [],
    filters?: []
    available_filters?: [],
}