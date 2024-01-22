import Link from "next/link"

const MegaMenu = () => {
  return (
    <div className='z-50 max-w-[1700px] w-full shadow left-0 gap-16 font-light bg-lightBg h-fit py-10 mx-auto rounded-b-3xl px-[10em] flex justify-between' >
      <div className='z-50 flex flex-col gap-3 basis-1/2'>
        <h3 className='font-normal text-2xl '>
            Ziccow is making it simpler to sell, buy, and rent your properties to move forward.
        </h3>
        <p className='text-sm text-lightGray'>
            Ziccow helps you sell, buy, and rent your properties, your way. Easily explore your selling options below and get personalized market value estimates — we can even help you choose the best option when you’re ready.
        </p>
      </div>

      <div className='z-50 flex flex-col basis-1/3'>

        <Link href={"/properties"} className='text-mainBlue font-semibold'>Buy a Property</Link>
        <div className='z-50 my-2 w-full h-[1px] bg-slate-400'></div>
        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Properties</h5>
            <p className='text-xs text-lightGray'>
                Homes for sale, New listings, Open houses, Recent home sales, For sale by owner.
            </p>
        </div>
        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Resources</h5>
            <p className='text-xs text-lightGray'>
                Home buying guide, Real estate app.
            </p>
        </div>
       
      </div>




      <div className='z-50 flex flex-col basis-1/3'>

        <Link href={"/login"} className='text-mainBlue font-semibold'>Sell a Property</Link>

        <div className='z-50 my-2 w-full h-[1px] bg-slate-400'></div>

        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Selling options</h5>
            <p className='text-xs text-lightGray'>
            Selling agents, Post for sale.
            </p>
        </div>

        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Resources</h5>
            <p className='text-xs text-lightGray'>
            Seller’s guide, Home values, Real estate app.
            </p>
        </div>
       
      </div>

      <div className='z-50 flex flex-col basis-1/3'>

        <Link href={"/properties"} className='text-mainBlue font-semibold'>Rent a Property</Link>
        <div className='z-50 my-2 w-full h-[1px] bg-slate-400'></div>
        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Search for rentals</h5>
            <p className='text-xs text-lightGray'>
                Rental buildings, Apartments for rent, Houses for rent, Your rental.
            </p>
        </div>
        <div className='z-50 flex flex-col gap-1 mt-5'>
            <h5 className='font-normal'>Resources</h5>
            <p className='text-xs text-lightGray'>
                Affordability calculator, Rent Guide, Real estate app.
            </p>
        </div>
       
      </div>

      


    </div>
  )
}

export default MegaMenu
