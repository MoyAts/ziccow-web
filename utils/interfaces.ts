
export interface houseInf {
    digital_assets : Array<{ url : string}>,
    address_data : string
    listing_id : string
    currency : string,
    build_date : string,
    created_at : string,
    sale_price : string,
    sale_type : string,
    status : string,
    description : string,
    property_number : string,
    real_estate_name : string,
    
    views_count : number,
    save_count : number,
    owner :  {
        phone_number : string,
        first_name : string | null,
        profile_pic: string | null,
        social_twitter: string | null,
        social_facebook: string | null,
        social_instagram: string | null,
        social_telegram: string | null,
        social_whatsapp: string | null,
      } | null,
    rental_price : {
        cycle : string,
        price : string,
        
    },
    real_estate : {
        name : string,
        real_estate_uuid : string
    },
    matterport_link: string,
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
        praying_room: string,
    }
    extra_features : {
        applicances_included : boolean,
        lot_features: boolean,
        near_park: boolean,
        shopping_district: boolean,
        parking_feature : boolean,
        college_and_uni : boolean,
        applicances : boolean,
        construction_custom : String | null,
        hospital : boolean | null,
        ordinary_material : boolean | null,
        primary_school: boolean | null,
        secondary_school: boolean | null,
        supermarket: boolean | null,
        unique_material: boolean | null,
        air_conditioning_system : boolean | null,
        back_yard : boolean | null,
        basement : boolean | null,
        electricity : boolean | null,
        garbage_shutter: boolean | null,
        ground_water: boolean | null,
        other_community: boolean | null,
        secondary_electricity: boolean | null,
        security_system: boolean | null,
        service_rooms: boolean | null,
        swimming: boolean | null,
        water: boolean | null,
        
    },
    verified : boolean,
    completion_status : String | null,
    payment_program : String | null,
    est_rental_price : String | null,
    conveyancing_payment: String | null,
    gov_payment_ashura : String | null,
    leasing_payment : String | null,
    commission_payment : String | null,

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
