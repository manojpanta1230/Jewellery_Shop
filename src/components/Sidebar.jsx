import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileInvoiceDollar,
  faTasks,
  faCog,
  faMoneyBillWave,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isMobile, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({
    billing: false,
    settings: false,
    finance: false,
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const menuItems = [
    { icon: faHome, text: "Home", link: "/", isDropdown: false },
    {
      icon: faFileInvoiceDollar,
      text: "Billing",
      isDropdown: true,
      dropdownItems: ["Sales", "Purchases", "Orders", "Revenue"],
    },
    { icon: faTasks, text: "Vendors", link: "/vendors", isDropdown: false },
    { icon: faTasks, text: "Users", link: "/users", isDropdown: false },
    { icon: faTasks, text: "Customers", link: "/customers", isDropdown: false },
    { icon: faTasks, text: "Products", link: "/products", isDropdown: false },
    {
      icon: faCog,
      text: "Settings",
      isDropdown: true,
      dropdownItems: ["Category", "Sub Category", "Unit", "User Role"],
    },
    {
      icon: faMoneyBillWave,
      text: "Finance",
      isDropdown: true,
      dropdownItems: ["Inventory", "Items"],
    },
  ];

  return (
    <div className="h-full">
      {/* Logo */}
      <div className="p-4">
        <img
          src="/images/Version 2 Fairy Craft Jewellery.png"
          alt="Logo"
          className="h-40 px-5"
        />
      </div>

      {/* Close button for mobile */}
      {isMobile && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      )}

      {/* Navigation Menu */}
      <nav className="p-5 space-y-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.isDropdown ? (
              <div>
                <button
                  onClick={() => toggleDropdown(item.text.toLowerCase())}
                  className="w-full flex items-center justify-between px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={`transform transition-transform duration-200 ${
                      openDropdowns[item.text.toLowerCase()] ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {openDropdowns[item.text.toLowerCase()] && (
                  <div className="pl-8 bg-[#34495e]">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${item.text.toLowerCase()}/${subItem.toLowerCase()}`}
                        className="block px-5 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.link}
                className="flex items-center space-x-3 px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
