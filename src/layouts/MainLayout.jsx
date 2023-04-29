import { Outlet } from "react-router-dom";
import "./Home.css";
import Header from "../components/Header";
const MainLayout = () => {
  return (
    <div className="background h-screen bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black opacity-50">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
