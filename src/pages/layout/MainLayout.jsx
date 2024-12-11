import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto px-2">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
