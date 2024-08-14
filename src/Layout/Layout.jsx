import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
