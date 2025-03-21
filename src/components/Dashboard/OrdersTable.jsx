import React from "react";

const OrdersTable = () => {
  const orders = [
    {
      id: "ORD001",
      customer: "John Smith",
      status: "Delivered",
      amount: "$150.00",
    },
    {
      id: "ORD002",
      customer: "Jane Doe",
      status: "Processing",
      amount: "$275.00",
    },
    {
      id: "ORD003",
      customer: "Mike Johnson",
      status: "Pending",
      amount: "$99.99",
    },
  ];

  return (
    <div className="overflow-x-auto p-8">
      <table className="w-full border-collapse text-black rounded-lg overflow-hidden shadow-lg text-xl">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-3">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
