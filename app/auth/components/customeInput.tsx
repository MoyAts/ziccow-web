import InputIcon from "../../../assets/images/inputIcon.svg"

interface Props {
  label : string,
  name : string,
  placeholder : string,
  pass? : boolean
}

const customeInput = ({label,name,placeholder,pass} : Props) => {
  return (
    <div className='flex flex-col gap-2 capitalize'>
        <label htmlFor="" className='font-semibold'>{label}</label>
        <div className='w-full  bg-white flex rounded-xl ps-2 border' style={{borderColor:"#DBD7DD"}}>
            <img src={InputIcon} alt="" width={23} className='me-3' />
            <input type={pass && pass == true ? "password" : "text"} name={name} placeholder={placeholder} className='py-3  w-full outline-none rounded-lg'/>
        </div>
    </div>
  )
}

export default customeInput
