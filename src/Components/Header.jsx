import React, { useEffect } from "react";
import logo from "./Images/netflix-logo.png";
import userProfile from "./Images/userprofile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";

export default function Header() {
  const dispatch = useDispatch();
  const storeUser = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/Login");
      }
    });
  }, []);

  return (
    <>
      <div className="flex ms-24 me-10 justify-between relative z-10">
        <NavLink to="/">
          <img src={logo} alt="Netflix-Logo" className="w-44 z-10" />
        </NavLink>
        {storeUser && (
          <div className="flex items-center">
            <img
              src={userProfile}
              alt="userprofile"
              className="w-10 object-contain rounded-lg"
            />
            <p className="ms-2 font-bold text-sky-700">
              {storeUser.displayName}
            </p>
            <button
              className="font-semibold hover:underline hover:text-red-700 "
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
