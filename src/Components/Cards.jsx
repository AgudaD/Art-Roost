import { Link } from 'react-router-dom'
import outwardarrow from '../assets/arrowExternalRight.svg'
import art2 from '../assets/art2.png'
import art4 from '../assets/art4.png'
import brownsticker from '../assets/brownsticker.png'
import bluesticker from '../assets/bluesticker.png'

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[18px] mt-20 mb-10 md:px-24">
      <div className="relative">
        {/* card */}
        <div className="absolute shadow-md top-0 left-0 z-40 flex flex-col-reverse items-start bg-white rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-adobe font-semibold italic capitalize md:text-3xl'>paschal ugwu</p>
          <p className='font-normal text-sm text-[#2C3530] md:text-lg'>Meet Paschal Ugwu, 27 year old artist from Enugu state.</p>
          <div>
            <Link to='/pascal'><button className='flex items-center gap-2 text-[#502A34] md:text-lg'>Read more <img src={outwardarrow} alt=""  /></button></Link>
          </div>
        </div>
        
        <div className='relative'>
          <img src={art4} alt="" className='w-72' />
          <img src={brownsticker} alt=""className='absolute -bottom-4 -left-4' />
          <img src={bluesticker} alt=""className='absolute -top-3 -right-3' />
        </div>
      </div>

      {/* background */}
      <div className="absolute shadow-md top-0 left-0 z-10 -rotate-3 flex flex-col-reverse items-start bg-[#6E8477] rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-semibold italic capitalize'>paschal ugwu</p>
          <p className='font-normal text-sm text-[#2C3530]'>Meet Paschal Ugwu, 27 year old artist from Enugu state.</p>
          <div>
            <button className='flex items-center gap-2 text-[#502A34] '>Read more <img src={outwardarrow} alt=""  /></button>
          </div>
        </div>
        
        <div>
          <img src={art4} alt="" className='relative w-72' />
        </div>
      </div>

      {/* background */}
      <div className="rotate-3 shadow-md flex flex-col-reverse items-start bg-[#ADBEB4] rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-semibold italic capitalize'>paschal ugwu</p>
          <p className='font-normal text-sm text-[#2C3530]'>Meet Paschal Ugwu, 27 year old artist from Enugu state.</p>
          <div>
            <button className='flex items-center gap-2 text-[#502A34] '>Read more <img src={outwardarrow} alt=""  /></button>
          </div>
        </div>
        
        <div>
          <img src={art4} alt="" className='relative w-72' />
        </div>
      </div>

      </div>

      {/* second card */}
      <div className="relative mt-32">
        {/* card */}
        <div className="absolute shadow-md top-0 left-0 z-40 flex flex-col-reverse items-start bg-white rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-semibold font-adobe italic capitalize md:text-3xl'>Oluwatobiloba Fasalejo</p>
          <p className='font-normal text-sm text-[#2C3530] md:text-lg '>Meet Oluwatobilola Faselejo, 23 year old artist from Ondo state.</p>
          <div>
            <Link to='/oluwatobiloba'><button className='flex items-center gap-2 text-[#502A34] md:text-lg'>Read more <img src={outwardarrow} alt=""  /></button></Link>
          </div>
        </div>
        
        <div className='relative'>
          <img src={art2} alt="" className='w-72' />
          <img src={brownsticker} alt=""className='absolute -bottom-4 -left-4' />
          <img src={bluesticker} alt=""className='absolute -top-3 -right-3' />
        </div>
      </div>

      {/* background */}
      <div className="absolute shadow-md top-0 left-0 z-10 -rotate-3 flex flex-col-reverse items-start bg-[#6E8477] rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-semibold italic capitalize'>Oluwatobiloba Fasalejo</p>
          <p className='font-normal text-sm text-[#2C3530]'>Meet Oluwatobilola Faselejo, 23 year old artist from Ondo state.</p>
          <div>
            <button className='flex items-center gap-2 text-[#502A34] '>Read more <img src={outwardarrow} alt=""  /></button>
          </div>
        </div>
        
        <div>
          <img src={art2} alt="" className='relative w-72' />
        </div>
      </div>

      {/* background */}
      <div className="rotate-3 shadow-md flex flex-col-reverse items-start bg-[#ADBEB4] rounded-md px-6 py-8 md:flex-row md:items-center md:gap-[101px] md:pl-16 md:pr-20">
   
        <div className='w-[212px] mt-9 space-y-3 md:w-[433px]'> 
          <p className='text-2xl text-[#502A34] font-semibold italic capitalize'>Oluwatobiloba Fasalejo</p>
          <p className='font-normal text-sm text-[#2C3530]'>Meet Oluwatobilola Faselejo, 23 year old artist from Ondo state.</p>
          <div>
            <button className='flex items-center gap-2 text-[#502A34] '>Read more <img src={outwardarrow} alt=""  /></button>
          </div>
        </div>
        
        <div>
          <img src={art2} alt="" className='relative w-72' />
        </div>
      </div>

      </div>
    </div>
  )
}

export default Cards
