import founder1 from '../assets/founder1.png'
import founder2 from '../assets/founder2.png'
import founder3 from '../assets/founder3.png'
import founder4 from '../assets/founder4.png'

const Founders = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center items-center gap-4 p-4'>
        {/* card 1 */}
        <div className='flex items-center w-[20rem] h-[7rem]  gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder1} alt="" className='w-20' />
          <div>
            <p className='text-[#2C3530] font-semibold'>Tochukwu Ugah</p>
            <div className='md:flex md:items-center'>
              <p className='text-[#6D4E56]'>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p className='text-[#6E8477] font-semibold'>Director of Operational Affairs</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className='flex items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder2} alt="" className='w-20' />
          <div>
            <p className='text-[#2C3530] font-semibold'>Dara Shonubi</p>
            <div className='md:flex md:items-center'>
              <p className='text-[#6D4E56]'>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p className='text-[#6E8477] font-semibold'>Director of Secreterial Affairs</p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className='flex  items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder3} alt="" className='w-20' />
          <div>
            <p className='text-[#2C3530] font-semibold'>Chino Okafor</p>
            <div className='md:flex md:items-center'>
              <p className='text-[#6D4E56]'>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p className='text-[#6E8477] font-semibold'>Director of Staff Affairs</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className='flex  items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder4} alt="" className='w-20' />
          <div>
            <p className='text-[#2C3530] font-semibold'>Mahmud Alabi</p>
            <div className='md:flex md:items-center'>
              <p className='text-[#6D4E56]'>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p className='text-[#6E8477] font-semibold'>Director of Curatorial Affairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founders
