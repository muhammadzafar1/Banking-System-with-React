import React from "react";

const History = () => {
  const loggedInEmail = localStorage.getItem("loggedInEmail");

  const history = JSON.parse(localStorage.getItem("history")) || [];

  // Sirf current user ki history
  const myHistory = history.filter(
    (item) => item.sender === loggedInEmail
  );

  return (
    <div className="h-screen w-screen bg-zinc-700 flex justify-center items-center">

      <div className="bg-zinc-800 w-[40%] min-h-[70%] rounded-2xl p-6">

        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Transaction History
        </h1>

        {myHistory.length === 0 ? (
          <p className="text-white text-center text-xl">
            No History Found
          </p>
        ) : (
          myHistory.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-600 rounded-xl p-4 text-white mb-4"
            >
              <h2 className="text-xl font-bold">
                Receiver: {item.receiver}
              </h2>

              <p className="mt-2">
                Amount: ${item.amount}
              </p>

              <p className="mt-2">
                Date: {item.date}
              </p>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default History;