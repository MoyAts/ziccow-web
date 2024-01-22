import { IoIosArrowBack as ListIcon} from "react-icons/io";
import Image from "next/image";

interface Props {
    list : string[],
    img : any 
}

const selectOption = ({list,img} : Props) => {
  return (
    <div className="relative z-40 flex flex-col gap-2 w-fit py-1 group   ">
        <div className="flex justify-between bg-white py-1 rounded px-2">
            <div className="flex justify-between gap-2  px-2 ">
                <Image src={img} width={16} className="" alt="" />
                <span className="text-xs">{list[0]}</span>
            </div>
            <ListIcon className="m-auto text-mainBlue group-hover:rotate-90 duration-150 -rotate-90" />
        </div>
        <div className="absolute top-8 group-hover:flex hidden flex-col w-full text-black bg-white rounded p-1">
            {list.map((data : string) => (
                <div className="flex hover:bg-blue-200 cursor-pointer duration-150 gap-2  px-2  py-1">
                    <input type="checkbox" placeholder="s" />
                    <label  className="text-xs text-black ">{data}</label>
                </div>
            ) )}
            
        </div>
    </div>
  )
}

export default selectOption