import { useState } from "react";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";
import { FaApple, FaDollarSign } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { BsGoogle } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";

const LoginComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };

    try {
      console.log(payload);
      const response = await axios.post("http://localhost:3001/test", payload);
      console.log(response.data);
      // toast.success(response.data.message)
    } catch (error) {
      console.log(error.response);
      // toast.error(error.response.message)
    }
  };

  return (
    <div className="min h-screen  flex flex-col w-full md:flex-row ">
      {/* a div for the left side of login containing the user login details */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md rounded-2xl bg-[#0C0D14] shadow-2xl border border-white/5 overflow-hidden">
          {/* Header */}
          <div className="bg-[#14141B] p-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-white">
              <FaDollarSign className="text-sm text-[#8779D2]" />
              <h1 className="text-lg font-bold tracking-wide">Spendly</h1>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-white text-xl font-semibold">
                Start tracking in seconds
              </h2>
              <p className="text-[#8779D2] text-xs opacity-80">
                Set up your fully offline localized ledger keys
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-5">
            {/* Email */}
            <div>
              <label className="text-[#8779D2] text-xs">Email</label>
              <div className="relative mt-1">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@example.com"
                  className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-10 p-3 text-sm text-gray-200 outline-none focus:border-[#8779D2] focus:ring-2 focus:ring-[#8779D2]/20 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-[#8779D2] text-xs">Password</label>
                <span className="text-[#8779D2] text-xs hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <div className="relative mt-1">
                <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-10 p-3 text-sm text-gray-200 outline-none focus:border-[#8779D2] focus:ring-2 focus:ring-[#8779D2]/20 transition"
                />
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-[#8779D2] hover:bg-[#7868c9] transition rounded-xl p-3 text-white font-semibold"
            >
              Sign into Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <hr className="flex-1 border-white/10" />
              <span className="text-[10px] text-white/30">OR</span>
              <hr className="flex-1 border-white/10" />
            </div>

            {/* Social Buttons */}
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition rounded-xl p-3 text-white text-sm"
            >
              <GrGoogle className="text-white/60" />
              Continue with Google
            </button>

            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition rounded-xl p-3 text-white text-sm"
            >
              <FaApple className="text-white/60 text-lg" />
              Continue with Apple
            </button>

            {/* Guest */}
            <button
              onClick={handleLogin}
              className="w-full border border-white/10 hover:border-[#8779D2]/40 transition rounded-xl p-3 text-white text-sm"
            >
              Continue as Guest
            </button>

            {/* Footer */}
            <div className="text-center pt-2">
              <span className="text-[#8779D2] text-xs cursor-pointer hover:underline">
                Need an account? Sign up
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* a div for the right side of the login page */}
      <div className="relative bg-gray-300 basis-1/2 w-full h-full overflow-hidden hidden md:block">
        <div className=" absolute inset-0 bg-black opacity-30"></div>
        <div className="">
          {/* absolute bottom-0 left-0 w-full z-10 p-6 */}
          <div className="absolute bottom-7  left-10 w-full  flex flex-col gap-2 p-6 z-10">
            <h1 className="text-white text-xl font-bold">
              Smart Farm Management
            </h1>
            <h1 className="text-white">
              Manage your farm with AI powered insights and analytics
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
