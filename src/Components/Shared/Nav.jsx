import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Sign Out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F43F5E",
      cancelButtonColor: "#4A5568",
      confirmButtonText: "Yes, Log Out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Done!",
            text: "LogOut Successful.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <nav className="w-full md:py-4 py-2 bg-white shadow-md lg:h-[114px] lg:flex flex-col items-center justify-center">
      <div className="flex justify-between items-center mx-auto w-[90%] py-4">
        <div>
          <Link href="/" className="font-bold text-xl text-rose-500">
            ShopEase
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6">
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
              {!user && (
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-rose-500 font-semibold flex gap-4 items-center"
                        : "hover:text-rose-500 transition-all duration-300 font-semibold flex gap-4 items-center"
                    }
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          {user && (
            <div className="dropdown top-0 dropdown-end z-50 hidden lg:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title="">
                  {user?.photoURL && (
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user.photoURL}
                    />
                  )}
                  {user && !user?.photoURL && (
                    <FaUserCircle className="w-10 h-10" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <p className="font-bold text-rose-500">{user?.displayName}</p>
                <li className="mt-2">
                  {user && (
                    <button
                      onClick={handleLogOut}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* mobile responsive */}
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
        <div className="px-[20px] py-2">
          {user && (
            <ul
              tabIndex={0}
              className="menu menu-sm mt-1 z-[1] p-2 shadow rounded-box"
            >
              <p className="text-rose-500 font-bold">{user?.displayName}</p>
              <li className="mt-2">
                {user && (
                  <button
                    onClick={() => {
                      logOut().then(() => {
                        toast.success("Log Out Successful");
                      });
                    }}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const navLinks = [
  { name: "Shop", path: "/" },
  { name: "About", path: "/about" },
  //   { name: "Shop", path: "/shop" },
  { name: "Contact Us", path: "/contact" },
];
