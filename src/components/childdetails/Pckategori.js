import React from 'react'
import Rkategori from './Rkategori'
import datac from "./../../components/childdetails/Cdata.json"
const Pckategori = () => {
  return (
    <div className='flex flex-col gap-5 mt-20'> 
        {datac.map((v,i)=>
        (
            <Rkategori
            key = {i}
            judul = {v.judul}
            gambar = {v.gambar}
            id={v.id}
            />
        )
        )}
    </div>
  )
}

export default Pckategori