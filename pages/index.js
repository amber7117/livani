import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import GalleryThreeGridFullWidth from "../components/Gallery/GalleryThreeGridFullWidth";
import BlogDetailsTwo from "../components/BlogDetails/BlogDetailsTwo";
import Footer from "../components/Layouts/Footer2";

const Index = ({ user, store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
      <BlogDetailsTwo />
      <GalleryThreeGridFullWidth />
      <Footer />
    </>
  );
};

export default Index;
