"use client" 
import Image from "next/image"; 
import photo from "../../assets/images/Photo.png"
const teams = () => {
  return (
    <div className="w-full bg-lightBg">
        <div className='h-fit w-full max-w-[1700px] max-tablet:max-h-fit   max-h-[800px] mx-auto pb-16 px-20 max-tablet:px-10  max-small:px-5'>
            <h4 className="text-center pt-5 text-mainBlue">Our team</h4>
            <h1 className="text-[35px] text-center">
                <span>
                    Meet the
                </span>
                <span className="text-mainBlue">
                    Ziccow General Trading Team.
                </span>
            </h1>
            <p className="text-center text-gray-500 text-sm px-20  mt-5 max-tablet:px-0">
                At Ziccow General Trading, we pride ourselves on our team of experienced and knowledgeable professionals who are dedicated to helping our clients achieve their real estate goals. Our team consists of seasoned traders, analysts, and marketing experts who work together to provide our clients with the best possible service and support.
            </p>
            <div className="grid grid-cols-3  max-small:grid-cols-1 max-tablet:grid-cols-2 justify-items-center mt-8 gap-10 px-10">
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>
                    <div className="flex flex-col  w-fit gap-1 max-tablet:w-full">
                        <div className="mx-auto rounded-full">
                            <Image src={photo} className="rounded-full" alt="" />
                        </div>
                        <h4 className="mx-auto">Patrick Meyer</h4>
                        <p className="mx-auto text-sm text-mainBlue">VP of Product</p>
                    </div>

            </div>

            </div>
    </div>
  )
}

export default teams
