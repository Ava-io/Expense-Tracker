import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  // handle input change
  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // move to next input automatically
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // submit OTP
  const handleOtp = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length < 5) {
      toast.error("Please enter complete OTP");
      return;
    }

    try {
      const payload = { otp: finalOtp };

      console.log(payload);

      const response = await axios.post("http://localhost:3001/test", payload);

      console.log(response.data);
      toast.success("OTP verified successfully!");
    } catch (error) {
      console.log(error.response);
      toast.error("OTP verification failed");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0C0D14] p-6">
      {/* Card */}
      <div className="w-full max-w-md bg-[#14141B] border border-white/5 rounded-2xl shadow-2xl p-6 space-y-6">
        {/* Back */}
        <Link
          to="/forgotpassword"
          className="inline-flex items-center gap-2 text-[#8779D2] hover:text-white transition"
        >
          <MdKeyboardArrowLeft className="text-xl" />
          <span className="text-sm">Back</span>
        </Link>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Enter OTP</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Enter the 5-digit code sent to your email or phone number.
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-white bg-[#0C0D14] border border-white/10 rounded-lg outline-none focus:border-[#8779D2] focus:ring-2 focus:ring-[#8779D2]/20"
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleOtp}
          className="w-full bg-[#8779D2] hover:bg-[#7868c9] transition rounded-xl p-3 text-white font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Otp;
