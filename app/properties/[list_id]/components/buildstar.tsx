import { FaStar as StarIcon } from "react-icons/fa6"; 
const BuildStar = ({num} : any) => {
      // var randomNumber = 2 + Math.floor(Math.random() * 4);
      return <>
        {[0,0,0,0,0].map((_,ind : number) => ind < num ? <StarIcon key={ind} className="text-sm fill-yellow-500" /> : <StarIcon  key={ind} className="text-sm fill-gray-600" /> )}
    </>
}  

export default BuildStar