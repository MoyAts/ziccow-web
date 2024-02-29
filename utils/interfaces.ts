
export interface houseInf {
    digital_assets : Array<{ url : string}>,
    address_data : string
   
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
    
}
