import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/defcamc5x/image/upload/v1756651581/itu7wtmj0gzltcicocwm.png"
            alt="Logo"
          />
        </div>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to={`/`}>
              <li>الرئيسية</li>
            </Link>
            <Link to={`/about`}>
              <li>من نحن</li>
            </Link>
            <Link to={`/kind`}>
              <li>خدمتنا</li>
            </Link>
            <Link to={`/blog`}>
              <li>المقالات</li>
            </Link>
            <Link to={`/contact`}>
              <li>تواصل معنا</li>
            </Link>
            <Link to={`/appointment`}>
              <button>احجز ميعاد</button>
            </Link>
          </ul>
        </nav>

        {/* زر الهامبرغر فقط على الشاشات الصغيرة */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
