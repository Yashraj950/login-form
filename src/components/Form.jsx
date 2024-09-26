import React from "react";

const Form = () => {
  return (
    <section className="bg-transparent  border-[2px] border-[#c4e9e6] rounded-2xl shadow-2xl ">
      <div className="text-2xl flex m-9 items-center justify-center font-serif">
        <h1>Log In With</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 my-8 mx-3 ">
        <a href="https://www.google.com/adsense/new/u/0/pub-5562408488357675/home" target="_blank" className="bg-gray-200 hover:bg-white rounded-lg p-1  flex items-start justify-start">
          <button className="flex gap-2 ">
            <img
              className=" size-11"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
            <span className="flex items-center justify-center"> Google</span>
          </button>
        </a>

        <a href="https://github.com/"  target="_blank" className="bg-gray-200 hover:bg-white  rounded-lg p-1  flex items-start justify-start">
          <button className="flex gap-2">
            <img
              className="size-11"
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
              alt=""
            />
            <span className="flex items-center justify-center">Github</span>
          </button>
        </a>
      </div>

      <div className="px-5 pb-3 ">
        <label className="text-lg font-medium"> Email</label>
        <input
          className="w-full mt-1 bg-transparent rounded-lg p-2 border-[1px] border-[#bebed6]"
          placeholder="Enter Your email"
        />
      </div>
      <div className="px-5 ">
        <label className="text-lg font-medium"> Password</label>
        <input
          className="w-full mt-1 bg-transparent rounded-lg p-2 border-[1px] border-[#bebed6]"
          placeholder=" password"
        />
      </div>
      <div className="p-5 flex items-end justify-end">
        <a
          href="https://www.youtube.com/watch?v=U-VHY8L8KM8" target="_blank"
          className=" text-fuchsia-500 hover:text-fuchsia-400 cursor-pointer"
        >
          Forget Password
        </a>
      </div>

      <div className="text-white mb-7 m-3 p-2 rounded-lg bg-fuchsia-600  hover:bg-fuchsia-400 cursor-pointer">
        {" "}
        <a href="https://jamsrworld.com/"  className=" flex items-center justify-center" >
          Login
        </a>
      </div>

    </section>
  );
};

export default Form;
