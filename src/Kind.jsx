import React from 'react'
import Services from './components/Services'
import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';

const Kind = () => {
  return (
    <>
      <Nav />
      <FloatingIcons/>
      <div style={{ paddingTop: "100px" }}>
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default Kind