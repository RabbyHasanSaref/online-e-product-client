import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";
import Footer from "../Components/Shared/Footer";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
