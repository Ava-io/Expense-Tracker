"use client";
import { IoMdClose } from "react-icons/io";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../shared/Modal";
import { MdOutlineCancel } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GoPlus } from "react-icons/go";

interface Goals {
  thumbnail: string;
  title: string;
  description: string;
  targetAmount: number;
  savedSofar: number;
  amountLeft: number;
  bgThumbail: string;
  percentageSaved: number;
}

const Goals = () => {
  // const [modal, setModal] = useState(false);
  const [goalModal, setGoalModal] = useState(false);
  // const [buttonModal, setButtonModal] = useState(true);

  const Flex: Goals[] = [
    {
      thumbnail: "💰",
      title: "Emergency Funds",
      targetAmount: 500000,
      savedSofar: 120000,
      amountLeft: 380000,
      description: "115 days left",
      bgThumbail: "bg-[#211E36]",
      percentageSaved: 80,
    },
    {
      thumbnail: "💻",
      title: "New Laptop",
      targetAmount: 1000000,
      savedSofar: 300000,
      amountLeft: 700000,
      description: "55 days left",
      bgThumbail: "text-[#182728]",
      percentageSaved: 23,
    },
    {
      thumbnail: "✈️",
      title: "Vacation trip",
      targetAmount: 2000000,
      savedSofar: 450000,
      amountLeft: 1550000,
      description: "85 days left",
      bgThumbail: "text-[#302621]",
      percentageSaved: 40,
    },
  ];

  const radius = 45;

  const circumference = 2 * Math.PI * radius;

  const percentage = Flex.percentageSaved;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="p-3 h-screen">
      <div>
        <NavbarComponent
          pathTitle="Goals"
          showExport={true}
          label="New Goal"
          onClick={() => setGoalModal(true)}
        />
      </div>
      <Modal isOpen={goalModal}>
        <div className="p-6 bg-[#131319] rounded-lg border border-white/5">
          <div className="justify-between flex">
            <div>
              <h1 className="text-white">New Savings Goal</h1>
            </div>

            <div>
              <Button className="border border-white/5 rounded-lg bg-[#1A1B22] p-4 ">
                <MdOutlineCancel className="text-[14px] text-white" />
              </Button>
            </div>
          </div>

          <div className="gap-2">
            <form className="mt-2 w-full grid grid-cols-2 gap-2">
              <div className="col-span-2 w-full">
                <label className="text-[#8779D2] text-[13px] ">GOAL NAME</label>
                <input
                  type="text"
                  placeholder="e.g Emergency Fund, New Laptop"
                  className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                />
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[13px]">
                      TARGET AMOUNT
                    </label>
                    <div className="relative">
                      <TbCurrencyNaira className=" text-[#8779D2] absolute top-2 left-2" />

                      <input
                        type="number"
                        placeholder="500000"
                        className="px-8 py-2 border text-[12px] text-[#8779D2] rounded-lg  w-full border-white/5 bg-[#212127]"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[13px]">
                      SAVED SO FAR
                    </label>
                    <div>
                      <input
                        type="number"
                        placeholder="500000"
                        className="p-2 border text-[12px] w-full text-[#8779D2] rounded-lg border-white/5 bg-[#212127]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[13px]">
                      DEADLINE
                    </label>
                    <div>
                      <input
                        type="text"
                        placeholder="20/08/2026"
                        className="p-2 border text-[12px] w-full text-gray-300 rounded-lg  border-white/5 bg-[#212127]"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[13px]">ICON</label>
                    <input
                      type="text"
                      placeholder="Goal"
                      className="p-2 border text-[12px] w-full text-gray-300 rounded-lg border-white/5 bg-[#212127]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-span-2 ">
            <div className="grid grid-cols-2 mt-2 gap-4 ">
              <div className="col-span-1">
                <Button
                  className="border border-white/5 w-full rounded-lg bg-[#212127] p-4 space-y-2"
                  onClick={() => setGoalModal(false)}
                >
                  Cancel
                </Button>
              </div>

              <div className="col-span-1">
                <Button className="border w-full border-white/5 rounded-lg bg-[#8779D2] p-4 space-y-2">
                  Create Goal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="grid w-full gap-4 p-7.5">
        {/* Grid div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Flex.map((item) => (
            <div className="border w-full px-4 py-5 rounded-3xl flex flex-col border-white/5 hover:scale-y-95 hover:border-white/7 transition-normal duration-300 ease-in bg-[#131218]">
              <div className="flex gap-2 text-white justify-between">
                <div className="flex gap-2 items-center">
                  <h1
                    className={`text-[15px] border border-white/5 p-1 rounded-lg bg-[#2C231F] text-white font-bold ${item.bgThumbail}`}
                  >
                    {item.thumbnail}
                  </h1>

                  <div className="flex flex-col">
                    <h1 className="text-[12px] font-bold"> {item.title}</h1>
                    <span className="text-[10px] text-[#8779D2]">
                      {item.description}
                    </span>
                  </div>
                </div>

                <div className="border border-white/5 items-center flex rounded-lg bg-[#1F1E27]">
                  <Button className=" ">
                    <IoMdClose className="text-[10px] text-[#8779D2]" />
                  </Button>
                </div>
              </div>

              <div>
                {item.savedSofar > 0 ? (
                  <div className="relative size-20 ">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r={45}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={45}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xl font-bold">
                        {" "}
                        {item.percentageSaved}%
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="flex justify-between ">
                <div>
                  <span className="text-[12px] text-white">
                    #{item.savedSofar}
                  </span>
                </div>

                <div>
                  <span className="text-[12px] text-[#8779D2]">
                    #{item.targetAmount}
                  </span>
                </div>
              </div>

              <div className="items-center justify-center mt-2 flex text-[#8779D2]">
                <span className="text-[12px]">#{item.amountLeft} to go</span>
              </div>

              <div className="mt-2 text-[#8779D2] ">
                <Button className="border rounded-lg group items-center border-white/5 w-full p-2 hover:bg-white/5">
                  <GoPlus className="text-[14px] text-[#8779D2] group-hover:text-white" />
                  <h1 className="text-[#8779D2] group-hover:text-white">
                    Add Transaction
                  </h1>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
