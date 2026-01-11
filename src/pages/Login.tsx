import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "../assets/login-bg.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Login Card */}
      <div className="relative ml-[60%] z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10">
        {/* Eye Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <Eye className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Login
        </h1>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Your Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Your Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passward"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-start">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-600 cursor-pointer"
            >
              Remember Me
            </label>
            <span className="ml-[30%] text-md text-gray-600">
              Forgot password?
            </span>
          </div>

          {/* Sign in button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
