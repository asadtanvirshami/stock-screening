import React from "react";

const Navbar = () => {
  return (
    <div className=" grid grid-cols-3 bg-white border border-b-1 text-black text-sm w-full h-12">
      <div className="font-bold w-fit mx-2 p-2 bg-transparent flex justify-center items-center h-fit text-xl ">
        Stock Screening
      </div>
      <ul className="flex space-x-3 justify-center items-center pt-2">
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">Home</li>
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">About</li>
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">Services</li>
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">Contact</li>
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">Pricing</li>
        <li className="hover:bg-blue-100 cursor-pointer px-3 py-1 rounded-md">
          Terms of Service
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
