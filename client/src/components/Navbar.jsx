import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handelActive = (e) => {
    e.preventDefault();
    setActive(true);
  };
  return (
    <section id="header">
      <Link to={"/"} className="ml-7">
        <img src="Bookl.png" className="h-8 w-8 mb-2 rounded-full ml-8" />
        <p className="font-bold text-slate-600">MyBook Store</p>
      </Link>

      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch className="text-xl text-slate-600" />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hidden lg:block"
          placeholder="Search Your Books..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hidden lg:block"
        >
          Search
        </button>
      </div>

      <div>
        <ul id="navbar">
          <li>
            <Link
              // className={active && "active"}
              // onClick={handelActive}
              to="index.jsp"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"Discounts.jsp"}
              // onClick={handelActive}
              // className={active && "active"}
            >
              Discounts%
            </Link>
          </li>
          <li>
            <Link
              to={"NewBooks.jsp"}
              // onClick={handelActive}
              // className={active && "active"}
            >
              NewBooks
            </Link>
          </li>
          <li>
            <Link
              to={"AllBook.jsp"}
              // onClick={handelActive}
              // className={active && "active"}
            >
              AllBook
            </Link>
          </li>
          <li>
            <Link
              to={"Contact.jsp"}
              // onClick={handelActive}
              // className={active && "active"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"Request.jsp"}
              // onClick={handelActive}
              // className={active && "active"}
            >
              BookRequest
            </Link>
          </li>
          {/* 
          <li id="lg-bag">
            <Link to={"cart.jsp"}>
              <i className="far fa-shopping-bag"></i>
            </Link>
          </li>
          <Link to={""} id="close1">
            <i className="far fa-times"></i>
          </Link> */}
        </ul>
      </div>
      <div>
        <Link to="cart.jsp">
          <FaCartShopping className="text-xl" />
        </Link>
      </div>

      <div>
        <Link to={"/signup"} className="active">
          <FaUserCircle className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
