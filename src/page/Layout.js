import React from "react";
import Header from "../components/Header";
import NavPage from "../components/NavPage";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    {/* header */ }
    <div>
      <Header/>
    </div>
    {/* navPage bar section */ }
    <div>
      <NavPage/>
    </div>
    {/* footer */ }
    <div>
      <Footer/>
    </div>
    </>
  )
};

export default Layout;