import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import GalleryThreeGridFullWidth from "../components/Gallery/GalleryThreeGridFullWidth";
import Footer from "../components/Layouts/Footer";

const Index = ({ user, store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
      <GalleryThreeGridFullWidth />
      <Footer />
    </>
  );
};

export default Index;
