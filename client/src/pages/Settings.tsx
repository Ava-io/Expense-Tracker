import {
  FaCediSign,
  FaDollarSign,
  FaEuroSign,
  FaIndianRupeeSign,
  FaNairaSign,
  FaYenSign,
} from "react-icons/fa6";
import { FaPoundSign } from "react-icons/fa";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import Button from "../shared/Button";
import { ImArrowDown } from "react-icons/im";
import { useState } from "react";
import Modal from "../shared/Modal";
import { BiBarChartSquare } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Settings = () => {
  const [modal, setModal] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);

  const [toggled, setToggled] = useState({
    budgetAlert: false,
    weeklySummary: false,
    goalMilestone: false,
    largeTransaction: false,
    darkMode: false,
    compactView: false,
    animation: false,
  });

  return (
    <div className=" gap-4">
      <NavbarComponent
        pathTitle="Settings"
        showDash={false}
        showExport={true}
        label="Save Changes"
      />

      <div className="relative w-full grid gap-4 p-[30px]">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          {/* left top div */}
          <div className="border border-white/5 w-full rounded-lg p-3 bg-[#121218]">
            <h1 className="font-bold text-[13px]">Profile</h1>
            <hr className="text-white/8 mt-[10px]" />

            <div className="items-center justify-center flex mt-2">
              <div className="size-18 rounded-full items-center flex justify-center  bg-gradient-to-t from-[#7382e5] to-[#59adc2] ">
                <span className="text-[20px] font-bold">AO</span>
              </div>
            </div>
            <div>
              <form action="" className="space-y-2">
                <div className="space-y-2">
                  <label className="text-[#8779D2] text-[13px] ">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Adaeze Obi"
                    className="p-2 border text-[12px] rounded-lg w-full border-white/5 bg-[#212127]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#8779D2] text-[13px] ">EMAIL</label>
                  <input
                    type="email"
                    placeholder="adaezeobi@gmail.com"
                    className="p-2 border text-[12px] rounded-lg w-full border-white/5 bg-[#212127]"
                  />
                </div>

                <div className="grid grid-cols-2 space-y-2 gap-4">
                  <div className="flex flex-col w-full">
                    <label className="text-[#8779D2] text-[13px]">
                      CURRENCY
                    </label>
                    <select
                      name=""
                      id=""
                      className=" border-white/5 appearance-none focus:border-[#8779D2] border items-center justify-center align-center flex flex-cols gap-1 outline-none bg-[#212127] text-[12px] rounded-lg p-3"
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

                  <div className="flex flex-col w-full">
                    <label className="text-[13px] text-[#8779D2]">
                      LANGUAGE
                    </label>
                    <select
                      name=""
                      id=""
                      className="appearance-none focus:border-[#8779D2] outline-none text-[12px] bg-[#212127] border border-white/5 rounded-lg p-3 items-center justify-center align-center flex flex-col gap-1"
                    >
                      <option value="english">English Language</option>
                      <option value="french">French</option>
                      <option value="spanish">Spanish</option>
                      <option value="portugese">Portuguese</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Notification div */}
          <div className="border border-white/5 w-full bg-[#121218] rounded-lg p-3">
            <h1 className="font-bold text-[13px]">Notifications</h1>
            <hr className="text-white/8 mt-[10px]" />

            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Budget alerts</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Notify when 80% of the budget is used
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      budgetAlert: !toggled.budgetAlert,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.budgetAlert ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.budgetAlert ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.budgetAlert ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>

            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Weekly Summary</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Weekly spending digest
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      weeklySummary: !toggled.weeklySummary,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.weeklySummary ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.weeklySummary ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.weeklySummary ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>
            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Goal Milestone</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Alert on goal progress
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      goalMilestone: !toggled.goalMilestone,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.goalMilestone ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.goalMilestone ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.goalMilestone ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>

            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Large Transactions</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Alert for big spends
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      largeTransaction: !toggled.largeTransaction,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.largeTransaction ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.largeTransaction ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.largeTransaction ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-white">
          {/* Appearance div */}
          <div className="border border-white/5  bg-[#121218] w-full rounded-lg p-3">
            <h1 className="font-bold text-[13px]"> Appearance</h1>
            <hr className="text-white/8 mt-[10px]" />

            <div className="py-2 justify-between  flex">
              <div>
                <h1 className="text-[13px] text-white">Dark Mode</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Currently active
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      darkMode: !toggled.darkMode,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.darkMode ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.darkMode ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.darkMode ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>

            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Compact View</h1>
                <span className="text-[#8779D2] text-[12px]">
                  Denser transaction rows
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      compactView: !toggled.compactView,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.compactView ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.compactView ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.compactView ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>
            <div className="py-2 justify-between flex">
              <div>
                <h1 className="text-[13px] text-white">Animations</h1>
                <span className="text-[#8779D2] text-[12px]">
                  UI transitions
                </span>
              </div>

              <motion.div>
                <div
                  onClick={() =>
                    setToggled({
                      ...toggled,
                      animation: !toggled.animation,
                    })
                  }
                  className={`md:w-14 w-8 h-4 md:h-7 ${toggled.animation ? "bg-[#7B69F9]" : "bg-gray-700"} rounded-full flex items-center px-0.5 `}
                >
                  <motion.div
                    animate={{ x: toggled.animation ? 28 : 0 }}
                    className="md:w-5 w-3 h-5 bg-white rounded-full shadow-md hidden sm:block"
                  />

                  <motion.div
                    animate={{ x: toggled.animation ? 15 : 0 }}
                    className="md:w-5 w-3 h-3 bg-white rounded-full shadow-md block md:hidden"
                  />
                </div>
                <div className="size-4 rounded-full text-white"></div>
              </motion.div>
            </div>
          </div>

          {/* Data Management Div */}
          <div className="border border-white/5 bg-[#121218] min-h-[300px] h-full w-full rounded-lg p-3">
            <h1 className="font-bold text-[13px]"> Data Management</h1>
            <hr className="text-white/8 mt-[10px]" />

            <div className="mt-[10px] group ">
              <Button
                className=" w-full border rounded-lg p-[10px] items-center border-white/5 bg-[]"
                onClick={() => setModal(true)}
              >
                <ImArrowDown className="text-[12px] group-hover:text-white hover:bg-[#19191F] text-[#48486c] font-bold" />
                <span className="text-[#48486c] group-hover:text-white font-bold">
                  Export transations(CSV)
                </span>
              </Button>
            </div>

            <Modal isOpen={modal}>
              <div className="bg-white p-4 rounded-md">
                <h1 className="text-[15px] text-black">
                  Do you want to allow downloads on ""?
                </h1>

                <div className="leading-none mt-2">
                  <span className="text-gray-500 text-[12px]">
                    You can change which websites can download files in the
                    Websites section of Safari Settings.
                  </span>
                </div>

                <hr className="text-black/5 mt-[14px]" />
                <button
                  className="text-black ml-[300px] pt-2"
                  onClick={() => setModal(false)}
                >
                  <div className="flex gap-4 ">
                    <span className="text-blue-400"> Cancel</span>
                    <span className="text-blue-400">Allow</span>
                  </div>
                </button>
              </div>
            </Modal>

            <div className="mt-[10px] group">
              <Button
                className=" w-full border rounded-lg p-2.5 items-center border-white/5 bg-[]"
                onClick={() => setLoadData(true)}
              >
                <BiBarChartSquare className="text-[15px] group-hover:text-white text-[#48486c] font-bold" />
                <span className="text-[#48486c] group-hover:text-white font-bold">
                  Load sample data
                </span>
              </Button>
            </div>
            <Modal isOpen={loadData} onClick={() => setLoadData(false)}>
              <div className="p-4">
                <h1 className="text-gray-400">
                  Load sample transactions, budgets and goals?
                </h1>
              </div>
              <hr className="text-black/5 mt-[14px]" />
              <button
                className="text-black ml-[300px] pt-2"
                onClick={() => setLoadData(false)}
              >
                <div className="flex gap-4">
                  <span className="text-blue-400">Cancle</span>
                  <span className="text-blue-400">Allow</span>
                </div>
              </button>
            </Modal>

            <div className="mt-[10px]">
              <Button
                className=" w-full border rounded-lg p-2.5 items-center border-[#6C3341] bg-[#2B1C23]"
                onClick={() => setDeleteData(true)}
              >
                <RiDeleteBin5Fill className="text-[12px]  text-[#48486c] font-bold" />
                <span className="text-[#8C3E4F] font-bold">Clear all data</span>
              </Button>
            </div>
            <Modal isOpen={deleteData} onClick={() => setDeleteData(false)}>
              <div className="p-4">
                <h1 className="text-gray-400">Delete ALL data permanently ?</h1>
              </div>

              <hr className="text-black ml-[300px] " />
            </Modal>

            <div className="bg-[#212127] p-2 mt-4 leading-none rounded-lg ">
              <div className="flex gap-2 items-center">
                <h1 className="text-[13px] font-bold">Privacy: </h1>
                <span className="text-[12px] text-[#8779D2] ">
                  All data stored locally in your browser. Nothing sent to any
                  server
                </span>
              </div>
              <div>
                <span className="text-[12px] text-[#8779D2]">
                  1 transaction stored
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
