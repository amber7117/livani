import React, { Component } from "react";
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import BlogPost from '../components/HomeElectronics/BlogPost';
import BlogDetailsThree from "../components/BlogDetails/BlogDetailsThree";
import Footer from "../components/Layouts/Footer2";
import RecentProducts from '../components/Shared/RecentProducts';

import axios from 'axios';
import baseUrl from '../utils/baseUrl';


const Index = ({ user, products, store }) => {
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


export async function getServerSideProps(ctx) {
  const page = ctx.query.page ? ctx.query.page : '1';

  const payload = {
    params: {
      page,
      limit: 100,
    },
  };

  const url = `${baseUrl}/api/v1/products`;

  const response = await axios.get(url, payload);
  const { products } = response.data;

  return {
    props: {
      products
    },
  };
}





export default Index;

