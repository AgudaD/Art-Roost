import mainLogo from '../assets/mainLogo.png'
import division from '../assets/division.png'
import demarcation from '../assets/demarcation.png'

const Title = () => {
  return (
    <div className='flex flex-col mt-20 px-6 text-white font-helvetica space-y-3 md:flex-row md:justify-center md:gap-12 md:items-center md:space-y-0 '>
      <img src={mainLogo} alt="" className='mx-auto md:mx-0' />
      
      <img src={demarcation} alt="" className='hidden md:block'/>

      <div className="flex flex-col space-y-3 md:space-y-8">
        <div className='flex flex-col justify-center items-center px-6 md:justify-start md:items-start md:space-y-5'>
          <p className='text-2xl text-center font-atiba font-semibold uppercase md:text-start md:text-6xl'>run through walls</p>
          <p className=' font-semibold uppercase'>exhibition</p>
        </div>
        <img src={division} alt="" className='mx-auto md:hidden' />
        <div className="flex flex-col justify-center items-center px-6 text-center md:flex-row md:justify-start">
          <p className='md:border md:border-white md:px-6 md:py-2'>8th - 9th April, 2023</p>
          <p className='md:border md:border-white md:px-6 md:py-2'>22b Olawale Cole Onitiri Ave. Lekki Phase 1, Lekki, Lagos</p>
        </div>
      </div>
    </div>
  )
}

export default Title
