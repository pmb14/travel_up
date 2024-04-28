import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';


const Navbar = () => {
    const [sidebar, setsidebar] = useState(false)
    const [cross, setcross] = useState(false)
  return (
    <>
    <div className='fixed z-50 top-0 left-0 w-full bg-[#FF9933]'>
      <div className='flex  justify-between px-[25px] text-[20px] py-[15px] font-semibold drop-shadow border-b'>
        <div><h1>Boot<span className='text-[]'>Grow</span></h1></div>
        <div className=''>
        

            <ul className='sm:flex gap-5 cursor-pointer ' >
            <Link to='/'> <li className='hover:text-[#65502a] mr-9'>Home</li></Link>
            {/* <Link to='/AboutUs'> <li className='hover:text-[#65502a]'>AboutUs</li></Link> */}
            {/* <Link to='/ContactUs'> <li className='hover:text-[#65502a]'>ContactUs</li></Link> */}
           
            </ul>
        </div>
       

     
      </div>
    </div>
    </>
  )
}

export default Navbar







