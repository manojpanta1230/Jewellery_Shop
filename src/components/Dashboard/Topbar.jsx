import React, { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";

const Topbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="flex justify-end p-4">
      <div className="flex items-center gap-5">
        <FaBell className="text-2xl cursor-pointer" />
        <div className="relative">
          <div
            className="flex items-center gap-5 cursor-pointer"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <img
              src="/images/profile-pic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="inline-block">
              <span className="text-red-500">John Doe</span>
              <span className="ml-5">Admin</span>
            </div>
          </div>

          {isProfileDropdownOpen && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-md min-w-[120px] overflow-hidden z-50">
              <a href="#" className="block p-2.5 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block p-2.5 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block p-2.5 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
