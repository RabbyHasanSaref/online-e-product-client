import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <div className="w-[90%] mx-auto z-10 mt-[106px] md:mt-[154px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
