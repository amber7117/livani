import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from '../components/HomeOne/MainBanner';
import BlogGridFullWidth from "../components/Blog/BlogGridFullWidth";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer";
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
const Index = ({user,products,store}) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
       <MainBanner />
      <BlogGridFullWidth />
      <FacilitySlider />
      <InstagramFeed />
      <Footer />
    </>
  );
};


export async function getServerSideProps(ctx) {
  const page = ctx.query.page ? ctx.query.page : '1';

  const payload = {
    params: {
      page,
      limit: 100,
    }
  };

  const url = `${baseUrl}/api/v1/products`;

  const response = await axios.get(url, payload);
  const { products, totalPages } = response.data;

  return {
    props: {
      products,
      totalPages,
    },
  };
}
export default Index;
