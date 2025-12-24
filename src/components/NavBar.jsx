import React from "react";

const NavBar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <h1 className="text-[24px] font-semibold">CS — Ticket System</h1>
      <nav>
        <ul className="flex gap-16 items-center">
          <li className="">
            <a
              href="#"
              className="  py-1   border-primary duration-200 hover:font-bold"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="  py-1   border-primary duration-200 hover:font-bold"
            >
              FAQ
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="  py-1   border-primary duration-200 hover:font-bold"
            >
              Changelog
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="  py-1   border-primary duration-200 hover:font-bold"
            >
              Blog
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="  py-1   border-primary duration-200 hover:font-bold"
            >
              Download
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className=" py-1   border-primary duration-200 hover:font-bold"
            >
              Contact
            </a>
          </li>

          <li className="">
            <button className="btn btn-primary bg-linear-to-tr from-[#632EE3] to-[#9F62F2]">
              + New Ticket
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
