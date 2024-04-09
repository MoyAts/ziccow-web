"use client";
import Image from "next/image";
import Link from "next/link";
import aboutSvg from "../../assets/images/about.svg";
import { IoIosArrowBack as NextIcon } from "react-icons/io";
import Photo from "../../assets/images/Photo2.png";

const hero = () => {
  return (
    <div className="h-fit max-w-[1700px]  px-20  max-tablet:px-10  max-small:px-5 mx-auto border-t border-gray-400">
      <div className="pt-4 flex gap-3">
        <Image src={aboutSvg} alt="" />
        <p>About Us</p>
        <NextIcon className="rotate-180 my-auto" />
        <p className="text-lightGray">Honorary Partners</p>
      </div>

      <div className="mt-6 ">
        <h1 className="text-[35px] max-tablet:text-[25px] max-tablet:text-center">
          Our Honorary Partners.
        </h1>
        <p className="text-lightGray max-tablet:text-center">
          We would also like to extend our gratitude to all our supporters and
          well-wishers who have played a crucial role in our journey.
        </p>
      </div>

      <div className="flex w-full mt-12 pb-12 gap-5  max-tablet:flex-col">
        <div className="w-1/3 max-tablet:w-full flex justify-center my-auto">
          <Image
            src={Photo}
            className="w-3/4  max-small:w-3/4 max-tablet:w-1/2 object-contain "
            alt=""
          />
        </div>
        <div className="flex w-2/3 max-tablet:w-full  flex-col gap-5 text-lightGray">
          <div className="text-xl text-black">About Sophie Moore</div>
          <p>
            Beautiful and Bright 1 Bedroom Condo in Full Service Doorman
            Building!
          </p>
          <p>
            Welcome to Apartment 314 located on the third floor of Novo 64 in
            the heart of Forest Hills! This unit features a spacious living area
            with beautiful maple hardwood floors and expansive windows
            overlooking a quiet street. The kitchen features top of the line
            Jenn-Air stainless steel appliances, Caesarstone countertops, and an
            oversized island/breakfast bar. The spacious natural stone bathroom
            is outfitted with Kohler fixtures and European-style vanity. The
            unit has central heating and cooling and has lots of storage space
            throughout with three oversized closets in the front hallway and
            bedroom.
          </p>
          <p>
            Novo 64 is a luxury, full-service building consisting of 5 floors.
            Building amenities include a full-time doorman, concierge, lounge,
            gym, sauna, playroom, laundry, cold storage, common courtyard, and
            cinema room. Morning shuttle service is offered directly from the
            building to Express/LIRR trains at 71st/Continental Avenue. M/R
            subway station is a few blocks away. Express bus QM42 is also
            available in front of the building. Pets Welcome!
          </p>
          <b>Call or Message today to view!</b>
        </div>
      </div>
    </div>
  );
};

export default hero;
