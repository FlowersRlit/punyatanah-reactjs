const Login = () => {
  return(
    <div className="w-full md:py-32">
      <h1 className="font-bold text-black1 text-4xl">Login</h1>

      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-10 md:my-8 items-center">
      <label className="col-span-3">
          <span className="text-black1 font-medium">Your Email</span>
      </label>
      <label className="col-span-7">
          <input type="text" placeholder="username@email.com" className="input input-bordered border-gray1 w-full" />
      </label>
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-10 md:my-8 items-center">
      <label className="col-span-3">
          <span className="text-black1 font-medium">Password</span>
      </label>
      <label className="col-span-7">
          <input type="password" placeholder="Password" className="input input-bordered border-gray1 w-full" />
      </label>
      </div>

      <div className="grid grid-row-2 md:grid-row-1 md:grid-cols-10 my-8">
      <span className="md:col-span-6"></span>
      <button className="order-1 md:order-none md:col-span-2 text-white bg-gray1 md:bg-transparent md:border-none md:text-gray1 btn my-4 md:my-0">Back</button>
      <button className="order-0 md:order-none btn bg-orange1 text-white hover:bg-orange1 md:col-span-2">Login</button>
      </div>
    </div>
  )
}

export default Login;