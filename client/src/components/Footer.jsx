import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="bg-[#37383d] text-gray-300 mt-10 ">
      <div className="max-w-screen-xl px-4 pt-6 pb-4 mx-auto sm:px-6 lg:px-8">
        <img src={logo} className="h-6 w-6 mx-auto mt-10 " alt="logo-hawi" />
        <div className="mt-2 text-md text-gray-300 text-center">
          &copy; {new Date().getFullYear()} Ab & Boni. All rights reserved. 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
