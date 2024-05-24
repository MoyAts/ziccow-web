"use client";

const index = () => {
  return (
    <div className="w-full bg-mainDark h-[45vh] max-tablet:h-fit tablet:max-h-[300px] flex">
      <div className="w-full max-w-[1700px]  m-auto  flex max-tablet:flex-col max-tablet:gap-4 gap-12 py-20 max-vsmall:px-5 max-tablet:px-10 px-20 text-white">
        <div className="basis-3/12 text-[25px] max-tablet:text-center">
          Let us guide you to your ideal property - your journey begins now.
        </div>
        <p className="basis-9/12 text- my-auto text-gray-400 max-tablet:text-center">
          zirrow is your one-stop destination for finding the home of your 
          dreams. Whether you're looking for a cozy apartment, a 
          spacious house, or a charming townhouse, we have a wide 
          range of properties to choose from. Our user-friendly 
          platform makes it easy to search for homes based on your 
          preferences, budget, and location. Our team of experienced 
          agents is dedicated to helping you find the perfect property 
          that meets your needs and exceeds your expectations. Let 
          us assist you in making your dream home a reality.
        </p>
      </div>
    </div>
  );
};

export default index;
