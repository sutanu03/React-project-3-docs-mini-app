import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Cards() {
  return (
    <>
      <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaFileAlt/>
            <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='footer w-full absolute bottom-0 left-0'>
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>.4 mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        <MdOutlineFileDownload size=".7em" color='#fff'/>
                    </span>
                </div>
                <div className='tag w-full py-4 bg-green-700 flex items-center justify-center'> 
                   <h3 className='text-sm font-semibold'>Download Now</h3> 
                </div>
            </div>
      </div>
    </>
  )
}

export default Cards
