import React from "react";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: <FaShoppingCart className="text-2xl" />,
      title: "Total Orders",
      value: "150",
      color: "bg-gray-700",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Total Customers",
      value: "1,250",
      color: "bg-gray-700",
    },
    {
      icon: <FaDollarSign className="text-2xl" />,
      title: "Total Revenue",
      value: "$25,000",
      color: "bg-gray-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`w-full h-[90px] ${stat.color} flex justify-center items-center gap-8 text-white rounded-[20px] pl-8`}
        >
          <div className="flex items-center gap-8">
            {stat.icon}
            <div>
              <span className="block text-sm">{stat.title}</span>
              <span className="block text-xl font-bold">{stat.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
