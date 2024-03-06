import { useRef } from "react";
import { PropertyDetailInf } from "./interface";
import Image from "next/image";
import dropimg from "../../../assets/images/dropimg.svg"

interface Props{
    divClass? : string,
    setImages : any,
    setForm : any,
    images : any,
    ind : number,
    form : PropertyDetailInf,
  }
  
  function ImagePicker ({ divClass , images,setImages,ind,setForm,form} : Props) {
    const ref = useRef<any>(null)
    const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      file && setForm((data : PropertyDetailInf) => {
        const newImages = [...data.images]
        newImages[ind] = file
        const newPreviewImages = [...data.previewImages]
        newPreviewImages[ind] =  URL.createObjectURL(file)
        return {...data,images:newImages,previewImages : newPreviewImages}
      })
    }
    
    return (
     <div className={"w-full rounded-xl bg-white border-2 h-full flex p-1"}>
          
          {
          form.previewImages[ind] ?
          <Image src={form.previewImages[ind]} className="w-full rounded-lg object-contain" height={100} width={100} alt="" />
          :
          <>
            <input type="file" multiple hidden placeholder="image" ref={ref} onChange={onSelect} />
            <div className={"flex m-auto gap-3 flex-col w-3/4 items-center "}>
              <Image src={dropimg} className={"w-2/5 "} alt="" />
              <div className={"flex text-center flex-col gap-1 " + divClass}>
                <p>
                  Drop your image here, or select
                </p>
                <p onClick={() =>{ref.current && ref.current.click()}} className="text-mainBlue cursor-pointer">
                  click to browse
                </p>
              </div>
            </div>
           </>}
      </div>  
    )
  }
  
export default ImagePicker