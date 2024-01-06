import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from '../components/HomeOne/MainBanner';
import BlogGridFullWidth from "../components/Blog/BlogGridFullWidth";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer2";
import Blogtwo from "../components/BlogDetails/BlogDetailsTwo";
//import axios from 'axios';
//import baseUrl from '../utils/baseUrl';
const Index = ({user,products,store}) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
       <MainBanner />
      <BlogGridFullWidth />


      <Footer />
    </>
  );
};
export default Index;
