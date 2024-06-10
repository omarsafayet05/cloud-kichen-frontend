import { useEffect, useState } from "react";
import cloudChicken from "../assets/logo-1.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthProvider";

const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then().catch();
  };

  const menuLinks = (
    <>
      <li className="hover:text-[#FBA850] ">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#FBA850] px-4">
        <Link to="/all_meals">Meals</Link>
      </li>

      {user?.email ? (
        <>
          <li className="hover:text-[#FBA850] px-4">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-[#FBA850] px-4">
            <Link to="/add_meals">Add Products</Link>
          </li>

          <button onClick={handleLogout} className="btn-secondary">
            <li className="hover:text-[#FBA850] px-4">Sign Out</li>
          </button>
        </>
      ) : (
        <button onClick={handleLogout} className="btn-secondary">
          <li className="hover:text-[#FBA850] px-4">
            <Link to="/login"> Sign In </Link>
          </li>
        </button>
      )}
    </>
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/30" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <img src={cloudChicken} alt="img1" className="logo-style" />
        </div>
        <div
          className={`text-white md:block hidden px-7 py-2 font-medium bg-black rounded-full ${
            sticky ? "md:bg-white/0 " : ""
          }`}
        >
          <ul className="flex items-center text-md py-2 gap-1">{menuLinks}</ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] text-3xl md:hidden m-5 ${
            open ? "text-gray-800" : "text-gray-100"
          }`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0  duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col text-lg py-2 gap-10 h-full justify-center">
            {menuLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
