import Nav from '../../components/nav'

const hero = () => {
  return (
    <div className="w-full bg-white  flex flex-col">
        <Nav withsearch={false} />
        <div className='w-full max-w-[1700px] -top-10 h-[100vh] max-h-[850px] relative flex mx-auto '>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.155759235115!2d38.744371077855796!3d9.037385747868658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1705580274602!5m2!1sen!2set" width="600" height="450"   loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default hero
