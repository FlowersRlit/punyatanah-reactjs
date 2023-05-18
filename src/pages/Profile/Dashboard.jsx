import React from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from './Profile';

const Dashboard = () => {
  return (
    
    <div className='container h-[layar] py-4 text-black '>
        <div className='border-b-4 pl-24 text-2xl font-semibold'>Dashboard</div>
        <div className='grid grid-cols-3'>
            <div className=' border-r-4 mr-24 pl-24 mt-8 text-xl font-medium'>
           <NavLink to='/Profile'>Profile</NavLink>
            <p className='pb-2'>Transaction</p>
            <p className='pb-2'>My land</p>
            <p className='pb-2'>Support</p>
            <p className='pb-2'>Sign out</p>
            </div>

            <div className='col-span-2 py-8' id='data'>
              <Profile/>

            </div>           
        </div>
   </div>
  )
}



export default Dashboard