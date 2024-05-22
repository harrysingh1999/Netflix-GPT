import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="flex justify-evenly bg-black bg-opacity-70 text-white 
      py-4 md:py-14 px-4"
      >
        <div>
          <p>FAQ</p>
          <p>Cookie Preferences</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <p>Terms of Use</p>
          <p>Policies</p>
        </div>
        <div>
          <p>Privacy</p>
          <p>Data Security</p>
        </div>
      </div>
    </>
  );
}
