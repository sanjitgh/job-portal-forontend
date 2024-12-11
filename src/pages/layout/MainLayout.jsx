import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="bg-base-200">
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto px-2">
        <Outlet></Outlet>
      </main>
      <footer className="bg-base-200">
      <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
