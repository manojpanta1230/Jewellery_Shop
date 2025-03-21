import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faVault, faTasks } from "@fortawesome/free-solid-svg-icons";

const DashboardContent = () => {
  const stats = [
    {
      icon: faBell,
      title: "Revenue",
      value: "$23,540.00",
      color: "bg-blue-500",
    },
    {
      icon: faBell,
      title: "Orders",
      value: "20",
      color: "bg-green-500",
    },
    {
      icon: faVault,
      title: "Room Available",
      value: "100",
      color: "bg-purple-500",
    },
    {
      icon: faTasks,
      title: "Bookings",
      value: "50",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-16 h-16 ${stat.color} opacity-10 rounded-full transform translate-x-4 -translate-y-4`}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">
                  {stat.title}
                </h3>
                <FontAwesomeIcon
                  icon={stat.icon}
                  className={`${stat.color} text-white p-2 rounded-full`}
                />
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Add your order rows here */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
              <FontAwesomeIcon icon={faTasks} />
              <span>New Order</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors">
              <FontAwesomeIcon icon={faVault} />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
