import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex relative justify-evenly bg-black bg-opacity-60 text-white mt-10 py-4 md:py-14 w-screen px-4">
        <div>
          <p>FAQ</p>
          <p>Cookie Preferences</p>
          <select className="bg-black text-white px-3 py-1 border border-gray-400">
            <option value=""> English</option>
            <option value=""> Hindi</option>
          </select>
        </div>
        <div>
          <p>Help Center</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <p>Terms of Use</p>
        </div>
        <div>
          <p>Privacy</p>
        </div>
      </div>
    </>
  );
}
