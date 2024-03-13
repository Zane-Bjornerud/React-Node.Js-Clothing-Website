import React from "react";
import { MouseEvent } from "react";

interface Props {
  children: string;
  navItems: string[];
}

//start of function
function Navbar({ children, navItems }: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <nav className="navbar navbar-toggler bg-dark border-bottom border-body">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img
              src="/src/images/C-image.jpeg"
              alt="C"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
            {children}
          </a>

          {navItems.map((navItem) => (
            <ul className="navbar-nav" key={navItem} onClick={handleClick}>
              <li className="nav-item">
                {" "}
                <a className="nav-Link text-white" href="#">
                  {" "}
                  {navItem}{" "}
                </a>
              </li>
            </ul>
          ))}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
