import { useState } from "react";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";

const LoginComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);

  return (
    <div className="min h-screen  flex flex-col w-full md:flex-row ">
      {/* a div for the left side of login containing the user login details */}
      <div className=" w-full md:w-1/2 h-full flex justify-center items-center bg-green-50 p-4">
        {/* Card div */}
        <div className="p-6 w-full max-w-md rounded-2xl bg-white">
          <div className="items-center  p-2 flex flex-col">
            <div className="text-4xl  border p-5 rounded-2xl text-white bg-green-900">
              <FaDollarSign />
            </div>

            <div className=" space-y-3 text-center text-xl ">
              <div className="pt-3">
                <h1>Welcome back</h1>
              </div>
              <h2 className="text-[#373650]">
                Log in to your Spendly Account{" "}
              </h2>
            </div>

            {/* Login input field  or card widh */}
            <div className="w-full gap-5  flex flex-col">
              <div className="pt-2">
                <label className=" ">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                />
              </div>

              <div className="">
                <label>Password</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="........"
                  className="p-2 rounded-2xl border w-full text-gray-400 bg-green-50"
                />
              </div>

              <div className=" mt-5 flex gap-4 flex-col ">
                {/* <Link to="/login"> */}
                <Link to="/login">
                  <Button
                    className=" w-full border rounded-lg p-2 items-center border-white/5 bg-[#8779D2]"
                    onClick={() => setLogIn(true)}
                  >
                    <span className="text-white group-hover:text-white font-bold">
                      Create an account
                    </span>
                  </Button>
                </Link>
                {/* </Link> */}
              </div>

              <div className="flex gap-2 items-center justify-center">
                <h1 className="text-green-900 ">Don't have an account?</h1>
                <Link to="/signup">
                  <h1 className="text-green-900"> Sign up</h1>
                </Link>
              </div>
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
