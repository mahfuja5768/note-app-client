import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-inter">
    <div className=" pt-0 min-h-[calc(100vh-306px)]">
      <Outlet />
    </div>
  </div>
  );
};

export default MainLayout;
