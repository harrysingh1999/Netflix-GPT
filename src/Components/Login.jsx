import React, { useRef, useState } from "react";
import background_Img from "./Images/login-Backgound.jpg";
import { checkFormData } from "../Utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

export default function Login() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [formError, setFormError] = useState(null);
  const userName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const handleToggleForm = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formResult = checkFormData(
      userName.current.value,
      Email.current.value,
      Password.current.value
    );
    setFormError(formResult);

    if (formResult) return;

    if (!isSignedIn) {
      // Signed Up.....
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      // Sign in .......................
      signInWithEmailAndPassword(auth, Email.current.value,
        Password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    }
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-3xl font-bold mb-6 text-white">
            {isSignedIn ? "Sign in" : "Sign up"}
          </h1>
          {!isSignedIn && (
            <input
              type="text"
              ref={userName}
              placeholder="Full Name"
              className="rounded-md px-2 py-4 w-full my-2 bg-black/[0.3] border border-gray-400 text-white"
            />
          )}
          <input
            type="email"
            ref={Email}
            placeholder="Email Address"
            className="rounded-md px-2 py-4 w-full bg-black/[0.3] border border-gray-400 text-white"
          />
          <input
            ref={Password}
            type="password"
            placeholder="Password"
            className="rounded-md px-2 py-4 my-2 w-full bg-black/[0.3] border border-gray-400 text-white"
          />
          <div className="text-center text-white mt-4">
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-white p-2 rounded-md w-full font-semibold"
            >
              {isSignedIn ? "Sign in" : "Sign up"}
            </button>
            <p className="text-red-600 my-2"> {formError && formError} </p>
            <p className="my-4">OR</p>
            {isSignedIn && (
              <button className="bg-black/[0.3] border border-gray-400 text-white rounded-md mb-3 p-2 w-full font-semibold">
                Use a Sign-in code
              </button>
            )}
            <p className="hover:underline">forgot Password?</p>
          </div>
          <div className="flex mt-4">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="text-white ms-2">
              Remember Me
            </label>
          </div>
          <div className="text-white mt-4">
            <span className="mb-2 me-2">
              {isSignedIn ? "New to Netflix?" : "Already a User?"}
            </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={handleToggleForm}
            >
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
