import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Sare users nikalo
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Login user ka email nikalo
  const loggedInEmail = localStorage.getItem("loggedInEmail");

  // Login user dhoondo
  const user = users.find((u) => u.email === loggedInEmail);

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    navigate("/login");
  };

  const handleWithdraw = () => {
    navigate("/withdraw");
  };
  const handlehistory = () => {
    navigate("/history");
  };

  return (
    <div className="bg-zinc-600 h-screen w-screen flex justify-center items-center">

      <div className="w-[30%] h-[90%] bg-amber-950 rounded-4xl flex flex-col justify-between p-5">

        {/* Name */}
        <div className="flex justify-center">
          <h3 className="bg-amber-200 rounded-3xl py-2 px-5">
            {user?.name}
          </h3>
        </div>

        {/* Amount */}
        <div className="flex justify-between">
          <h2 className="bg-amber-200 rounded-3xl py-2 px-5">
            Amount: ${user?.amount}
          </h2>

          <button
            onClick={handleWithdraw}
            className="bg-blue-700 rounded-2xl py-2 px-5 text-white"
          >
            Withdraw
          </button>
        </div>

        {/* Logout */}
        <div className="flex justify-between">
          <button
            onClick={handleLogout}
            className="bg-red-900 p-2 rounded-4xl text-white"
          >
            Logout Account
          </button>

          <button
            onClick={handlehistory}
           className="bg-blue-700 p-2 rounded-4xl text-white">History</button>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;