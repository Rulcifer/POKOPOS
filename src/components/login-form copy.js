import * as React from "react";
import backgroundImage from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const loginContainerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function Login() {
  return (
    <div
      style={loginContainerStyle}
      className="fixed inset-0 text-white min-h-screen flex items-center justify-center"
    >
      <div className="bg-slate-800 border border-slate-800 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent bg-transparent border-0 border-b-2 border-gray-300 apperance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            ></input>
            <label
              htmlFor=""
              className="mb-8 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your email
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent bg-transparent border-0 border-b-2 border-gray-300 apperance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            ></input>
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your password
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id=""></input>
              <label htmlFor="remember">Remember Me</label>
            </div>
            <span className="text-blue-500">Forgot Password</span>
          </div>
          <Link to="/dashboard">
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 text-center transition-colors duration-300"
              type="submit"
            >
              Login
            </button>
          </Link>
          {/* <div>
            <span className="m-4">
              New Account? <Link to="/register">Register</Link>
            </span>
          </div> */}
        </form>
      </div>
    </div>
  );
}
