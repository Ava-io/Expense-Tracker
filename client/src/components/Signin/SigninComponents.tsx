import {
  // FaCediSign,
  FaDollarSign,
  // FaEuroSign,
  // FaIndianRupeeSign,
  // FaNairaSign,
  // FaYenSign,
} from "react-icons/fa6";
// import Button from "../../shared/Button";
import { useEffect, useState } from "react";
// import { FaPoundSign } from "react-icons/fa";
// import { ImArrowDown } from "react-icons/im";
// import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
// import toast from "react-hot-toast";
import IM1 from "../../assets/Signup1.jpg";
import IM2 from "../../assets/SignUp2.jpg";
import IM3 from "../../assets/Signup3.jpg";

const SigninComponents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [signUp, setSignUp] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [IM1, IM2, IM3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSignup = async () => {
    const payload = {
      first_name: name,
      last_name: name,
      email: email,
      phone_number: phoneNumber,
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
    <div className="bg-[#14141A] h-screen flex flex-col w-full md:flex-row">
      <div className="relative  basis-1/2 w-full h-full overflow-hidden hidden md:block">
        {/* left side of the div */}
        <div
          className="h-full "
          style={{
            backgroundImage: `url(${images[current]})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "contain",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="absolute bottom-7 left-10 w-full flex flex-col gap-2 p-6 z-10 ">
            <h1 className="text-white text-xl font-bold">Spendly</h1>
            <h1 className="text-white">
              Start managing your spending efficiently with smart tracking
              technology
            </h1>
          </div>
        </div>
      </div>

      {/* right side of the div */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md rounded-2xl bg-[#0C0D14] shadow-xl border border-white/5">
          {/* Header */}
          <div className="bg-[#14141B] rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <FaDollarSign className="text-sm" />
              <h1 className="text-lg font-bold">Spendly</h1>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-white text-xl font-bold">
                Start tracking in seconds
              </h2>
              <p className="text-[#8779D2] text-xs">
                Set up your fully offline localized ledger keys
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            {/* Row: First + Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[#8779D2] text-xs">First Name</label>
                <div className="relative mt-1">
                  <IoMdContact className="absolute left-3 top-3 text-white/20" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John"
                    className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#8779D2] text-xs">Last Name</label>
                <div className="relative mt-1">
                  <IoMdContact className="absolute left-3 top-3 text-white/20" />
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-[#8779D2] text-xs">Email</label>
              <div className="relative mt-1">
                <MdEmail className="absolute left-3 top-3 text-white/20" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@example.com"
                  className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-[#8779D2] text-xs">Phone Number</label>
              <div className="relative mt-1">
                <RiLockPasswordFill className="absolute left-3 top-3 text-white/20" />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+234..."
                  className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[#8779D2] text-xs">Password</label>
                <div className="relative mt-1">
                  <RiLockPasswordFill className="absolute left-3 top-3 text-white/20" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#8779D2] text-xs">Confirm Password</label>
                <div className="relative mt-1">
                  <RiLockPasswordFill className="absolute left-3 top-3 text-white/20" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#14141A] border border-white/10 rounded-xl pl-9 p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]"
                  />
                </div>
              </div>
            </div>

            {/* Currency */}
            <div>
              <label className="text-[#8779D2] text-xs">
                Preferred Currency
              </label>

              <select className="w-full mt-1 bg-[#212127] border border-white/10 rounded-xl p-2 text-sm text-gray-300 outline-none focus:border-[#8779D2]">
                <option value="naira">Naira</option>
                <option value="usd">USD</option>
                <option value="euro">Euro</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
                <option value="inr">INR</option>
                <option value="ghc">Cedi</option>
              </select>
            </div>

            {/* Info Box */}
            <div className="bg-[#1A1A29] border border-purple-300/20 rounded-xl p-3 text-xs text-[#5D558F] leading-relaxed">
              <p>
                Your data is{" "}
                <span className="text-[#8779D2] font-semibold">
                  100% encrypted
                </span>{" "}
                and stored locally in your browser.
              </p>
              <p>No server can hijack your finances.</p>
            </div>

            {/* Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-[#8779D2] hover:opacity-90 transition rounded-xl p-3 text-white font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponents;
