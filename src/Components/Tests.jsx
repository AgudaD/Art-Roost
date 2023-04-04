import founder1 from '../assets/founder1.png'
import founder2 from '../assets/founder2.png'
import founder3 from '../assets/founder3.png'
import founder4 from '../assets/founder4.png'


const Tests = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div className="bg-purple-500 h-screen p-6">
    
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {/* card 1 */}
        <div className='flex items-center w-[20rem] h-[7rem]  gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder1} alt="" className='w-20' />
          <div>
            <p>Tochukwu Ugah</p>
            <div className='md:flex md:items-center'>
              <p>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p>Director of Operational Affairs</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className='flex items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder2} alt="" className='w-20' />
          <div>
            <p>Dara Shonubi</p>
            <div className='md:flex md:items-center'>
              <p>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p>Director of Secreterial Affairs</p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className='flex  items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder3} alt="" className='w-20' />
          <div>
            <p>Chino Okafor</p>
            <div className='md:flex md:items-center'>
              <p>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p>Director of Staff Affairs</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className='flex  items-center w-[20rem] h-[7rem] gap-4 bg-white px-4 py-2 md:w-[33rem]'>
          <img src={founder4} alt="" className='w-20' />
          <div>
            <p>Mahmud Alabi</p>
            <div className='md:flex md:items-center'>
              <p>Founding partner</p>
              <section className='hidden w-6 border border-[#D6DFDA] rotate-90 md:block'></section>
              <p>Director of Curatorial Affairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
