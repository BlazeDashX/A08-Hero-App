import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import githubIcon from "../../assets/github.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <div className="navbar bg-white shadow-sm px-6">
      {/* Logo */}
      <div className="navbar-start">
        <NavLink
          to="/"
          className="text-2xl font-bold text-[#713AE7] flex items-center gap-2"
        >
          <img className="w-10 h-10" src={logo} alt="Logo" />
          HERO.IO
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold underline underline-offset-4 "
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="navbar-end">
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:bg-[#5a2fc4]">
          <img className="w-5 h-5 mr-2" src={githubIcon} alt="GitHub" />
          <span>Contribute</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;