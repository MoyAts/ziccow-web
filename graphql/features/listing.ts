import { gql } from "@apollo/client"

export const Add_LISTING = gql`
  mutation listing( 
    $address: String!,
    $sellingPrice: money!,
    $yearBuilt: String!,
    $squareFootage: bigint!,
    $numOfBathrooms: bigint!,
    $numOfBedrooms: bigint!,
    $urls : [property_digital_asset_insert_input!]! 
  ) {
    insert_listing(
      objects: { 
        address_data: $address,
        coordinate: "100032032", 
        status: "apartment", 
        sale_price: $sellingPrice, 
        build_date: $yearBuilt, 
        digital_assets_list: {
          data: $urls
        },
        listing_property: {   
          data: { 
            bathroom_count: $numOfBathrooms, 
            bedroom_count: $numOfBedrooms, 
            square_ft: $squareFootage
          }
        }, 
        description: "new"
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