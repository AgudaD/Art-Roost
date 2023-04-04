import art1 from '../assets/art1.png'
import art3 from '../assets/art3.png'
import art4 from '../assets/art4.png'

const Carousel = () => {
  return (
    <div className="bg-[#849E8F] h-auto p-4">
      <div className='flex justify-center items-center gap-12'>
        <img src={art1} alt="" className='w-[317px] h-auto -rotate-[13.8deg] ' />
        <img src={art3} alt="" className='w-[317px] h-auto' />
        <img src={art4} alt="" className='w-[317px] h-auto rotate-[13.8deg]' />
      </div>
    </div>
  )
}

export default Carousel
