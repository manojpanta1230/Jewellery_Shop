import React from "react";
import {
  FaPlus,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: <FaHome />, text: "Dashboard" },
    { icon: <FaShoppingCart />, text: "Orders" },
    { icon: <FaUsers />, text: "Customers" },
    { icon: <FaChartBar />, text: "Analytics" },
    { icon: <FaCog />, text: "Settings" },
  ];

  return (
    <aside
      className={`bg-[#4c4f53] text-white min-h-screen max-h-screen overflow-scroll pt-2.5 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="logo-image pl-5">
        <img src="/images/logo.png" alt="Logo" className="h-40" />
      </div>

      <ul className="p-5 grid gap-5">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="block px-5 py-3 text-gray-300 hover:bg-white/10 hover:border-l-4 hover:border-orange-500 hover:text-white cursor-pointer transition-all duration-300"
          >
            <div className="flex justify-between items-center gap-2.5">
              <div className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.text}</span>
              </div>
              <FaPlus className="ml-auto" />
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
