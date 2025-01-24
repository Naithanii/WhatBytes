"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/wlogo.jpg";
import useravatar from "../assets/user-avatar.jpg";

const Navbar = () => {
  const user = {
    name: "randomUser",
    avatar: useravatar,
  };

  return (
    <nav className="text-black p-4 shadow-md">
      <div className="mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <h1 className="text-3xl font-bold">WhatBytes</h1>
        </div>

        
        <div className="flex items-center space-x-3 border border-gray-300 p-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <Image
              src={user.avatar}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-500 transition-all duration-300"></div>
          </div>
          <p className="text-lg font-bold">{user.name}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
