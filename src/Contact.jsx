// Contact.js
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";

const Contact = () => {
  return (
    <>
      <Nav />
      <FloatingIcons />

      <div className="pt">
        <div className="contact-container">
          <h1 className="contact-title">تواصل معنا</h1>

          <div className="contact-info">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756651581/itu7wtmj0gzltcicocwm.png"
              alt=""
            />
            <p>
              <strong>العنوان : </strong>7 ميدان سعد زغلول - محطة الرمل -
              الأسكندرية{" "}
            </p>

            <p>
              <strong>📞 أرقام التليفونات:</strong> 201288889415 - 2034848755
            </p>
            <p>
              <strong>📧 البريد الإلكتروني:</strong> info@hossamnabil-firm.com
            </p>
          </div>

          <div className="contact-social">
            <h3>تابعنا على السوشيال ميديا:</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/p/%D8%B9%D8%A7%D8%AF%D9%84-%D8%B9%D9%88%D8%B6-%D8%AF%D8%A7%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9-100064212991096/?locale=ar_AR"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
