import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);

  // usestate as constructor to run only one time when loaded

  const [data, setData] = useState({
    email: " ",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-center text-2xl font-bold">LOG IN</h1>
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 mt-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src="./assets/signupp.gif" alt="User Login" className="w-full" />
        </div>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.email}
            onChange={handleOnchange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 mb-2 py-1 bg-slate-200 rounded outline-none focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="h-10 w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnchange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>
          <button
            type="submit"
            className="max-w-[120px] m-auto w-full bg-red-500 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-3"
          >
            Login
          </button>
        </form>
        <p className="text-left mt-3 mb-3">
          Not have a account?{" "}
          <Link className="text-cyan-500" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
