
import img2 from "../../assets/images/Group.png"
import img3 from "../../assets/images/Group (1).png"
import img4 from "../../assets/images/Group (2).png"
import img5 from "../../assets/images/Group (3).png"
import Image from "next/image"
interface Props {
  img : any
}

const box = ({img} : Props) => {
  
  return (
    <div className='bg-rd-300 w-fit  shrink-0 rounded-xl overflow-hidden text-black'>
          <div className='rounded-xl group relative border w-full h-2/3 overflow-hidden'>
            <Image src={img} className='rounded-xl group-hover:scale-110 w-full object-cover h-full cursor-pointer duration-300 hover:scale-105' alt="" />
            <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-mainDardk via-transparent to-transparent"></div>
          </div>
          <div className='flex flex-col'>

            <div className='flex justify-between mt-2 '>
              <h1>Modernica Apartment</h1>
              <div className='px-2 text-xs my-auto  rounded-xl' style={{background:"#CCE3FC"}}>appartment</div>
            </div>

            <div className='flex mt-2 gap-2 '>
              <Image src={img2} alt="" />
              <span className='text-xs my-auto'>2 km away from current location</span>
            </div>

            <div className='flex justify-between'>
              <div className='flex mt-2 gap-2 '>
                <Image src={img5} alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 '>
                <Image src={img3} className='m-auto' alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 '>
                <Image src={img4} alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>

            </div>

          </div>
        </div>
  )
}

export default box
