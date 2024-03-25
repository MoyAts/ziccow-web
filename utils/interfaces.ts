
export interface houseInf {
    digital_assets : Array<{ url : string}>,
    address_data : string
    listing_id : string
    currency : string,
    build_date : string,
    sale_price : string,
    sale_type : string,
    status : string,
    description : string,
    property_number : string,
    real_estate_name : string,
    rental_price : {
        cycle : string,
        price : string,
        
    },
    real_estate : {
        name : string,
        real_estate_uuid : string
    },
    listing_property :  {
        bathroom_count : string,
        bedroom_count : string,
        gymnasium : string,
        kitchen_count : string,
        library : string,
        living_room_count : string,
        maids_room : string,
        square_ft : string,
        spa : string,
        store_rooms : string,
    }
    extra_features : {
        applicances_included : boolean,
        lot_features: boolean,
        near_park: boolean,
        shopping_district: boolean,
        parking_feature : boolean
    },
    house_type : {
        house_type_id : string,
        icon : string | null,
        type_name : string, 
        available : boolean
    }
    
}


export interface houseFeaturedInf {
    is_popular: boolean
    is_featured: boolean
    is_discounted : boolean
    digital_assets : Array<{ url : string}>,
    address_data : string
    listing_id : string
    currency : string,
    build_date : string,
    sale_price : string,
    sale_type : string,
    status : string,
    real_estate : {
        name : string
    },
    listing_property :  {
        bathroom_count : string,
        bedroom_count : string,
        gymnasium : string,
        kitchen_count : string,
        library : string,
        living_room_count : string,
        maids_room : string,
        square_ft : string,
        spa : string,
        store_rooms : string,
    }
    extra_features : {
        applicances_included : boolean,
        lot_features: boolean,
        near_park: boolean,
        shopping_district: boolean,
        parking_feature : boolean
    }
    
}
