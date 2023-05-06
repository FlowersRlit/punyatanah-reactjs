import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-12">
      <h1 className="font-bold text-4xl">Register</h1>

      <br />

      <div className="grid grid-cols-12 my-2 items-center">
        <label className="col-span-4">
            <span className="text-black1 font-medium">Nickname</span>
        </label>
        <label className="col-span-7">
            <input type="text" placeholder="name" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-cols-12 my-2 items-center">
        <label className="col-span-4">
            <span className="text-black1 font-medium">Full Name *</span>
        </label>
        <label className="col-span-7">
            <input type="text" placeholder="Full Name" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-cols-12 my-2 items-center">
        <label className="col-span-4">
            <span className="text-black1 font-medium">Phone Number *</span>
        </label>
        <label className="col-span-7">
            <input placeholder="08xxxxxxxx" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-cols-12 my-2 items-center">
        <label className="col-span-4">
            <span className="text-black1 font-medium">Your Email *</span>
        </label>
        <label className="col-span-7">
            <input type="text" placeholder="username@email.com" className="input input-bordered border-gray1 w-full input-sm py-5" />
        </label>
      </div>

      <div className="grid grid-cols-12 my-2 items-center">
      <label className="col-span-4">
          <span className="text-black1 font-medium">Password *</span>
      </label>
      <label className="col-span-7">
          <input type="password" placeholder="Password" className="input input-bordered border-gray1 w-full input-sm py-5" />
      </label>
      </div>

      <div className="grid grid-cols-12 my-2 items-center">
      <label className="col-span-4">
          <span className="text-black1 font-medium">Confirm Password *</span>
      </label>
      <label className="col-span-7">
          <input type="password" placeholder="Confirm Password" className="input input-bordered border-gray1 w-full input-sm py-5" />
      </label>
      </div>

      <br />

      <div className="grid grid-cols-12 my-2">
        <span className="col-span-7"></span>
        <button className="col-span-2 text-gray1" onClick={navigate('/')}>Back</button>
        <button className="btn bg-orange1 text-white hover:bg-orange1 col-span-2">Register</button>
      </div>
    </div>
  );
};

export default Register;
