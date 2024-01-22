import img from "../../assets/images/anthony-esau-N2zk9yXjmLA-unsplash (1).jpg"
import Image from "next/image"

const imageSlider = () => {
  return (
    <div className='p-2 w-7/12 bg-red-300 h-[90vh]'>
        <div className='w-full h-[65vh] rounded-lg relative'>
            <button className="absolute left-2 opacity-50 hover:opacity-100 duration-200 bottom-1/2 mt-2 w-10 h-10 text-white rounded-full bg-mainBlue">
                    d
            </button>
            <button className="absolute right-2 opacity-50 hover:opacity-100 duration-200 bottom-1/2 mt-2 w-10 h-10 text-white rounded-full bg-mainBlue">
                    d
            </button>
            <Image src={img} className='w-full h-full object-cover rounded-lg' alt="" />        
        </div>
        <div className="mt-4 gap-5 flex  overflow-hidden">
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>

            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>

            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>
            <div onClick={() => alert("alert")} className="w-[100px] flex flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ">
                <Image src={img} width={100} className=' duration-200 rounded-lg hover:scale-110 object-cover' alt="" />        
            </div>

        </div>
    </div>
  )
}

export default imageSlider
