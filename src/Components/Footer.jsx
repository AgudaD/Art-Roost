import { Link } from 'react-router-dom'
import secondaryLogo from '../assets/secondaryLogo.png'
import forwardArrow from '../assets/forwardArrow.svg'

const Footer = () => {
  return (
    <div className='bg-[#6E8477] mt-8 py-10 px-6  md:px-16 lg:px-24'>
      <div className='flex flex-col items-start w-full text-white font-helvetica
    md:flex-row md:justify-between'>
          <div className="flex flex-col items-start md:flex-row md:items-center md:gap-12">
              <img src={secondaryLogo} alt="" />
              <div className='mt-10 md:mt-0'>
                <div className='font-adobe italic md:w-[348px]'>
                    <p>Follow us on social media for updates on our future exhibitions</p>
                </div>
              </div>
          </div>
          <div className='mt-16 text-sm space-y-2 md:mt-0'>
            <p>Contact</p>
            <p>+234-916-442-7566</p>
            <p>admin@artroostgallery.com</p>
            <div className="flex items-center gap-6">
                <a 
                  href="https://twitter.com/artroostgallery?s=21&t=KreqcKYgbO-4zcdjfgG14g"
                  target='_blank'
                >
                  <p>Twitter</p>
                </a>
                <a 
                  href="https://instagram.com/artroostgallery?igshid=YmMyMTA2M2Y="
                  target='_blank'
                >
                  <p>Instagram</p>
                </a>
            </div>
          </div>
      </div>

      <p className='mt-8 text-white text-xs font-helvetica'>© Copyright 2023 Art Roost Gallery</p>
    </div>
  )
}

export default Footer
