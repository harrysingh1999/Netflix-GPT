import React, { useRef, useState } from "react";
import background_Img from "./Images/login-Backgound.jpg";
import { checkFormData } from "../Utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

export default function Login() {
  const [signedInForm, setSignedInForm] = useState(true);
  const [formError, setFormError] = useState(null);
  const userName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const handleToggleForm = () => {
    setSignedInForm(!signedInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formResult = checkFormData(
      !signedInForm && userName?.current?.value,
      Email?.current?.value,
      Password?.current?.value
    );
    setFormError(formResult);

    if (formResult) return;

    if (!signedInForm) {
      // Signed Up.....
      createUserWithEmailAndPassword(
        auth,
        Email?.current?.value,
        Password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName?.current?.value,
          })
            .then(() => {})
            .catch((error) => {
              setFormError(error?.message);
            });
        })
        .catch((error) => {
          const errorMessage = error?.message;
          setFormError(`${errorMessage}`);
        });
    } else {
      // Sign in .......................
      signInWithEmailAndPassword(
        auth,
        Email?.current?.value,
        Password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error?.message;
          setFormError(`${errorMessage}`);
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
        className="flex flex-col justify-center items-center h-screen mx-auto
          w-[90%] md:w-[50%] lg:w-[40] xl:w-[25%] relative"
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          className=" bg-black bg-opacity-70 px-8 md:px-16 pt-12 pb-16 rounded-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-white">
            {signedInForm ? "Sign in" : "Sign up"}
          </h1>
          {!signedInForm && (
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
              {signedInForm ? "Sign in" : "Sign up"}
            </button>
            <p className="text-red-600 my-2"> {formError && formError} </p>
            <p className="my-4">OR</p>
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
              {signedInForm ? "New to Netflix?" : "Already a User?"}
            </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={handleToggleForm}
            >
              {signedInForm ? "Sign up" : "Sign in"}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
