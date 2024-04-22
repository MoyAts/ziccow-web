import Link from "next/link";
import React from "react";

const confirmed = ({ listing_id }: { listing_id: string }) => {
  return (
    <div className="w-full">
      <div className="text-lg font-semibold">All done ...</div>
      <div className="text-[40px] max-mobile:text-3xl max-mobile:text-center w-full font-semibold mt-1 mb-4">
        Successful registration...
      </div>
      <div className="text-lightGray">
        <div className="mb-3">
          Your property has been successfully added to the listing.
        </div>
        <div className="flex gap-2">
          <p>You can can check your property</p>
          <Link href={"/properties/" + listing_id}>here.</Link>
        </div>
      </div>
    </div>
  );
};

export default confirmed;
