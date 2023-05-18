import React from 'react'
import ptu from '../../assets/upt1.png'
import {Link} from 'react-router-dom'
const EditProfile = () => {
  return (
    <div className='text-black text-2xl'>
    <p className='text-hijau1 text-3xl font-semibold'>Profile</p> 
    <div className='pt-8 text-xl'>
      <div className='flex'>
      <img src={ptu} alt={ptu} className='rounded-full w-48 h-48'/>
    <button className='pl-12 text-blue-600 font-normal'>Edit</button></div>

    <p className='pt-8 pb-2 font-medium'>Fullname</p>
    <h1 className='pb-6'>WAnro sukija tarmin</h1>
    <p className='pb-2 font-medium'>Username </p>
    <h1 className='pb-6'>wansutar <button className='pl-12 text-blue-600'>Edit</button></h1>
    <p className='pb-2 font-medium'>Brithday</p>
    <h1 className='pb-6'>31-desember-2077</h1>
    <p className='pb-2 font-medium'>Email</p>
    <h1 className='pb-6'>xxxx@gmail.com <button className='pl-12 text-blue-600'>Edit</button></h1>
    <p className='pb-2 font-medium'>Phone</p>
    <h1 className='pb-6'>08xxxxxx <button className='pl-12 text-blue-600'>Edit</button> </h1>
    <p className='pb-2 font-medium'>Password <button className='pl-12 text-blue-600 font-normal'>Edit</button></p>

    </div>
  </div>
  )
}

export default EditProfile