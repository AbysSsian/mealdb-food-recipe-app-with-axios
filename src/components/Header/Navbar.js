import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import infoIcon from "./information-icon.png";
import homeIcon from "./home-icon.png";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from "../../context/sidebarContext";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optionally, add smooth scrolling behavior
    });
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`navbar bg-green flex align-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <img src={homeIcon} alt="home" className="home-icon" />{" "}
              <span className="navbar-brand-text fw-7">Bliss Eatery</span>
            </Link>
            <div>
              <SearchForm></SearchForm>
            </div>
            <div className="info">
              <img src={infoIcon} alt="info" onClick={handleScrollToBottom} />
            </div>
            <div className="navbar-btns flex align-center">
              <button
                type="button"
                className="navbar-show-btn text-white"
                onClick={() => openSidebar()}
              >
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
