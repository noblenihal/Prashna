import React from "react";
import Footer from "./Footer";
import DashboardMain from "./DashboardMain";
import DashboardWS from "./DashboardWS";
import Sidebar from "./Sidebar";
import DashBoardNav from "./DashBoardNav";

export default function Dashboard() {
  const [sideBtn, setSidebtn] = React.useState(false);

  const handleCallBack = (childData) => {
    setSidebtn(childData);
  };

  return (
    <div className="bg-slate-100 flex flex-col min-h-screen min-w-screen overflow-x-hidden z-10">
      <DashBoardNav parentCallback={handleCallBack} />
      <div className="bg-slate-100 flex min-h-screen min-w-screen overflow-x-hidden">
        {sideBtn ? <Sidebar /> : null}
        {sideBtn ? <DashboardWS /> : <DashboardMain />}
      </div>
      <Footer />
    </div>
  );
}
