import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-slate-200">
        <div className="p-2 flex justify-around items-center">
          <Link to="/">
            <h1 className="">Real State</h1>
          </Link>
          <form className="bg-slate-100 px-2 rounded-lg flex items-center">
            <input
              className="bg-transparent p-1 focus:outline-none"
              type="text"
              placeholder="Quick search"
            />
            <FaSearch className="text-slate-800" />
          </form>
          <div className="">
            <ul className="flex gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : null
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : null
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : null
                }
              >
                <li>Log in </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
