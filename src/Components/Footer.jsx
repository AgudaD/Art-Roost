import secondaryLogo from '../assets/secondaryLogo.png'
import forwardArrow from '../assets/forwardArrow.svg'

const Footer = () => {
  return (
    <div className='bg-[#6E8477] mt-8 py-10 px-6  md:px-16 lg:px-24'>
      <div className='flex flex-col items-start w-full text-white font-helvetica
    md:flex-row md:justify-between'>
          <div className="flex flex-col items-start md:flex-row md:gap-12">
              <img src={secondaryLogo} alt="" />
              <div className='mt-10 space-y-2 md:mt-0'>
                <p className='font-adobe italic md:w-[348px]'>Join our mailing list for updates on our future exhibition</p>
                <div className='flex text-xs'>
                    <input type="text" placeholder='Email address' className='bg-transparent w-full p-2 outline-none border appearance-none  placeholder:text-white' />
                    <button className='flex items-center gap-2 bg-white w-[120px] p-2 text-[#58695F] '>Sign up <img src={forwardArrow} alt="" /></button>
                </div>
              </div>
          </div>
          <div className='mt-16 text-sm space-y-2 md:mt-0'>
            <p>Contact</p>
            <p>+234-916-442-7566</p>
            <p>admin@artroostgallery.com</p>
            <div className="flex items-center gap-6">
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
          </div>
      </div>

      <p className='mt-8 text-white text-xs font-helvetica'>© Copyright 2023 Art Roost Gallery</p>
    </div>
  )
}

export default Footer
