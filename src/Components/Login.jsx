import React, { useState } from "react";
import background_Img from "./Images/login-Backgound.jpg";

export default function Login() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleToggleForm = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <div
        className="absolute w-screen h-screen top-0 brightness-[0.5]"
        style={{
          backgroundImage: `url(${background_Img})`,
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center mx-auto bg-black bg-opacity-70
       w-[90%] md:w-[50%] lg:w-[40] xl:w-[25%] px-8 md:px-16 pt-8 pb-12 rounded-md relative "
      >
        <form className="">
          <h1 className="text-3xl font-bold mb-6 text-white">
            {isSignedIn ? "Sign in" : "Sign up"}
          </h1>
         {!isSignedIn && <input
            type="text"
            placeholder="Name"
            className="rounded-md px-2 py-4 w-full my-2 bg-black/[0.3] border border-gray-400 text-white"
          />}
          <input
            type="text"
            placeholder="Email or phone number"
            className="rounded-md px-2 py-4 w-full bg-black/[0.3] border border-gray-400 text-white"
          />
          <input
            type="text"
            placeholder="Password"
            className="rounded-md px-2 py-4 my-2 w-full bg-black/[0.3] border border-gray-400 text-white"
          />
          <div className="text-center text-white mt-4">
            <button className="bg-red-600 text-white p-2 rounded-md w-full font-semibold">
              {isSignedIn ? "Sign in" : "Sign up"}
            </button>
            <p className="my-4">OR</p>
           { isSignedIn && <button className="bg-black/[0.3] border border-gray-400 text-white rounded-md mb-3 p-2 w-full font-semibold">
              Use a Sign-in code
            </button>}
            <p className="hover:underline">forgot Password?</p>
          </div>
          <div className="flex mt-4">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="text-white ms-2">
              Remember Me
            </label>
          </div>
          <div className="text-white mt-4">
            <span className="mb-2 me-2">{isSignedIn ? 'New to Netflix?' : 'Already a User?' }</span>
            <span className="hover:underline" onClick={handleToggleForm}>
            {isSignedIn ? "Sign up" : "Sign in"}
            </span>
          </div>
        </form>
        <div>
          <p className="mt-4 text-white">
            This page is protected by google recaptcha to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </>
  );
}
