import React, { useState } from 'react'
import Cards from './Cards'

function Foreground() {
/*     const data = [
            icon(same), desc, filesize, closeOrDownloadSwitch, tagDetails
    ] */
    const data = [
        {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.", filesize:".9 mb", closed: true, tag:{ isOpen: true}}
    ]
  return (
    <>
        <div className='fixed z-[3] top-0 left-0 w-full h-full'>
            <Cards/> 
        </div>
    </>
  )
}

export default Foreground
