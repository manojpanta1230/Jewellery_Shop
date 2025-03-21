import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ onMenuClick }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className="flex justify-end p-4 bg-white shadow-sm">
      <div className="relative flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img
              src="/images/Test Profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <div className="text-red-600 font-medium">Ella Jones</div>
              <div className="text-sm text-gray-600">Admin</div>
            </div>
          </button>

          {/* Profile Dropdown */}
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowProfileDropdown(false)}
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowProfileDropdown(false)}
              >
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
