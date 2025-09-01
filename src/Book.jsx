import React from 'react'
import Nav from "./components/Nav";

import Hagz from "./components/7agz";


import Footer from "./components/Footer";
import FloatingIcons from './components/FloatingIcons';

const Book = () => {
  return (
    <>
      <Nav />
      <FloatingIcons />
      <div style={{ paddingTop: "50px" }}>
        <Hagz />
      </div>
      <Footer />
    </>
  );
}

export default Book