import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full md:py-4 py-2 bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto w-[90%] py-4">
        <div>
          <Link href="/" className="font-bold text-xl text-secondary">
            Doctors Portal
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-rose-500 font-semibold flex gap-4 items-center"
                      : "hover:text-rose-500 transition-all duration-300 font-semibold flex gap-4 items-center"
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {/* {!session?.data ? (
              <li>
                <Link
                  href={"/login"}
                  className={
                    pathname === "/login"
                      ? "bg-secondary text-sm text-white px-4 py-2 rounded-md"
                      : "hover:bg-secondary text-sm hover:text-white px-4 py-2 rounded transition-all duration-300"
                  }
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleSignOut}
                  className={`px-4 py-2 rounded-md
                    hover:bg-secondary text-sm hover:text-white transition-all duration-300`}
                >
                  Logout
                </button>
              </li>
            )} */}
          </ul>
        </div>
        {/* <div className="hidden lg:block">
          {session?.data?.user ? (
            <p className="font-bold">
              Logged in as{" "}
              <span className="text-rose-500">{session?.data?.user?.name}</span>
            </p>
          ) : (
            <p className="font-bold">Not Logged In</p>
          )}
        </div> */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {!open ? <FaBarsStaggered size={20} /> : <RxCross2 size={25} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 items-start pl-[22px] py-2 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-rose-500 font-semibold flex gap-4 items-center"
                  : "hover:text-rose-500 transition-all duration-300 font-semibold flex gap-4 items-center"
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
          ))}
        </ul>
        {/* <div className="px-[20px] py-2">
          {session?.data?.user ? (
            <p className="font-bold text-secondary">
              Logged in as{" "}
              <span className="text-rose-500">{session?.data?.user?.name}</span>
            </p>
          ) : (
            <p className="font-bold text-secondary">Not Logged In</p>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact Us", path: "/contact" },
];
