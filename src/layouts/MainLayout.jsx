import { Outlet } from "react-router-dom";
import "./Home.css";
import Header from "../components/Header";
const MainLayout = () => {
  return (
    <div className="background h-screen bg-cover bg-center bg-no-repeat">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
