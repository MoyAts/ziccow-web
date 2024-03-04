"use client" 
import Image from "next/image"; 
import Link from "next/link";
import aboutSvg from "../../../assets/images/about.svg"
import { IoIosArrowBack as NextIcon} from "react-icons/io";
import Photo from "../../../assets/images/Photo2.png"

import img1 from "../../../assets/images/image (9).png"
import img2 from "../../../assets/images/image (10).png"
import img3 from "../../../assets/images/image (11).png"
import img4 from "../../../assets/images/image (12).png"
import img5 from "../../../assets/images/image (13).png"
import img6 from "../../../assets/images/image (14).png"


const hero = ({ id } : any) => {
   const images = [img1,img2,img3,img4,img5,img6]
   const datas = [
        {
            name : "Eng Basazen Terefe.",
            desc : ""
        },
        {
            name : "Yigerem Terefe Lemma",
            desc : `Yigerem Terefe holds a B.A. in Cooperative Business Management from
            Haramaya University and an M.A. in Development Studies (Regional and
            Local Development) from Mekelle University. Currently, he is studying Ph.D.
            in Business Leadership at Addis Ababa University.
            He has more than 15 years of work experience in different positions at various
            organizations. For 6 years, he has served as a management consultant at
            Ethiopian  Management   Institute   providing  training  and  consultancy  for
            various governmental, non-governmental, and private organizations focusing
            on project and strategic management. He has also worked as a gender and
            development lecturer at Haramaya University and a cooperative business management instructor
            at Ardaita ATVET College. Currently, he works as MIS and Strategy follow-up Division
            manager at Berhan Bank.`
        },
        {
            name : "Ann Houben",
            desc : ``
        },
        {
            name : "Judge Hiwust Ashenafi G/mariam",
            desc : ""
        },
        {
            name : "Messay Terefe Lemma",
            desc : ""
        },
        {
            name : "Adi Dekebo",
            desc : `Welcome to Ziccow General
            Trading   PLC,   where   legal
            excellence   meets   business
            innovation. We take immense
            pride   in   introducing   our
            esteemed legal partner, Mr.
            Adi   Dekebo   Dale.   With   a
            stellar career spanning over
            13 years, Mr. Adi is not just a
            lawyer; he's an extraordinary
            legal   strategist,   offering
            unparalleled   expertise   in
            navigating   the   complexities
            of the legal landscape.`
        }
   ]
  return (
    <div className="h-fit max-w-[1700px]  px-20  max-tablet:px-10  max-small:px-5 mx-auto border-t border-gray-400">
        <div className="pt-4 flex gap-3"> 
            <Image src={aboutSvg} alt="" />
            <Link href={"/about"}>About Us</Link>
            <NextIcon className="rotate-180 my-auto" />
            <p className="text-lightGray">Honorary Partners</p>
        </div>

        <div className="mt-6 ">
            <h1 className="text-[35px] max-tablet:text-[25px] max-tablet:text-center">Our Honorary Partners.</h1>
            <p className="text-lightGray max-tablet:text-center">We would also like to extend our gratitude to all our supporters and well-wishers who have played a crucial role in our journey.</p>
        </div>

        <div className="flex w-full mt-12 pb-12 gap-5  max-tablet:flex-col">
            <div className="w-1/3 max-tablet:w-full flex justify-center my-auto">
                <Image src={images[id - 1]} className="w-3/4 rounded-lg  max-small:w-3/4 max-tablet:w-1/2 object-contain " alt="" />
            </div>
            <div className='flex w-2/3 max-tablet:w-full  flex-col gap-5 text-lightGray'>
                <div className="text-xl text-black">About {datas[id - 1].name}</div>
                <p>
                    {datas[id - 1].desc}
                </p>
             </div>
        </div>
      
    </div>
  )
}

export default hero
