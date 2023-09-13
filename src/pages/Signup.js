import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageBase64 } from "../utility/Imagebase64";
// import { loginimage } from ".../assets/signupp.gif";

function Signup(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // usestate as constructor to run only one time when loaded

  const [data, setData] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    password: "",
    confirmpassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
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

  const handleProfileImage = async (e) => {
    const data = await ImageBase64(e.target.files[0]);
    console.log("Image in text format:", data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmpassword } = data;
    if (firstName && lastName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        alert("form submitted");
        navigate("/login");
      } else {
        alert("password did not match");
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-center text-2xl font-bold">SIGN UP</h1>
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 mt-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
          <img
            src={data.image ? data.image : "./assets/signupp.gif"}
            alt="User Signup"
            className="w-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 w-full text-center cursor-pointer">
              <p className="text-sm text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              className="hidden"
              onChange={handleProfileImage}
              accept="image/*"
            />
          </label>
        </div>

        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.firstName}
            onChange={handleOnchange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="h-10 w-full bg-slate-200 mb-2 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.lastName}
            onChange={handleOnchange}
          />
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

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex mb-2 px-2 py-1 bg-slate-200 rounded outline-none focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="h-10 w-full bg-slate-200 border-none outline-none"
              value={data.confirmpassword}
              onChange={handleOnchange}
            />
            <span className="flex text-xl" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>
          <button
            type="submit"
            className="max-w-[120px] m-auto w-full bg-red-500 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-3"
          >
            Signup
          </button>
        </form>
        <p className="text-left mt-3 mb-3">
          Already have accound?{" "}
          <Link className="text-cyan-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
