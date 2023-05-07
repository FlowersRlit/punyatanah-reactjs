import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <h1 className="font-bold text-black1 text-4xl md:mb-8">Register</h1>

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 my-2 items-center  gap-x-8">
        <label className="col-span-3">
            <span className="text-black1 font-medium">Full Name *</span>
        </label>
        <label className="col-span-7">
            <input type="text" placeholder="Full Name" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 my-2 items-center  gap-x-8">
        <label className="col-span-3">
            <span className="text-black1 font-medium">Phone Number *</span>
        </label>
        <label className="col-span-7">
            <input placeholder="08xxxxxxxx" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 my-2 items-center  gap-x-8">
        <label className="col-span-3">
            <span className="text-black1 font-medium">Your Email *</span>
        </label>
        <label className="col-span-7">
            <input type="text" placeholder="username@email.com" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 my-2 items-center  gap-x-8">
      <label className="col-span-3">
          <span className="text-black1 font-medium">Password *</span>
      </label>
      <label className="col-span-7">
          <input type="password" placeholder="Password" className="input input-bordered border-gray1 w-full input-sm py-5" />
      </label>
      </div>

      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 my-2 items-center  gap-x-8">
      <label className="col-span-3">
          <span className="text-black1 font-medium">Confirm Password *</span>
      </label>
      <label className="col-span-7">
          <input type="password" placeholder="Confirm Password" className="input input-bordered border-gray1 w-full input-sm py-5" />
      </label>
      </div>

      <div className="grid grid-cols-12 my-4 items-center">
        <div className="col-span-4">
          <hr />
        </div>
        <div className="col-span-4 grid place-items-center lg:col-span-4">
          OR
        </div>
        <div className="col-span-4">
          <hr />
        </div>
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-10 my-4 items-center ">
        <div className="col-span-10 bg-primary py-3 px-4 rounded-lg flex justify-center items-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-google absolute left-0 ml-5" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>

          <h1 className="font-semibold text-white text-lg col-span-3">Sign In With Google</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-12 my-8 gap-x-4 place-content-end">
          <button className="lg:col-start-7 btn lg:col-span-3 text-white" onClick={() => {navigate('/')}}>Back</button>
          <button className="btn bg-orange1  text-white hover:bg-orange1 lg:col-span-3">Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
