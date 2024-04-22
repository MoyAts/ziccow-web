"use client";
import Link from "next/link";

const MegaMenu = () => {
  return (
    <div className="w-full mx-auto flex bg-lightBg shadow rounded-b-3xl pb-8 pt-2">
      <div className="z-50 max-w-[1700px] w-full max-tablet:flex-col-reverse left-0 gap-16 font-light  h-fit py-10 mx-auto max-tablet:px-10 max-mobile:px-5 px-20 flex justify-between">
        <div className="z-50 flex flex-col gap-3 max-tablet:basis-full basis-1/2">
          <h3 className="font-normal text-2xl ">
            Zirrow is making it simpler to sell, buy, and rent your properties
            to move forward.
          </h3>
          <p className=" text-lightGray">
            Zirrow helps you sell, buy, and rent your properties, your way.
            Easily explore your selling options below and get personalized
            market value estimates â€” we can even help you choose the best
            option when youâ€™re ready.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/properties?propertyManagment=Sell"}
              className="text-mainBlue font-semibold text-lg"
            >
              Buy a Property
            </Link>
            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Properties</h5>
              <p className=" text-lightGray">
                Homes for sale, New listings, Open houses, Recent home sales,
                For sale by owner.
              </p>
            </div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Resources</h5>
              <p className=" text-lightGray">
                Home buying guide, Real estate app.
              </p>
            </div>
          </div>

          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/addproperty"}
              className="text-mainBlue font-semibold text-lg capitalize"
            >
              add new listing{" "}
            </Link>

            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>

            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Selling options</h5>
              <p className=" text-lightGray">Selling agents, Post for sale.</p>
            </div>

            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Resources</h5>
              <p className=" text-lightGray">
                Sellerâ€™s guide, Home values, Real estate app.
              </p>
            </div>
          </div>

          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/properties?propertyManagment=Rental"}
              className="text-mainBlue font-semibold text-lg"
            >
              Rent a Property
            </Link>
            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Search for rentals</h5>
              <p className=" text-lightGray">
                Rental buildings, Apartments for rent, Houses for rent, Your
                rental.
              </p>
            </div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal text-lg">Resources</h5>
              <p className=" text-lightGray">
                Affordability calculator, Rent Guide, Real estate app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
