import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Stats from "./Stats";
import OrdersTable from "./OrdersTable";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-wrap relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Main Content Area */}
        <div className="p-8">
          {/* Stats Section */}
          <Stats />

          {/* Orders Table */}
          <OrdersTable />
        </div>
      </main>

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 text-4xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Dashboard;
