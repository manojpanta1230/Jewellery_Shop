import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-wrap relative">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <Sidebar isMobile={true} onClose={toggleSidebar} />
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`bg-[#4c4f53] text-white min-h-screen max-h-screen overflow-y-auto hidden md:block ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <Sidebar isMobile={false} onClose={toggleSidebar} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <Topbar onMenuClick={toggleSidebar} />
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
