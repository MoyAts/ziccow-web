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
export const Add_LISTING = gql`
  mutation listing( 
    $address: String,
    $sellingPrice: money,
    $yearBuilt: String,
    $squareFootage: bigint,
    $numOfBathrooms: bigint,
    $numOfBedrooms: bigint,
    $numOfMaidsRooms: bigint,
    $numOfGyms: bigint,
    $numOfStores: bigint,
    $numOfSpas: bigint,
    $numOfLibs: bigint,
    $numOfLivingrooms : bigint,
    $numOfKitchens : bigint,
    $urls : [digital_assets_insert_input!]! ,
    $name : name,
    $homeType : uuid,
    $nearPark : Boolean,
    $lotFeature : Boolean,
    $appliances : Boolean,
    $parkingFeature : Boolean,
    $shoppingDistrict : Boolean,
    $RentalPrice : bigint,
    $cycle : String,
    $currency : String,
    $owner_id : uuid
  
  ) {
    insert_listing(
      objects: { 
        real_estate: {
          data: {
            name: $name
            }
        }
        address_data: $address,
        house_type_id : $homeType,
        sale_price: $sellingPrice, 
        currency : $currency,
        build_date: $yearBuilt,
        description : "new", 
        digital_assets: {
          data: $urls
        },
        listing_property: {   
          data: { 
            bathroom_count: $numOfBathrooms, 
            bedroom_count: $numOfBedrooms, 
            square_ft: $squareFootage,
            maids_room: $numOfMaidsRooms,
            spa: $numOfSpas, 
            store_rooms: $numOfStores, 
            living_room_count: $numOfLivingrooms, 
            library: $numOfLibs,
            kitchen_count: $numOfKitchens,
            gymnasium: $numOfGyms
          }
        }, 
        extra_features: {
          data: { 
              near_park: $nearPark, 
              lot_features: $lotFeature, 
              applicances_included: $appliances, 
              parking_feature: $parkingFeature, 
              shopping_district: $shoppingDistrict
            }
        },
        rental_price: { 
          data: { 
            price: 3232, 
            cycle: "1 month"
            }
          }    
      }
    ) {
      returning {
        coordinate
      }
    }
  }
`;


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