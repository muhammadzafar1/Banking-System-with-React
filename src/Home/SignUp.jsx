import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      amount: 1000,
    };

    // Purane users nikal lo
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check email already exists
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("Email already exists!");
      return;
    }

    // Naya user add karo
    users.push(newUser);

    // Save array
    localStorage.setItem("users", JSON.stringify(users));

    alert("Data Saved Successfully!");

    // Inputs clear
    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div>
      <div className="min-h-screen bg-zinc-600 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 w-[30%] min-w-[380px] h-[90%] rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-8 px-10 py-12"
        >
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white font-sans">
            Sign Up Page
          </h1>

          {/* Inputs */}
          <div className="w-full flex flex-col gap-5">

            {/* Full Name */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full h-12 px-4 text-white placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-blue-500"
            />

            {/* Enter Email */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              className="w-full h-12 px-4 text-white placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-blue-500"
            />

            {/* Enter Password */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 px-4 text-white placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-blue-500"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-lg px-8 py-3 rounded-xl transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Login */}
          <p className="text-white font-sans">
            I have an account
            <Link
              to="/Login"
              className="text-blue-400 hover:underline px-3"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;