"use client";
import Link from "next/link";
import logo from "@/app/assets/images/logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

function NavBar() {
  const [state, setState] = useState(false);
  const navBar = [
    { name: "Home", href: "/" },
    { name: "New", href: "/new" },
    { name: "Popular", href: "/" },
    { name: "Trending", href: "/" },
    { name: "Category", href: "/" },
  ];

  return (
    <>
      <div className="flex justify-between items-center border  px-10 py-4 mx-auto">
        <Image src={logo} width={25} height={25} alt="Picture of the author" />
        <nav className=" sm:flex hidden  ">
          <ul className="flex gap-4">
            {navBar.map((item) => (
              <li key={item.name}>
                <Link
                  className=" text-gray-500 hover:text-orange-500"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sm:hidden">
          <button
            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={() => {
              setState(true);
              console.log(state);
              console.log("cliecker");
            }}
          >
            <Menu />
          </button>
        </div>
      </div>
      {state && (
        <div
          className={clsx(
            "flex sm:hidden h-screen w-full bg-black/50 fixed z-[10] top-0 left-0 backdrop-blur -traslate-x-full transition duration-1000 transform",
            state && "translate-x-0"
          )}
        >
          <div className="w-[40%] h-screen bg-transparent "></div>
          <div className="flex flex-col gap-4 bg-white w-[60%] h-screen ">
            <div className="flex justify-end px-10 py-4  ">
              <X
                className="cursor-pointer"
                onClick={() => {
                  setState(false);
                }}
              />
            </div>
            <ul className="flex flex-col gap-4 ">
              {navBar.map((item) => (
                <li key={item.name} className=" px-10  text-end">
                  <a
                    className=" text-gray-500 hover:text-orange-500 "
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
