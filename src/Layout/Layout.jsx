import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop
        smooth
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "bold",
          padding: "8px",
          paddingLeft: "5.9px",
          borderRadius: "10%",
          background: "#F43F5E",
          boxShadow: "0px 18px 93px 5px rgba(61,54,61,1)",
        }}
        color="#ffff"
      />
    </div>
  );
};

export default Layout;
