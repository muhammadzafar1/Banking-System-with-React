import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser =  JSON.parse(localStorage.getItem("user"));
     

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      alert("Login Successful");
    }
    else {
      alert("Invalid Email or Password");
    }

  }




  return (
    <div className="min-h-screen bg-zinc-600 flex justify-center items-center">
      <form
        onSubmit={handleLogin}
       className="bg-zinc-800 w-[30%] min-w-[380px] h-[90%] rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-8 px-10 py-12">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white font-sans">
          Login Page
        </h1>

        {/* Inputs */}
        <div className="w-full flex flex-col gap-5">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            className="w-full h-12 px-4 text-white placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />

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
          Sign In
        </button>

        {/* Register */}
        <p className="text-white font-sans">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;