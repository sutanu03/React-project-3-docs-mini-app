import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {

  const ref = useRef(null);

/*     const data = [
            icon(same), desc, filesize, closeOrDownloadSwitch, tagDetails
    ] */
    const data = [
     {desc: "Doc 1 - Aadhhar Card", filesize:"1.9 mb", closed: false, tag:{ isOpen: true, tagTitle: "Download Now", tagColor: "green"}}
    ,{desc: "Doc 2 - PAN Card", filesize:"2.5 mb", closed: true, tag:{ isOpen: true, tagTitle: "Ongoing", tagColor: "blue"}}
    ,{desc: "Doc 3 - Driving Licence", filesize:"0.7 mb", closed: true, tag:{ isOpen: false, tagTitle: "Download Now", tagColor: "white"}}
      ]
  return (
    <>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index)=>(
              <Cards data={item} reference={ref}/>
            ))}
        </div>
    </>
  )
}

export default Foreground
