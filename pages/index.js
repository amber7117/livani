import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import GalleryThreeGridFullWidth from "../components/Gallery/GalleryThreeGridFullWidth";
import BlogDetailsThree from "../components/BlogDetails/BlogDetailsThree";
import Footer from "../components/Layouts/Footer2";

const Index = ({ user, store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
       <GalleryThreeGridFullWidth />
      <BlogDetailsThree />
 
      <Footer />
    </>
  );
};

export default Index;

