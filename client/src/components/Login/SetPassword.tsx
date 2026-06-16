import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const SetPassword = () => {
  const [email, setEmail] = useState("");

  const forgotPassword = async () => {
    const payload = { email };

    try {
      console.log(payload);
      const response = await axios.post("http:localhost:3001/test", payload);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0C0D14] p-6">
      {/* Card */}
      <div className="w-full max-w-md bg-[#14141B] border border-white/5 rounded-2xl shadow-2xl p-6 space-y-6">
        {/* Back */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-[#8779D2] hover:text-white transition"
        >
          <MdKeyboardArrowLeft className="text-xl" />
          <span className="text-sm">Back to Login</span>
        </Link>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-white text-2xl font-bold">Reset Password</h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Password requires a minimum of 8 characters and contains an
            uppercase letter, numbers and symbols.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="text-[#8779D2] text-xs">Email</label>

          <input
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@example.com"
            className="w-full bg-[#0C0D14] border border-white/10 rounded-xl p-3 text-sm text-gray-200 outline-none focus:border-[#8779D2] focus:ring-2 focus:ring-[#8779D2]/20 transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={forgotPassword}
          className="w-full bg-[#8779D2] hover:bg-[#7868c9] transition rounded-xl p-3 text-white font-semibold"
        >
          Send Reset Link
        </button>

        {/* Footer hint */}
        <p className="text-center text-xs text-gray-500">
          Remember your password?{" "}
          <Link to="/login" className="text-[#8779D2] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SetPassword;
