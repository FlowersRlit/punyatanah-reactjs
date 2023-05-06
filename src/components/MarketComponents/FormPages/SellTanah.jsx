import React from 'react'
import { NavLink } from 'react-router-dom'

const Sell = () => {
  return (
    <>
    <div className='container py-4 text-black md:px-24'>
       
 
        <form className='grid px-4 md:gap-10 md:px-48'> 
        <h1 className='mx-auto font-bold text-2xl py-2'>JUAL TANAH</h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-9'>

            <label className='font-semibold text-2xl text-left'>Title </label>
            <input type='text' id='judul' className=' border-hijau1 border-2 rounded-md p-3' placeholder='Tuliskan Judul'/>


            <label className='font-semibold text-2xl'>Alamat</label>
            <input type='text' id='Alamat' className=' border-hijau1 border-2 rounded-md p-3' placeholder='Isi Alamat'/> 

 
            <label className='font-semibold text-2xl'>Luas Tanah</label>
            <div className='flex '>
            <input type='text' id='panjang' className='border w-16  rounded-md text-xs text-center border-hijau1 mr-2 p-4 ' placeholder='meter'/> 
            <span className='p-2 text-2xl'> x </span>
            <input type='text' id='lebar' className='border w-16 rounded-md text-xs text-center border-hijau1 ml-2 p-4' placeholder='meter'/>
            </div>

            <label className='font-semibold text-2xl'>Jenis Tanah</label>
            <input type='text' id='judul' className='w-52 border-hijau1 border-2 rounded-md p-3' placeholder='Jenis Tanah'/>


            <label className='font-semibold text-2xl'>Sertifikat</label>
            <select id="Sertifikat" className='w-56 border border-hijau1 p-3 rounded-md'>
                    <option value="SHM">Sertifikat Hak Milik (SHM)</option>
                    <option value="SHGU">Sertifikat Hak Guna Usaha (SHGU)</option>
                    <option value="SHGB">Sertifikat Hak Guna Bangunan (SHGB)</option>
                    <option value="SHSRS">Sertifikat Hak Satuan Rumah Susun (SHSRS)</option>
            </select>


            <label className='font-semibold text-2xl'>Harga</label>
            <input type='text' id='Harga' className='w-52 border-hijau1 border-2 rounded-md p-3' placeholder='Harga'/>


            <label className='font-semibold text-2xl'>Foto</label>
            <input type='file' id='Foto' accept='image/*' className='w-52'/>


            <label className='font-semibold text-2xl'>Deskripsi</label>
            <input type='text' id='Deskripsi' className='w-2/3 h-24 pl-2 items-start border-hijau1 border-2 rounded-md p-3' placeholder='Tuliskan Deskripsi Tanahmu...'/>          
        

            </div>
            <div className='mx-auto pb-8 my-5'>
            <NavLink to="./" className='items-center bg-hijau1 rounded-md px-8 py-4 text-2xl text-white hover:bg-white hover:text-hijau1 hover:border-hijau1 border-2 '>Submit</NavLink>
            </div>
        </form>
    </div>
    
    </>
  )
}

export default Sell