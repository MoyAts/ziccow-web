import { useRef } from "react";
import { PropertyDetailInf } from "./interface";
import Image from "next/image";
import dropimg from "../../../../assets/images/dropimg.svg";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
interface Props {
  imgClass?: string;
  divClass?: string;
  setImages: any;
  setForm: any;
  images: any;
  ind: number;
  form: PropertyDetailInf;
}

function ImagePicker({
  divClass,
  images,
  setImages,
  ind,
  setForm,
  form,
  imgClass,
}: Props) {
  const ref = useRef<any>(null);
  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    file &&
      setForm((data: PropertyDetailInf) => {
        const newImages = [...data.images];
        newImages[ind] = file;
        const newPreviewImages = [...data.previewImages];
        newPreviewImages[ind] = URL.createObjectURL(file);
        return { ...data, images: newImages, previewImages: newPreviewImages };
      });
  };

  return (
    <div className={"w-full rounded-xl bg-white border-2 h-full flex p-1"}>
      <input
        type="file"
        multiple
        hidden
        placeholder="image"
        ref={ref}
        onChange={onSelect}
      />

      {form.previewImages[ind] ? (
        <div className="w-full relative">
          <div
            onClick={() => {
              ref.current && ref.current.click();
            }}
            className="absolute top-2 left-5 px-2 py-2 rounded-lg cursor-pointer bg-slate-700 bg-opacity-45 hover:bg-opacity-100"
          >
            <MdOutlineEdit className="text-white" />
          </div>
          <div
            onClick={() => {
              setForm((data: PropertyDetailInf) => {
                let newImages = [...data.images];
                newImages[ind] = null;
                let newPreviewImages = [...data.previewImages];
                newPreviewImages[ind] = null;
                return {
                  ...data,
                  images: newImages,
                  previewImages: newPreviewImages,
                };
              });
            }}
            className="absolute top-2 right-5 px-2 py-2 rounded-lg cursor-pointer bg-slate-700 bg-opacity-45 hover:bg-opacity-100"
          >
            <MdOutlineDelete className="text-white" />
          </div>
          <Image
            src={form.previewImages[ind]}
            className={`w-full rounded-lg object-contain ${imgClass} `}
            height={100}
            width={100}
            alt=""
          />
        </div>
      ) : (
        <>
          <div className={"flex m-auto gap-3 flex-col w-3/4 items-center "}>
            <Image src={dropimg} className={"w-2/5 " + imgClass} alt="" />
            <div className={"flex text-center flex-col gap-1 " + divClass}>
              <p>Drop your image here, or select</p>
              <p
                onClick={() => {
                  ref.current && ref.current.click();
                }}
                className="text-mainBlue cursor-pointer"
              >
                click to browse
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ImagePicker;
