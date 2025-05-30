"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "@apollo/client";
import { GET_REAL_ESTATES } from "@/graphql/features/listing";
// import RightU
import { FaArrowRight } from "react-icons/fa6";

const NameSlide = ({
  selectedRealEstate,
  selected,
  setSelected,
  initialRealestateType,
  getRealestateReview
}: any) => {
  const { loading, error, data } = useQuery(GET_REAL_ESTATES, {
    fetchPolicy: "no-cache",
  });

  // load real estates data

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      paritialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 30,
    },
  };
  const realEstateSelected = (real_estate_uuid: string, name: string) => {
    getRealestateReview({
      variables : {
        real_estate_id : real_estate_uuid
      }
    })
    console.log("Work")
    setSelected(real_estate_uuid);
    selectedRealEstate(real_estate_uuid, name);
  };
  useEffect(() => {
    data &&
      data.real_estate.map((realEstate: any, idx: any) => {
        initialRealestateType[0] == realEstate.real_estate_uuid &&
          realEstateSelected(
            realEstate.real_estate_uuid,
            realEstate?.name ?? "Unknown",
          );
      });
  }, [data]);
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute top-[35%] pointer-events-none carousel-button-group my-4   gap-4 flex  w-full">
        {currentSlide > 0 && (
          <button
            className={`bg-mainBlue grid pointer-events-auto place-items-center rounded-full w-[2.5em] h-[2.5em] `}
            onClick={() => previous()}
          >
            {<FaArrowRight className="text-white rotate-180" />}
          </button>
        )}
        {
          <button
            className="bg-mainBlue ml-auto pointer-events-auto grid place-items-center rounded-full w-[2.5em] h-[2.5em]"
            onClick={() => next()}
          >
            {<FaArrowRight className="text-white" />}
          </button>
        }
      </div>
    );
  };
  return (
    <div className="w-full relative ">
      <Carousel
        ssr
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
        itemClass="carousel-image-item"
        // autoPlaySpeed={6000}
        responsive={responsive}
        className=" max-lg:max-w-[100vw]   mt-12"
        slidesToSlide={2}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div className="w-full rounded-xl border-2 my-3 ps-3 py-2  border-red-400 bg-red-400 bg-opacity-40">
            {error.graphQLErrors[0]?.message ?? "something goes wrong"}
          </div>
        ) : data ? (
          data.real_estate.map((realEstate: any, idx: any) => (
            // <Box key={ind} house={house} />
            <div
              key={idx}
              onClick={() =>
                realEstateSelected(
                  realEstate.real_estate_uuid,
                  realEstate?.name ?? "Unknown",
                )
              }
              className={`w-fit flex  flex-col gap-2 cursor-pointer duration-200 p-1 border-2  ${selected == realEstate.real_estate_uuid ? " bg-blue-200 rounded-lg border-blue-600" : "border-transparent"}`}
            >
              <Image
                src={realEstate?.icon ?? ""}
                width={"77"}
                height={"77"}
                alt="a"
                className="h-[4rem] mx-auto rounded-full w-[4rem] object-contain"
              />
              <div className="mx-auto">{realEstate?.name ?? "Unknown"}</div>
            </div>
          ))
        ) : (
          <div>......</div>
        )}
      </Carousel>
    </div>
    // <div className='p-2 bg-blue-200 cursor-not-allowed rounded-full w-[2em] h-[2em] flex text-white'>
    //     <ListIcon className='m-auto' />
    // </div>

    //     <div className='p-2 bg-mainBlue cursor-pointer rounded-full w-[2em] h-[2em] flex text-white'>
    //         <ListIcon className='m-auto rotate-180' />
    //     </div>
  );
};

export default NameSlide;
