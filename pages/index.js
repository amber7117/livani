import React, { Component } from 'react';
import Link from 'next/link';
import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from '../components/HomeOne/MainBanner';
import BlogGridFullWidth from "../components/Blog/BlogGridFullWidth";
import FacilitySlider from "../components/Common/FacilitySlider";
import InstagramFeed from "../components/Common/InstagramFeed";
import Footer from "../components/Layouts/Footer2";
import Blog2 from "../components/BlogDetails/BlogDetailsTwo";

const index = ({user,products,store}) => {
return (
<>
<TopHeader user={user} />
<Navbar user={user} store={store} />
   <Blog2 />
<MainBanner />
<BlogGridFullWidth />
<Footer />
   </>
   )
}


export default index;
