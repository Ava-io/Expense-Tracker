import {
  FaCediSign,
  FaDollarSign,
  FaEuroSign,
  FaIndianRupeeSign,
  FaNairaSign,
  FaYenSign,
} from "react-icons/fa6";
import Button from "../../shared/Button";
import { useState } from "react";
import { FaPoundSign } from "react-icons/fa";
// import { ImArrowDown } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SigninComponents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUp, setSignUp] = useState(false);

  console.log(name);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);
  return (
    <div className="bg-[#14141A] h-screen flex flex-col w-full md:flex-row">
      <div className="relative  basis-1/2 w-full h-full overflow-hidden hidden md:block">
        {/* left side of the div */}
        <div className="h-full bg-linear-to-tr from-[#0D0E14] to-[#0C0B12]">
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
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div className="p-6 w-full max-w-md rounded-2xl bg-[#0C0D14]">
          <div className="items-center bg-[#14141B] p-2 flex flex-col">
            <div className="text-4xl p-5  rounded-2xl flex items-center text-white ">
              <FaDollarSign className="text-[15px] font-bold" />
              <h1 className="text-[18px] font-bold  ">Spendly</h1>
            </div>

            <div className="space-y-1 text-center text-xl">
              <div className="pt-3">
                <h1 className="text-white text-[25px] font-bold">
                  Start tracking in seconds
                </h1>
              </div>
              <h2 className="text-[#8779D2] text-[10px]">
                Set up your fully offline localized ledger keys
              </h2>
            </div>

            <div className="w-full gap-5 relative flex flex-col">
              <div className="pt-2">
                <label className="text-[#8779D2]">Full Name</label>
                {/* <div className="items-center  bg-white gap-2 p-2 flex">
                  <IoMdContact/> */}
                <div className="relative flex gap-2 items-center">
                  <IoMdContact className="absolute left-2 top-3 text-white/15" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="p-2 rounded-2xl pl-7 border border-white/15 w-full bg-[#14141A] text-gray-400 outline-none"
                  />
                </div>
                {/* </div> */}
              </div>

              <div className="relative">
                <label className="text-[#8779D2]">Email</label>
                <div className="relative   items-center ">
                  <MdEmail className="absolute left-2 top-3 text-white/15" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@example.com"
                    className="p-2 pl-7 rounded-2xl border border-white/15 w-full bg-[#14141A] text-gray-400 outline-none "
                  />
                </div>
              </div>

              <div className="relative items-center">
                <label className="text-[#8779D2]">Password</label>
                <div className="relative items-center">
                  <RiLockPasswordFill className="absolute left-2 top-3 text-white/15" />
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="........"
                    className="p-2 pl-7  rounded-2xl border border-white/15 w-full bg-[#14141A] text-gray-400 "
                  />
                </div>
              </div>

              <div className="">
                <label className="text-[#8779D2]">Confirm Password</label>
                <div className="relative items-center">
                  <RiLockPasswordFill className="absolute left-2 top-3 text-white/15" />
                  <input
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="........"
                    className="p-2 pl-7 rounded-2xl border border-white/15 w-full bg-[#14141A] text-gray-400 "
                  />
                </div>
              </div>

              <div>
                <div>
                  <label className="text-[#8779D2] text-[13px]">
                    SELECT PREFERRED CURRENCY
                  </label>
                  <select
                    name=""
                    id=""
                    className=" w-full border-white/5 appearance-none focus:border-[#8779D2] border items-center justify-center align-center flex flex-cols gap-1 outline-none bg-[#212127] text-[12px] rounded-lg p-3"
                  >
                    <option value="naira">
                      <FaNairaSign /> Naira
                    </option>
                    <option value="usd">
                      <FaDollarSign /> USD
                    </option>
                    <option value="euro">
                      <FaEuroSign /> Euro
                    </option>
                    <option value="gbp">
                      <FaPoundSign />
                      GBP
                    </option>
                    <option value="jpy">
                      <FaYenSign />
                      JPY
                    </option>
                    <option value="inr">
                      <FaIndianRupeeSign />
                      INR
                    </option>
                    <option value="ghc">
                      <FaCediSign />
                      Cedi
                    </option>
                  </select>
                </div>
              </div>

              <div className="bg-[#1A1A29] flex flex-col leading-5 text-[#8779D2]  rounded-md border border-purple-300/30">
                <div className="flex gap-1">
                  <span className="text-[12px] text-[#5D558F]">
                    Your data stays
                  </span>
                  <span className="text-[#8779D2] text-[10px] font-bold ">
                    100% encrypted
                  </span>
                  <span className="text-[12px] text-[#5D558F]">
                    in your local browser storage.
                  </span>
                </div>
                <div>
                  <span className="text-[12px] text-[#5D558F]">
                    No server can hijack your finances
                  </span>
                </div>
              </div>

              <div>
                <Link to="/login">
                  <Button
                    className=" w-full border rounded-lg p-2 items-center border-white/5 bg-[#8779D2]"
                    onClick={() => setSignUp(true)}
                  >
                    <span className="text-white group-hover:text-white font-bold">
                      Create an account
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponents;
