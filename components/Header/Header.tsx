"use client";
import React, { useState } from "react";
import Flex from "../styles/Flex";
import Logo from "./Logo";
import ListItems from "./ListItems";
import Button from "../hooks/Button";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 z-50 bg-white shadow-lg fixed top-0 left-0">
      <Flex classNames="justify-between items-center md:w-full ">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Hamburger for small screens */}
          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ListItems />
          <Link
            href={"#"}
            className="text-md text-gray-900 font-semibold flex items-center gap-1"
          >
            <BsTelephone />
            <span>+2347079396801</span>
          </Link>
          <Button
            title="Login/Sign up"
            type="button"
            classNames="text-primary"
          />
        </nav>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col shadow-lg px-4 pt-4 pb-6">
          <ListItems />
          
          <Link
            href={"#"}
            className="mt-4 text-md text-gray-900 font-semibold flex justify-center items-center gap-1"
          >
            <BsTelephone />
            <span>+2347079396801</span>
          </Link>

          <Button
            title="Login/Sign up"
            type="button"
            classNames="text-primary mt-4"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
