import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Admin from "./Admin";
import AboutUS from "./AboutUS";
import Blogs from "./Blogs";
import Book from "./Book";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./Login";
// استيراد الريأكت روتر
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";
import Contact from "./Contact";
import Kind from "./Kind";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<AboutUS />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/kind" element={<Kind />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Book />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
