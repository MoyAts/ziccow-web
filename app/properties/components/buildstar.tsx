import { FaStar as StarIcon } from "react-icons/fa6";
const BuildStar = ({ num }: any) => {
  var randomNumber = 2 + Math.floor(Math.random() * 4);
  return (
    <>
      {[0, 0, 0, 0, 0].map((_, ind: number) =>
        ind < randomNumber ? (
          <StarIcon key={ind} className="text-lg fill-yellow-500" />
        ) : (
          <StarIcon key={ind} className="text-lg fill-gray-600" />
        ),
      )}
    </>
  );
};

export default BuildStar;
