import { gql } from "@apollo/client"

export const Add_LISTING_NEW = gql`
  mutation listing($objects: [listing_insert_input!]!) {
    insert_listing(objects: $objects) {
      returning {
        coordinate
        __typename
      }
      __typename
    }
  }
`
export const GET_LISTING  = gql`

  query get_listings{
  listing {
    digital_assets {
      url
      type
    }
    address_data
    currency
    build_date
    description
    listing_id
    property_number
    real_estate_id
    sale_compare_price
    rental_price_id
    sale_price
    sale_type
    status
    real_estate {
      name
    }
    listing_property {
      bathroom_count
      bedroom_count
      created_at
      gymnasium
      kitchen_count
      library
      listing_property_id
      living_room_count
      maids_room
      square_ft
      spa
      store_rooms
    }
  }
}


`
export const ADD_TO_BOOKMARK = gql`
  mutation a($list_id: uuid!,$user_id : uuid! ) {
    insert_bookmark(objects: {listing_id: $list_id,user_id : $user_id}) {
      affected_rows
    }
  }
`
export const GET_BOOKMARK = gql`
  query a($user_id : uuid!){
  bookmark(where: {user_id: {_eq: $user_id}}) {
    uuid
    listing {
      owner_id
      digital_assets {
        url
        type
      }
      address_data
      currency
      build_date
      description
      listing_id
      property_number
      real_estate_id
      sale_compare_price
      rental_price_id
      sale_price
      sale_type
      status
      real_estate {
        name
      }
      listing_property {
        bathroom_count
        bedroom_count
        created_at
        gymnasium
        kitchen_count
        library
        listing_property_id
        living_room_count
        maids_room
        square_ft
        spa
        store_rooms
      }
    }
  }
}

`
export const GET_LIST_BY_ID = gql`
  query a($list_id : uuid!){
    listing(where: { listing_id : { _eq : $list_id }}) {
      digital_assets {
        url
        type
      }
      address_data
      currency
      real_estate_name
      build_date
      description
      listing_id
      property_number
      real_estate_id
      sale_compare_price
      rental_price_id
      sale_price
      sale_type
      status
      house_type{
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances_included
        lot_features
        near_park
        shopping_district
      }
      real_estate {
        name
        real_estate_uuid
      }
      rental_price{
        cycle
        price
      
      }
      listing_property {
        bathroom_count
        bedroom_count
        created_at
        gymnasium
        kitchen_count
        library
        listing_property_id
        living_room_count
        maids_room
        square_ft
        spa
        store_rooms
      }
    }
  }
`
export const DELET_BOOKMARK = gql`
  mutation ($uuid : uuid!){
    delete_bookmark_by_pk(uuid: $uuid) {
      created_at
      listing_id
      user{
        first_name
      }
    }
}
`
export const FILTER_LIST = gql`
  query get_listings($where : listing_bool_exp,$order_by: [listing_order_by]!){
    listing(where: $where,order_by:$order_by) {
      digital_assets {
        url
        type
      }
      address_data
      currency
      build_date
      description
      listing_id
      property_number
      real_estate_id
      sale_compare_price
      rental_price_id
      sale_price
      sale_type
      status
      real_estate {
        name
      }
      listing_property {
        bathroom_count
        bedroom_count
        created_at
        gymnasium
        kitchen_count
        library
        listing_property_id
        living_room_count
        maids_room
        square_ft
        spa
        store_rooms
      }
    }
  }
`
export const GET_FEATURED_LISTS =  gql`
  query get_lists($_eq: Boolean = true, $limit: Int = 4) {
  listing(where: {is_featured: {_eq: $_eq}}, limit: $limit, order_by: { is_popular :desc}) {
    is_popular
    is_featured
    is_discounted
    digital_assets {
      url
      type
    }
    address_data
    currency
    build_date
    description
    listing_id
    property_number
    real_estate_id
    sale_compare_price
    rental_price_id
    sale_price
    sale_type
    status
    real_estate {
      name
    }
    listing_property {
      bathroom_count
      bedroom_count
      created_at
      gymnasium
      kitchen_count
      library
      listing_property_id
      living_room_count
      maids_room
      square_ft
      spa
      store_rooms
    }
  }
}


`
export const GET_MY_LISTING  = gql`
  query get_listings($userId : uuid!){
  listing (where: {owner_id: { _eq : $userId}}){
    digital_assets {
      url
      type
    }
    address_data
    currency
    build_date
    description
    listing_id
    property_number
    real_estate_id
    sale_compare_price
    rental_price_id
    sale_price
    sale_type
    status
    real_estate {
      name
    }
    listing_property {
      bathroom_count
      bedroom_count
      created_at
      gymnasium
      kitchen_count
      library
      listing_property_id
      living_room_count
      maids_room
      square_ft
      spa
      store_rooms
    }
  }
}


`

export const GET_REAL_ESTATES = gql`
query {
  real_estate {
    name
    icon
    real_estate_uuid
    created_at
  }
}
`

export const GET_HOME_TYPES = gql`
query {
  house_type(where: {available: {_eq: true}}) {
    type_name
    available
    house_type_id
  }
}

`