import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";

// menuItems
const menuList = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Products",
    href: "/#products",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    label: "FAQ",
    href: "/#FAQ",
  },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const handleClose = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex items-center justify-between px-5 md:px-12 lg:px-20 xl:px-32 py-5 sticky top-0 z-50 bg-white">
      {/* logo */}
      {/* desktop navbar */}
      <div className="">
        <Link to={"/"}>
          <img src="/logo/Logo.svg" alt="logo" className="min-w-[155px]" />
        </Link>
      </div>
      <div className=" hidden lg:flex items-center justify-between w-[80%]">
        <ul className=" flex justify-evenly flex-1 text-[#18191F] text-base font-normal ">
          {menuList.map((item) => (
            <li className="hover:text-primary" key={item.label}>
              <Link to={`${item.href}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-[14px]">
          <button className="py-[10px] px-5  rounded-md text-primary text-sm hover:bg-primary hover:text-white">
            Login
          </button>
          <button className="py-[10px] px-5 bg-primary border border-primary rounded-md text-white text-sm whitespace-nowrap hover:text-primary hover:bg-white hover:border-primary hover:border">
            Sign up
          </button>
        </div>
      </div>
      <div
        onClick={handleSidebarOpen}
        className=" flex items-center justify-center lg:hidden border border-primary rounded-full p-2 hover:bg-primary hover:text-white"
      >
        <FaBars />
      </div>
      {/* mobile navbar */}
      <div
        id="sidebar"
        onClick={handleClose}
        className={` ${
          sidebarOpen ? "block" : "hidden"
        } absolute inset-0 h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm lg:hidden`}
      ></div>
      <div
        className={`${
          sidebarOpen ? "right-0 " : "-right-[100%]"
        } lg:hidden z-30  fixed min-w-[320px] top-0 rounded-l-lg bottom-0 bg-white p-5  transition-all`}
      >
        <div className={"flex items-center justify-between"}>
          <Link to={"/"}>
            <img src="/logo/Logo.svg" alt="logo" className="min-w-[155px]" />
          </Link>
          <div
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center border border-primary rounded-full p-2 hover:bg-primary hover:text-white"
          >
            <FaX />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
