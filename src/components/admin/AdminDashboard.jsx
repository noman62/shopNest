import  { useState } from "react";

import Sidebar from "./Sidebar";
import DashboardInfo from "./DashboardInfo";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="lg:flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardInfo
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </section>
  );
};

export default AdminDashboard;
