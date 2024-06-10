import Navigation from "../Navigation";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
