import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import BlogPost from '../components/HomeElectronics/BlogPost';
import BlogDetailsThree from "../components/BlogDetails/BlogDetailsThree";
import Footer from "../components/Layouts/Footer2";
import RecentProducts from '../components/Shared/RecentProducts';

const Index = ({ user, store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
      <RecentProducts products={products.slice(26,32)} />
      <BlogPost />
 
      <Footer />
    </>
  );
};

export default Index;

