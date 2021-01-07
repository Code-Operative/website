import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
};

export default Layout;