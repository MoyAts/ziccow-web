import { gql } from "@apollo/client";

export const Add_LISTING_NEW = gql`
  mutation listing($objects: [listing_insert_input!]!) {
    insert_listing(objects: $objects) {
      returning {
        coordinate
        listing_id
        __typename
      }
      __typename
    }
  }
`;
export const GET_LISTING = gql`
  query get_listings {
    listing {
      digital_assets {
        url
        type
      }
      property_name
      type_of_person
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_whatsapp
        phone_number
        user_id
      }
      views_count
      save_count
      created_at
      verified
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
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;
export const ADD_TO_BOOKMARK = gql`
  mutation a($list_id: uuid!) {
    insert_bookmark_one(object: { listing_id: $list_id }) {
      created_at
    }
  }
`;
export const GET_BOOKMARK = gql`
  query a($user_id: uuid!) {
    bookmark(where: { user_id: { _eq: $user_id } }) {
      uuid
      listing {
        owner_id
        digital_assets {
          url
          type
        }
        house_type {
          type_name
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
`;
export const GET_LIST_BY_ID = gql`
  query a($list_id: uuid!) {
    listing(where: { listing_id: { _eq: $list_id } }) {
      digital_assets {
        url
        type
      }
      real_estate_id
      listing_property_id
      property_name
      project_name
      type_of_person
      extra_features_id
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_tiktok
        social_whatsapp
        phone_number
        bio
        user_id
      }
      views_count
      save_count
      created_at
      verified
      address_data
      currency
      real_estate_name
      build_date
      description
      listing_id
      property_number
      sale_compare_price
      rental_price_id
      sale_price
      sale_type
      status
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        other_utility
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;

export const DELET_BOOKMARK = gql`
  mutation ($uuid: uuid!) {
    delete_bookmark_by_pk(uuid: $uuid) {
      created_at
      listing_id
      user {
        first_name
      }
    }
  }
`;
export const FILTER_LIST = gql`
  query get_listings($where: listing_bool_exp, $order_by: [listing_order_by]!) {
    listing(where: $where, order_by: $order_by) {
      digital_assets {
        url
        type
      }
      property_name
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_whatsapp
        phone_number
        user_id
      }
      views_count
      save_count
      created_at
      verified
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
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;

export const FILTER_LIST_LIMITED = gql`
  query get_listings($where: listing_bool_exp, $order_by: [listing_order_by]!) {
    listing(where: $where, order_by: $order_by,limit : 6) {
      digital_assets {
        url
        type
      }
      property_name
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_whatsapp
        phone_number
        user_id
      }
      views_count
      save_count
      created_at
      verified
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
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;

export const GET_FEATURED_LISTS = gql`
  query get_lists($_eq: Boolean = true, $limit: Int = 4) {
    listing(
      where: {
        _or: [
          { is_featured: { _eq: $_eq } }
          { is_discounted: { _eq: $_eq } }
          { is_popular: { _eq: $_eq } }
        ]
      }
      limit: $limit
      order_by: { is_popular: desc }
    ) {
      listing_id
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
`;
export const GET_RECOMMENDATION_FOR_HOME_PAGE = gql`
  query get_lists($limit: Int = 4) {
    listing(
      where: { real_estate_id: { _is_null: false } }
      limit: $limit
      order_by: { is_popular: desc }
    ) {
      digital_assets {
        url
        type
      }
      property_name
      type_of_person
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_whatsapp
        phone_number
      }
      views_count
      save_count
      created_at
      verified
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
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;
export const GET_MY_LISTING = gql`
  query get_listings($where: listing_bool_exp) {
    listing(where: $where) {
      digital_assets {
        url
        type
      }
      property_name
      type_of_person
      owner {
        first_name
        last_name
        profile_pic
        social_twitter
        social_facebook
        social_youtube
        social_instagram
        social_telegram
        social_whatsapp
        phone_number
      }
      views_count
      save_count
      created_at
      verified
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
      house_type {
        house_type_id
        icon
        type_name
        available
      }
      extra_features {
        applicances
        lot_features
        primary_school
        secondary_school
        college_and_uni
        construction_custom
        hospital
        supermarket
        unique_material
        ordinary_material
        air_conditioning_system
        back_yard
        basement
        created_at
        electricity
        garbage_shutter
        ground_water
        other_community
        parking_feature
        secondary_electricity
        security_system
        service_rooms
        swimming
        water
      }
      payment_program
      gov_payment_ashura
      completion_status
      matterport_link
      est_rental_price
      leasing_payment
      conveyancing_payment
      commission_payment
      real_estate {
        name
        real_estate_uuid
      }
      rental_price {
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
        praying_room
        store_rooms
        praying_room
      }
    }
  }
`;

export const GET_REAL_ESTATES = gql`
  query {
    real_estate {
      name
      icon
      real_estate_uuid
      created_at
    }
  }
`;

export const GET_HOME_TYPES = gql`
  query {
    house_type(where: { available: { _eq: true } }) {
      type_name
      available
      house_type_id
      is_realestate
    }
  }
`;

export const GET_NUMBER_OF_SAVES = gql`
  query ($list_id: uuid!) {
    bookmark(where: { listing_id: { _eq: $list_id } }, distinct_on: user_id) {
      created_at
    }
  }
`;

export const ADD_LISTING_VIEW = gql`
  mutation ($listing_id: uuid!) {
    update_listing(
      _inc: { views_count: 1 }
      where: { listing_id: { _eq: $listing_id } }
    ) {
      affected_rows
    }
  }
`;

export const ADD_LISTING_REVIEW = gql`
  mutation (
    $comment: String!
    $rating: bigint!
    $user_id: uuid!
    $broker_id: uuid!
    $listing_id: uuid!
  ) {
    insert_property_review(
      objects: {
        comment: $comment
        rating: $rating
        user_id: $user_id
        broker_id: $broker_id
        listing_id: $listing_id
      }
    ) {
      returning {
        uuid
        comment
        rating
        created_at
        user {
          profile_pic
          first_name
          last_name
        }
        review_likes {
          user_like_id
        }
      }
    }
  }
`;

export const GET_LISTING_REVIEW = gql`
  query ($broker_id: uuid!) {
    property_review(
      order_by: { created_at: desc }
      where: { broker_id: { _eq: $broker_id } }
    ) {
      uuid
      comment
      rating
      created_at
      user {
        profile_pic
        first_name
        last_name
      }
      review_likes {
        user_like_id
      }
    }
  }
`;

export const LIKE_PROPERTY_REVIEW = gql`
  mutation ($user_id: uuid!, $review_id: uuid!) {
    insert_review_like_one(
      object: { user_like_id: $user_id, review_id: $review_id }
    ) {
      review_id
    }
  }
`;

export const UNLIKE_PROPERTY_REVIEW = gql`
  mutation ($user_id: uuid!, $review_id: uuid!) {
    delete_review_like(
      where: { review_id: { _eq: $review_id }, user_like_id: { _eq: $user_id } }
    ) {
      affected_rows
    }
  }
`;

export const LIKE_REALESTATE_REVIEW = gql`
  mutation ($user_id: uuid!, $review_id: uuid!) {
    insert_review_like_one(
      object: { user_like_id: $user_id, realestate_review_id: $review_id }
    ) {
      realestate_review_id
    }
  }
`;

export const UNLIKE_REALESTATE_REVIEW = gql`
  mutation ($user_id: uuid!, $review_id: uuid!) {
    delete_review_like(
      where: {
        realestate_review_id: { _eq: $review_id }
        user_like_id: { _eq: $user_id }
      }
    ) {
      affected_rows
    }
  }
`;

export const DELET_MYLIST = gql`
  mutation ($uuid: uuid!) {
    delete_listing(where: { listing_id: { _eq: $uuid } }) {
      returning {
        listing_id
      }
    }
  }
`;

export const UPDATE_STATUS_MYLIST = gql`
  mutation ($uuid: uuid!, $status: String!) {
    update_listing(
      where: { listing_id: { _eq: $uuid } }
      _set: { status: $status }
    ) {
      returning {
        status
      }
    }
  }
`;

export const UPDATE_LIST = gql`
  mutation UpdateListing($listing_id: uuid!, $_set: listing_set_input!) {
    update_listing(_set: $_set, where: { listing_id: { _eq: $listing_id } }) {
      affected_rows
    }
  }
`;
export const UPDATE_EXTRA_FEATURE = gql`
  mutation b($id: uuid!, $set: extra_features_set_input!) {
    update_extra_features(where: { uuid: { _eq: $id } }, _set: $set) {
      affected_rows
    }
  }
`;
export const UPDATE_LISTING_PROPERTY = gql`
  mutation b($id: uuid!, $set: listing_property_set_input!) {
    update_listing_property(
      where: { listing_property_id: { _eq: $id } }
      _set: $set
    ) {
      affected_rows
    }
  }
`;
