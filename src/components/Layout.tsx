import { Outlet } from "react-router";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";

const Layout = () => {
  return (
    <div className="w-full h-full background-color text-white">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Contact></Contact>
    </div>
  );
};

export default Layout;
