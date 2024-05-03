import React, { useEffect } from "react";
import logo from "./Images/netflix-logo.png";
import userProfile from "./Images/userprofile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { toggleAI_Search } from "../Utils/AI_SearchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const storeAI_Search = useSelector((store) => store.search.AI_Search);
  const storeUser = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAI_Search = () => {
    dispatch(toggleAI_Search());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/Login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        className={`flex ps-24 pe-14 justify-between ${
          !storeAI_Search ? "absolute" : "relative"
        } z-10 w-screen bg-gradient-to-b from-black`}
      >
        <NavLink to="/">
          <img src={logo} alt="Netflix-Logo" className="w-44 z-10" />
        </NavLink>
        {storeUser && (
          <div className="flex items-center">
            <button
              className="bg-orange-300 px-3 py-2 rounded-lg me-4"
              onClick={handleAI_Search}
            >
              {!storeAI_Search ? "AI Search" : "Homepage"}
            </button>
            <img
              src={userProfile}
              alt="userprofile"
              className="w-10 object-contain rounded-lg"
            />
            <p className="ms-2 font-bold text-sky-700">
              {storeUser.displayName}
            </p>
            <button
              className="font-semibold hover:underline hover:text-red-700 text-white"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
}
