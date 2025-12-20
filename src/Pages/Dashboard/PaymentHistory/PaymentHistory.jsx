import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAuth/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const profileSubscriptions = payments.filter(
    (payment) => payment.subscriptionType === "Profile Subscription"
  );
  const IssueBoost = payments.filter(
    (payment) => payment.subscriptionType === "Issue Boost"
  );

  return (
    <div className="min-h-screen p-8 bg-green-50">
  <h1 className="font-bold text-3xl mb-6">Payment History</h1>

  {/* Profile Subscriptions */}
  <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
    <h3 className="text-green-900 font-semibold text-xl mb-4">
      Profile Subscriptions
    </h3>

    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Subscription</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {profileSubscriptions.map((payment, index) => (
            <tr key={payment._id} className="hover">
              <td>{index + 1}</td>

              <td className="font-medium">
                {payment.CustomerName}
              </td>

              <td>
                <span className="badge badge-success badge-outline">
                  {payment.subscriptionType}
                </span>
              </td>

              <td className="font-semibold text-green-600">
                {payment.amount}৳
              </td>

              <td className="text-gray-500">
                {new Date(payment.paymentDate).toDateString()}
              </td>

              <td className="font-mono text-xs text-gray-600">
                {payment.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Issue Boosts */}
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-green-900 font-semibold text-xl mb-4">
      Issue Boosts
    </h3>

    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Issue</th>
            <th>Issue ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction ID</th>
          </tr>
        </thead>

        <tbody>
          {IssueBoost.map((payment, index) => (
            <tr key={payment._id} className="hover">
              <td>{index + 1}</td>

              <td className="font-medium">
                {payment.CustomerName}
              </td>

              <td className="max-w-40 truncate">
                {payment.IssueName}
              </td>

              <td className="text-xs text-gray-500">
                {payment.IssueId}
              </td>

              <td>
                <span className="badge badge-info badge-outline">
                  {payment.subscriptionType}
                </span>
              </td>

              <td className="font-semibold text-green-600">
                {payment.amount}৳
              </td>

              <td className="text-gray-500">
                {new Date(payment.paymentDate).toDateString()}
              </td>

              <td className="font-mono text-xs text-gray-600">
                {payment.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default PaymentHistory;
