import NavbarComponent from "../components/Navbar/NavbarComponent";
import Button from "../shared/Button";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../shared/Modal";
import { MdOutlineCancel } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
// import motion from "f"
interface budgetData {
  title: string;
  description: string;
  thumbnail: string;
  amountSpent: number;
  amountLeft: string;
  totalAmount: string;
  percentageSpent: number;
  bgThumbail: string;
}
const Budget = () => {
  // const [modal, setModal] = useState(false);
  const [bugetModal, setBudgetModal] = useState(false);

  const Flex: budgetData[] = [
    {
      title: "Food",
      description: "Monthly budget",
      thumbnail: "🍔",
      bgThumbail: "bg-[#2C231F]",
      amountSpent: 19300,
      amountLeft: "#30,700 remaining",
      totalAmount: "of #50,000",
      percentageSpent: 39,
    },
    {
      title: "Transport",
      description: "Monthly budget",
      thumbnail: "🚗",
      bgThumbail: "bg-[#1B2431]",
      amountSpent: 8000,
      amountLeft: "#12,000 remaining",
      totalAmount: "of #20,000",
      percentageSpent: 40,
    },
    {
      title: "Shopping",
      description: "Monthly budget",
      thumbnail: "🛍️",
      bgThumbail: "bg-[#192728]",
      amountSpent: 15000,
      amountLeft: "#15,000 remaining",
      totalAmount: "of #30,000",
      percentageSpent: 50,
    },
    {
      title: "Fun",
      description: "Monthly budget",
      thumbnail: "🎮",
      bgThumbail: "bg-[#2A2035]",
      amountSpent: 5500,
      amountLeft: "#9,500 remaining",
      totalAmount: "of #15,000",
      percentageSpent: 37,
    },
  ];
  return (
    <div>
      <div>
        <NavbarComponent
          pathTitle="Budgets"
          showDash={false}
          showExport={true}
          label="Add Budget"
          onClick={() => setBudgetModal(true)}
        />
      </div>
      <Modal isOpen={bugetModal}>
        <div className="p-6 bg-[#131319] rounded-lg border border-white/5">
          <div className="justify-between flex">
            <div>
              <h1 className="text-white">New Budget</h1>
            </div>

            <div>
              <button
                className="border border-white/5 rounded-lg bg-[#1A1B22] p-1 "
                // onClick={() => setModal(false)}
              >
                <MdOutlineCancel className="text-[14px] text-white/5" />
              </button>
            </div>
          </div>

          <div className="gap-2">
            <form className="mt-2 w-full grid grid-cols-2 gap-2">
              <div className="col-span-2 w-full">
                <label className="text-[12px] text-[#8779D2]">CATEGORY</label>
                <input
                  type="text"
                  placeholder="🍔 Food"
                  className="p-2 text-white rounded-lg w-full border border-white/5 bg-[#212127]"
                ></input>
              </div>

              <div className="col-span-2 w-full">
                <label className="text-[12px] text-[#8779D2]">
                  MONTHLY LIMIT
                </label>
                <div className="relative">
                  <TbCurrencyNaira className=" text-[#8779D2] absolute top-2 left-2" />

                  <input
                    type="number"
                    placeholder="5000"
                    className="px-8 py-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                  />
                </div>
              </div>
            </form>

            <div className="col-span-2">
              <div className="grid grid-cols-2 mt-2 gap-4">
                <div className="col-span-1">
                  <Button
                    className="border border-white/5 w-full rounded-lg bg-[#212127] p-4 space-y-2"
                    onClick={() => setBudgetModal(false)}
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
        </div>
      </Modal>
      <div className="w-full grid gap-4 p-7.5">
        {/* GRID DIV */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {Flex.map((item) => (
            <div className="border w-full px-4 py-5 rounded-3xl flex flex-col border-white/5 hover:scale-y-95 hover:border-white/2 transition-normal duration-300 ease-in bg-[#131218]">
              <div className=" flex gap-2 text-white justify-between">
                <div className="flex gap-2 items-center ">
                  <h1
                    className={`text-[15px] border border-white/5 p-1 rounded-lg bg-[#2C231F] text-white font-bold ${item.bgThumbail}`}
                  >
                    {" "}
                    {item.thumbnail}
                  </h1>

                  <div className="flex flex-col">
                    <h1 className="text-[12px] font-bold ">{item.title}</h1>
                    <span className="text-[10px] text-[#8779D2]">
                      {item.description}
                    </span>
                  </div>
                </div>

                <div className="border border-white/5 items-center flex rounded-lg bg-[#1F1E27] ">
                  <Button
                    className=" "
                    // onClick={() => }
                  >
                    <IoMdClose className="text-[10px] text-[#8779D2]  " />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2  mt-2.5 justify-between">
                <div>
                  <h1 className="text-[#30C092] text-[12px]">
                    #{item.amountSpent} spent
                  </h1>
                </div>

                <div>
                  <h1 className="text-[12px] text-[#8779D1]">
                    {item.totalAmount}
                  </h1>
                </div>
              </div>
              {/* {/* {Progress Bar} */}

              <div>
                {item.amountSpent > 0 ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      {/* <span className="text-amber-300">
                        {item.percentageSpent}%
                      </span> */}
                    </div>

                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentageSpent}%` }}
                        // viewPort ={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="mt-2 justify-between flex">
                <div>
                  <h1 className="text-[12px] text-[#8779D1]">
                    {item.amountLeft}
                  </h1>
                </div>

                <div>
                  <h1 className="text-[12px] text-[#8779D1]">
                    {item.percentageSpent}%
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
