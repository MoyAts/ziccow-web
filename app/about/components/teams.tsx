"use client";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/image (9).png";
import img2 from "../../assets/images/image (10).png";
import img3 from "../../assets/images/image (11).png";
import img4 from "../../assets/images/image (12).png";
import img5 from "../../assets/images/image (13).png";
import img6 from "../../assets/images/image (14).png";

const teams = () => {
  return (
    <div className="w-full bg-lightBg">
      <div className="h-fit w-full max-w-[1700px] max-tablet:max-h-fit   max-h-[1500px] mx-auto pb-16 px-20 max-tablet:px-10  max-small:px-5">
        <h4 className="text-center pt-5 text-mainBlue">Strategic Partners</h4>
        <h1 className="text-[35px] text-center">
          <span>Meet </span>
          <span className="text-mainBlue"> Zirrow Strategic Partners.</span>
        </h1>
        <p className="text-center text-gray-500 text-sm px-20  mt-5 max-tablet:px-0">
          We believe in the power of strategic partnerships to drive innovation
          and success. Our carefully selected strategic partners play a vital
          role in our mission to deliver exceptional products and services to
          our customers. By collaborating with like- minded peoples that share
          our values and vision, we are able to leverage their expertise and
          resources to enhance our offerings and expand our service. Through
          open communication, transparency, and a commitment to mutual growth,
          we cultivate strong and lasting relationships with our strategic
          partners. Together, we are able to achieve greater heights and deliver
          unparalleled value to our customers.
        </p>
        <div className="grid grid-cols-3  max-small:grid-cols-1 max-tablet:grid-cols-2 justify-items-center mt-8 gap-10 px-10">
          <Link
            href={{
              pathname: "/about/detail",
              query: {
                id: 1,
              },
            }}
            className="flex flex-col  w-fit gap-1 max-tablet:w-full"
          >
            <div className="mx-auto rounded-full">
              <Image
                src={img1}
                className="rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </div>
            <h4 className="mx-auto">Eng Basazen Terefe.</h4>
            <p className="mx-auto text-sm text-mainBlue">Founder</p>
          </Link>
          <Link
            href={{
              pathname: "/about/detail",
              query: {
                id: 2,
              },
            }}
            className="flex flex-col  w-fit gap-1 max-tablet:w-full"
          >
            <div className="mx-auto rounded-full">
              <Image
                src={img2}
                className="rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </div>
            <h4 className="mx-auto">Yigerem Terefe Lemma</h4>
            <p className="mx-auto text-sm text-mainBlue"></p>
          </Link>
          <Link
            href={{
              pathname: "/about/detail",
              query: {
                id: 3,
              },
            }}
            className="flex flex-col  w-fit gap-1 max-tablet:w-full"
          >
            <div className="mx-auto rounded-full">
              <Image
                src={img3}
                className="rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </div>
            <h4 className="mx-auto">Ann Houben</h4>
            <p className="mx-auto text-sm text-mainBlue"></p>
          </Link>

          <Link
            href={{
              pathname: "/about/detail",
              query: {
                id: 5,
              },
            }}
            className="flex flex-col  w-fit gap-1 max-tablet:w-full"
          >
            <div className="mx-auto rounded-full">
              <Image
                src={img5}
                className="rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </div>
            <h4 className="mx-auto">Messay Terefe Lemma</h4>
            <p className="mx-auto text-sm text-mainBlue"></p>
          </Link>
          <Link
            href={{
              pathname: "/about/detail",
              query: {
                id: 6,
              },
            }}
            className="flex flex-col  w-fit gap-1 max-tablet:w-full"
          >
            <div className="mx-auto rounded-full">
              <Image
                src={img6}
                className="rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </div>
            <h4 className="mx-auto">Adi Dekebo</h4>
            <p className="mx-auto text-sm text-mainBlue"></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default teams;
