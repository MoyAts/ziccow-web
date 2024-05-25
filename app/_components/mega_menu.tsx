"use client";
import Link from "next/link";

const MegaMenu = () => {
  return (
    <div className="w-full mx-auto flex bg-lightBg shadow rounded-b-3xl pb-8 pt-2">
      <div className="z-50 max-w-[1700px] w-full max-tablet:flex-col-reverse left-0 gap-16 font-light  h-fit py-10 mx-auto max-tablet:px-10 max-mobile:px-5 px-20 flex justify-between">
        <div className="z-50 flex flex-col gap-3 max-tablet:basis-full min-w-[200px] basis-1/2">
          <h3 className="font-normal text-2xl ">
            Zirrow is making it simpler to sell, buy, and rent your properties
            to move forward.
          </h3>
          <p className=" text-lightGray text-sm">
            {/* Zirrow helps you sell, buy, and rent your properties, your way.
            Easily explore your selling options below and get personalized
            market value estimates â€” we can even help you choose the best
            option when youâ€™re ready. */}
            Enjoy our quality service
          </p>
        </div>

        <div className="flex gap-16">
          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/properties?propertyManagment=Sell"}
              className="text-mainBlue font-semibold text-lg"
            >
              Buy a Property <br />
              ቤት ለመግዛት
            </Link>
            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal">
                Expert Guidance for First-Time Home Buyers
              </h5>
              <p className=" text-lightGray text-sm">
                Our expert guidance helps first-time buyers navigate the
                home-buying process effortlessly. We provide clear, concise
                information to ensure a smooth and informed purchase.
              </p>
              {/* <p className="text-lightGray">
                When it comes to buying your first home, our expert guidance can
                help you discover your dream property with no difficulty. Our
                focus is on providing clear and concise information to
                first-time buyers, ensuring a smooth and informed purchasing
                process. Let us assist you in finding the perfect home that
                meets your needs and preferences
              </p> */}
            </div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal ">
                Discover Your Dream Property
              </h5>
              <p className=" text-lightGray text-sm">
                Let us assist you in finding the perfect home that meets your
                needs and preferences. With our support, discovering your dream
                property is hassle-free.
              </p>
            </div>
          </div>

          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/addproperty"}
              className="text-mainBlue font-semibold text-lg capitalize"
            >
              add new listing <br />
              አዲስ ለማስገባት
            </Link>

            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>

            <div className="z-50 flex flex-col gap-1 mt-5">
              {/* <p className="text-lightGray">
                Adding a new listing to your website can be a great way to
                attract more visitors and potential customers. You can provide
                detailed information about the product or service you are
                offering, including images, 3D virtual ture, pricing, and any
                other relevant details. Make sure to use clear and engaging
                language to entice users to learn more about what you have to
                offer. Additionally, consider optimizing your listing for search
                engines to improve its visibility online. Contact us if you need
                any further assistance with this process!
              </p> */}
              <h5 className="font-normal ">
                Attract More Visitors with New Listings
              </h5>
              <p className=" text-lightGray text-sm">
                Adding a new listing can attract more visitors and potential
                customers. Provide detailed information, including images, 3D
                virtual tours, pricing, and other relevant details.
              </p>
            </div>

            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal ">Optimize and Engage</h5>
              <p className=" text-lightGray text-sm">
                Use clear, engaging language to entice users and optimize your
                listing for search engines to improve visibility. Contact us for
                further assistance with this process!
              </p>
            </div>
          </div>

          <div className="z-50 flex flex-col basis-1/3">
            <Link
              href={"/properties?propertyManagment=Rental"}
              className="text-mainBlue font-semibold text-lg"
            >
              Rent a Property <br />
              ቤት ለመከራየት
            </Link>
            <div className="z-50 my-2 w-full h-[1px] bg-slate-400"></div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              {/* <p className="text-lightGray">
                We are glad you're interested in renting a house through our
                website. Our platform utilizes the best technology to assist you
                in finding the perfect rental property. You can contact us for
                more questions you have about the rental process, property
                details, or any other inquiries you may have. Let's get started
                on finding your ideal rental home!
              </p> */}
              <h5 className="font-normal ">
                Find Your Ideal Rental Home
              </h5>
              <p className=" text-lightGray text-sm">
                We're thrilled you're considering renting through our website.
                Our platform employs top-notch technology to help you discover
                the perfect rental property.
              </p>
            </div>
            <div className="z-50 flex flex-col gap-1 mt-5">
              <h5 className="font-normal ">Get Started Today</h5>
              <p className=" text-lightGray text-sm">
                Contact us for any questions about the rental process, property
                details, or other inquiries. Let's embark on finding your ideal
                rental home together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
