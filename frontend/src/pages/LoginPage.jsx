import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = (e) => {

    e.preventDefault();

    // DEFAULT ADMIN CREDENTIALS
    if (
      form.username === "admin" &&
      form.password === "admin@1234"
    ) {

      localStorage.setItem("role", "admin");

      toast.success("Login successful");

      navigate("/admin");

    } else {

      toast.error("Invalid username or password");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-2xl transition"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* TITLE */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Admin Login
          </h1>

          <p className="text-gray-500">
            Lecture Scheduling System
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* USERNAME */}
          <div>

            <label className="block mb-2 text-gray-700 font-semibold">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-2 text-gray-700 font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}