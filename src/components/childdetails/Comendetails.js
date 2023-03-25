import React from 'react'
import comentar from './../../assets/comentar.png'
const Comendetails = () => {
  return (
    <div className='flex rounded-lg items-center p-12 w-full'>
        <img src={comentar} className="rounded-lg w-16 h-16"/> 

        <h1 className='w-full p-8 font-semibold'>
            komentar
            <p>
            <input type="text" className=' bg-gray-200 w-full h-8 text-start rounded-lg pl-4' placeholder='Tuliskan Pengalam anda disini...'></input>
            </p>
            
        </h1>

    </div>
    
  )
}

export default Comendetails