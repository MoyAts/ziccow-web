"use client" 
import Image from "next/image"; 
import moyatsImg from "../../assets/images/Frame 10.svg"
const about = () => {
  return (
    <div className="bg-mainDark w-full">

      <div className='h-fit pb-16  max-w-[1700px] max-h-[800px] max-tablet:max-h-fit mx-auto text-white font-light flex flex-col items-center pt-5  px-20 max-tablet:px-10  max-small:px-5'>
        <h4 className='text-onDark pt-5'>About us ...</h4>
        <h1 className='text-[45px]  max-mobile:text-[35px] text-center mb-10 mt-2'>
          <span>
              Our mission is to redefine how Ethiopians rent  
          </span>
          <span className='leading-[20px]'>
              and sell property.
          </span>
        </h1>
        <p className='text-sm w-10/12  max-mobile:w-full text-center text-onDark'>
          Our company has roots that go back many years and enriching history that shapes our current mission. With us around you can expect commitment, professionalism, and long-term relationships based on trust. Our goal is to provide high-quality services that meet and exceed the expectations of our clients.
        </p>
        <h6 className='mt-12 text-onDark'>Trusted by our clients in the industry</h6>
        
        {/* <div className="flex justify-between w-2/3 mt-10 max-tablet:w-full">
          <div className="flex gap-4 max-mobile:flex-col">
              <Image src={moyatsImg} alt="" />
              <p className="my-auto text-center">MoyAts</p>
          </div>
          <div className="flex gap-4  max-mobile:flex-col">
              <Image src={moyatsImg} alt="" />
              <p className="my-auto text-center">MoyAts</p>
          </div>
          <div className="flex gap-4  max-mobile:flex-col">
              <Image src={moyatsImg} alt="" />
              <p className="my-auto text-center">MoyAts</p>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default about
