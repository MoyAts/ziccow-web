import { gql } from "@apollo/client"

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

  query a{
  listing(limit : 100,where : {
    digital_assets_list : { 
      url : {
        _neq :"ff"
    } 
      }
        })  {
            address_data
            coordinate
            Amenities
            additional_features{
              created_at
            }
            listing_id
            digital_assets_list{
              url
            }
            rental_price {
              price
            }
            listing_property {
              bathroom_count
              bedroom_count
              square_ft
            }
        }
}
`