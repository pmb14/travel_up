import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[black] text-[white] h-[380px] w-full'>
      <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'>
        <div>
            <h2 className='font-semibold mb-3  text-[18px] md:text-[22px]'>Boot<span className='text-[#FAA300]'>Grow</span></h2>
            <p className='text-[gray] text-[16px]'>© 2023 Bundl Technologies Pvt.Ltd</p>
        </div>

        <div>
            <h2 className='font-semibold mb-3 text-[18px] md:text-[22px] text-[#FAA300]'>About</h2>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Careers</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2' >Team</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Bootgrow One</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Bootgrow instamart</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Bootgrow Gein</p>
        </div>

        <div>
            <h2 className='font-semibold mb-3  text-[18px] md:text-[22px] text-[#FAA300]'>Bootgrow</h2>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Help & Support</p>
            <p className='text-[gray]  text-[13px] md:text-[16px] mb-2'>Partner with Us</p>
            <p className='text-[gray]  text-[13px] md:text-[16px] mb-2'>grow with Us</p>
            
            <p className='mt-8'> <h2 className='font-semibold mb-3  text-[18px] md:text-[22px] text-[#FAA300]' >Legal</h2></p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Term & Condition</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Cookie Policy</p>
            <p className='text-[gray] text-[13px] md:text-[16px] mb-2'>Privacy Policy</p>
            

        </div>

        <div>
            <h2 className='font-semibold mb-3  text-[18px] md:text-[22px] text-[#FAA300]'>BootGrow Branches:</h2>
            <p className='text-[13px]  text-[gray] md:text-[16px] mb-2'>Banglore</p>
            <p className=' text-[13px] text-[gray] md:text-[16px] mb-2'>Gurgaon</p>
            <p className='text-[13px] text-[gray] md:text-[16px] mb-2'>Delhi</p>
            <p className='text-[13px] text-[gray] md:text-[16px] mb-2'>Hyderabad</p>
            <p className='text-[13px] text-[gray] md:text-[16px] mb-2'>Lucknow</p>
            <p className='text-[13px] text-[gray] md:text-[16px] mb-2'>Pune</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
