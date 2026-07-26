import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const navigate = useNavigate();
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendMoney = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find(
      (user) => user.email === localStorage.getItem("loggedInEmail")
    );

    const receiver = users.find(
      (user) => user.email === receiverEmail
    );

    // Sender check
    if (!currentUser) {
      alert("Please login first.");
      return;
    }

    // Receiver check
    if (!receiver) {
      alert("User not found");
      return;
    }

    // Khud ko money send na ho
    if (receiver.email === currentUser.email) {
      alert("You can't send money to yourself.");
      return;
    }

    // Amount check
    if (Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    // Balance check
    if (currentUser.amount < Number(amount)) {
      alert("Insufficient Balance");
      return;
    }

    // Money Transfer
    currentUser.amount -= Number(amount);
    receiver.amount += Number(amount);

    // Users save
    localStorage.setItem("users", JSON.stringify(users));

    // ==========================
    // History Save
    // ==========================
    const history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
      sender: currentUser.email,
      receiver: receiver.email,
      amount: Number(amount),
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("history", JSON.stringify(history));
    // ==========================

    alert("Money Sent Successfully!");
    navigate("/dashboard");

    setAmount("");
    setReceiverEmail("");
  };

  return (
    <div className="h-screen w-screen bg-zinc-700 flex justify-center items-center">

      <form onSubmit={handleSendMoney}>

        <div className="h-[90%] w-[25%] rounded-2xl flex flex-col justify-center items-center gap-10">

          <div className="flex flex-col justify-center items-center gap-5 p-2">

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="py-2 px-5 outline-none text-white bg-transparent border border-gray-500 rounded"
            />

            <input
              type="email"
              placeholder="Enter User Email"
              value={receiverEmail}
              onChange={(e) => setReceiverEmail(e.target.value)}
              className="py-2 px-5 outline-none text-white bg-transparent border border-gray-500 rounded"
            />

          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 rounded-2xl px-3 py-2 text-white hover:bg-blue-700"
            >
              Send Money
            </button>
          </div>

        </div>

      </form>

    </div>
  );
};

export default SendMoney;