"use client"
import { houseInf } from "@/utils/interfaces"




interface Props {
  house: houseInf
}

const price = ({ house }: Props) => {
  const isDolar = house.currency != null && house.currency == "USD" 
  let price = house.sale_type == 'Sell' ? house.sale_price : house.rental_price?.price ?? ""
  console.log(price)
  price = price ? price.toString() : ""
  price = price ? isDolar ?  price : price.slice(1) + " Birr" : "0"
  return (
    <div className="mt-5 bg-white py-4 px-4 rounded-xl shadow h-fit">
      <div className="flex gap-2 text-xl font-semibold">
        <div className="w-5 my-auto h-5 rounded bg-gray-400 text-lightGray flex justify-center items-center">
          $
        </div>
        <p>
          Price Status 
        </p>
      </div>
      <div className="flex flex-col my-4 mt-6 gap-5 text-[16px] text-lightGray">


        {/* <div className="flex flex-col gap-2 border-b px-2 pb-4 ">
          <div>status</div>
          <div className="text-slate-700">High end property</div>
        </div> */}

        <div className="flex flex-col gap-2 border-b px-2 pb-4 ">
          <div>Property Type</div>
          <div className="text-slate-700">{house.sale_type}</div>
        </div>

        <div className="flex flex-col gap-3  px-2 pb-4 ">
          <div>Total Price</div>
          <div className=""> <span className="text-black text-2xl font-semibold">{house.sale_type == 'Sell' ? price : `${price}/${house.rental_price?.cycle ?? "Month"}`}</span> </div>
        </div>



      </div>

    </div>
  )
}

export default price
