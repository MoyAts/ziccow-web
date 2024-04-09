"use client";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="w-full bg-lightBg flex flex-col">
      <div className="font-bold text-lg my-5 mt-10">About the Property</div>
      <div className="flex flex-col gap-5 text-lightGray">
        <p>
          Beautiful and Bright 1 Bedroom Condo in Full Service Doorman Building!
        </p>
        <p>
          Welcome to Apartment 314 located on the third floor of Novo 64 in the
          heart of Forest Hills! This unit features a spacious living area with
          beautiful maple hardwood floors and expansive windows overlooking a
          quiet street. The kitchen features top of the line Jenn-Air stainless
          steel appliances, Caesarstone countertops, and an oversized
          island/breakfast bar. The spacious natural stone bathroom is outfitted
          with Kohler fixtures and European-style vanity. The unit has central
          heating and cooling and has lots of storage space throughout with
          three oversized closets in the front hallway and bedroom.
        </p>
        <p>
          Novo 64 is a luxury, full-service building consisting of 5 floors.
          Building amenities include a full-time doorman, concierge, lounge,
          gym, sauna, playroom, laundry, cold storage, common courtyard, and
          cinema room. Morning shuttle service is offered directly from the
          building to Express/LIRR trains at 71st/Continental Avenue. M/R subway
          station is a few blocks away. Express bus QM42 is also available in
          front of the building. Pets Welcome!
        </p>
        <b>Call or Message today to view!</b>
      </div>
    </div>
  );
};

export default about;
