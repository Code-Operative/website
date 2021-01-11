import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
};

export default Layout;