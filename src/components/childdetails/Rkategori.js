import React,{useState,} from 'react'

export function Rkategori ({judul,gambar,id}){

  return (
    <div className="relative card overflow-hidden w-full bg-base-100 shadow-xl">
        <figure><img src={gambar} alt="tanah" className='w-full h-full object-cover' /></figure>
    <div className="absolute w-full  bottom-0 left-0">
    <button className="w-full h-full py-4 bg-hijau1 text-white font-semibold text-start pl-4 transition-all duration-300 ease-in-out hover:text-[#FF6500]">{judul}</button>

  </div>
    </div>
  )
}

export default Rkategori