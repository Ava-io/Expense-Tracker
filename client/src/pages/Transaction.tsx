// import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import Button from "../shared/Button";
import {
  IoIosSearch,
  IoMdArrowDown,
  IoMdArrowUp,
} from "react-icons/io";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import Modal from "../shared/Modal";
import { useState } from "react";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdOutlineCancel,
} from "react-icons/md";

// interface mockData {
//   id: string;
//   thumbnail: string;
//   category: string;
//   date: string;
//   amount: string;
// }

interface modalCategory {
  thumbnail: string;
  category: string;
}
const Transaction = () => {
  const [transactionModal, setTransactionModal] = useState(false);
  // const mockData = [
  //   {
  //     id: 1,
  //     thumbnail: "hamburg",
  //     category: "Food",
  //     date: "May 11, 2026",
  //     amount: "#3,000",
  //   },
  //   {
  //     id: 2,
  //     thumbnail: "hamburg",
  //     category: "Transport",
  //     date: "May 10, 2026",
  //     amount: "#2000",
  //   },
  // ];

  const Flex: modalCategory[] = [
    {
      thumbnail: "🍔",
      category: "Food",
    },
    {
      thumbnail: "🚗",
      category: "Transport",
    },
    {
      thumbnail: "🏠",
      category: "Housing",
    },
    {
      thumbnail: "💊",
      category: "Health",
    },
    {
      thumbnail: "🎮",
      category: "Fun",
    },
    {
      thumbnail: "🛍️",
      category: "Shopping",
    },
    {
      thumbnail: "📚",
      category: "Education",
    },
    {
      thumbnail: "💡",
      category: "Utilities",
    },
    {
      thumbnail: "💵",
      category: "Salary",
    },
    {
      thumbnail: "💻",
      category: "Freelance",
    },
    {
      thumbnail: "📈",
      category: "Business",
    },
    {
      thumbnail: "🎁",
      category: "Gift",
    },
    {
      thumbnail: "💰",
      category: "Savings",
    },
    {
      thumbnail: "⌾",
      category: "Others",
    },
  ];
  return (
    <div className="p-3 h-screen ">
      <div>
        <NavbarComponent
          pathTitle="Transaction"
          showDash={false}
          showPage={true}
          showExport={true}
          label="Add"
          label2="Export CSV"
          onClick={() => setTransactionModal(true)}
        />
      </div>

      <Modal isOpen={transactionModal}>
        <div className="p-6 bg-[#131319] rounded-lg border border-white/5">
          <div className="justify-between flex">
            <div>
              <h1 className="text-white">New Transaction</h1>
            </div>

            <div>
              <Button
                className="border border-white/5 rounded-lg p-4 bg-[#1A1B22]"
                onClick={() => setTransactionModal(!transactionModal)}
              >
                <MdOutlineCancel className="text-[14px] text-white" />
              </Button>
            </div>
          </div>

          <div className="border border-white/5 p-1 grid grid-cols-2 gap-2 rounded-lg bg-[#131319] mt-2 ">
            <div className="  hover:bg-[#31212B] group flex gap-1 items-center justify-center  rounded-lg col-span-1 p-2  ">
              <div className="  text-[#8779D2]  group-hover:text-[#7C3B4B]">
                <MdArrowDownward />
              </div>{" "}
              <h1 className="text-[#8779D2] text-[12px] group-hover:text-[#7C3B4B] ">
                Expense
              </h1>
            </div>

            <div className="  hover:bg-[#1F2E2F] group flex gap-1 items-center justify-center  rounded-lg col-span-1 p-2  ">
              <div className="  text-[#8779D2]  group-hover:text-[#2A6D5B]">
                <MdArrowUpward />
              </div>{" "}
              <h1 className="text-[#8779D2] text-[12px] group-hover:text-[#2A6D5B] ">
                Income
              </h1>
            </div>
          </div>

          <div className="gap-2 mt-3">
            <form className="mt-2 w-full grid grid-cols-2 gap-2">
              <div className="col-span-2 w-full">
                <label className="text-[#8779D2] text-[10px]">AMOUNT</label>

                <input
                  type="number"
                  placeholder="0.00"
                  className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                />
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-[#8779D2] text-[10px] ">
                      DESCRIPTION
                    </label>
                    <input
                      type="text"
                      placeholder="What was this for?"
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[10px]">DATE</label>
                    <input
                      type="date"
                      placeholder="22/05/2026"
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="text-[#8779D2] text-[10px]">
                      NOTE(OPTIONAL)
                    </label>

                    <input
                      type="text"
                      placeholder="Extra details..."
                      className="p-2 border text-[12px] text-[#8779D2] rounded-lg w-full border-white/5 bg-[#212127]"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-[#8779D2] text-[10px]">CATEGORY</label>
                <div className="grid grid-cols-4 gap-2">
                  {Flex.map((item) => (
                    <div className="border hover:border-[#8779D2] hover:bg-[#211F38] group w-full p-3 rounded-md  flex flex-col border-white/5 bg-[#212127] items-center">
                      <div>
                        <span>{item.thumbnail}</span>
                      </div>
                      <div className="">
                        <h1 className="text-[#8779D2] text-[10px] group-hover:text-white ">
                          {item.category}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>

            <div className="col-span-2 ">
              <div className="grid grid-cols-2 mt-1 gap-4 ">
                <div className="col-span-1">
                  <Button
                    className="border border-white/5 w-full  rounded-lg bg-[#212127] p-4 space-y-2"
                    onClick={() => setTransactionModal(false)}
                  >
                    <h1 className="text-[#8779D2]">Cancel</h1>
                  </Button>
                </div>

                <div className="col-span-1">
                  <Button className="border w-full border-white/5 rounded-lg bg-[#8779D2] p-4 space-y-2">
                    Add Transaction
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="bg-[#121218] rounded-lg mt-2">
        <div className="pt-2.5 flex flex-col ">
          <div className="p-1 text-white  bg-[#121219] rounded-lg">
            <div className=" p-2   rounded-lg  flex items-center gap-3">
              <div className=" items-center gap-2 w-70 p-2 flex border border-white/5 rounded-lg ">
                <IoIosSearch />
                <input
                  type="text"
                  className=" outline-none text-[#8779D2] text-[13px]"
                  placeholder="Search..."
                />
              </div>

              <div className="w-10 h-7.5 flex justify-center  rounded-full border border-[#8779D2] items-center">
                <span className="text-[13px] text-[#8779D2]">All</span>
              </div>

              <div className="border border-white/5 rounded-full p-1 items-center justify-center align-center flex gap-1 group  ">
                <BsArrowUp className="text-[10px] text-[#8779D2] text-bold group-hover:text-white" />
                <span className="text-[10px] text-[#8779D2] group-hover:text-white">
                  Income
                </span>
              </div>

              <div className="border border-white/5 rounded-full p-1 items-center justify-center align-center flex gap-1 group ">
                <BsArrowDown className="text-[10px] text-[#8779D2] group-hover:text-white" />
                <span className="text-[10px] text-[#8779D2] group-hover:text-white">
                  Expenses
                </span>
              </div>

              {/* <Button className="text-white p-2 " bgColor="bg-[#141319]" onClick={" "} size=""  /> */}
              <div className="flex justify-center relative items-center">
                <select
                  name=""
                  id=""
                  className="border appearance-none border-white/5 outline-none text-[10px] bg-transparent rounded-lg p-1 items-center justify-center align-center flex  flex-cols gap-1 "
                >
                  <option value="newest"> Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest">Highest amount</option>
                  <option value="lowest">Lowest amount </option>
                </select>
                {/* <IoIosArrowDown className="text-[10px] text-white" /> */}
              </div>
              {/* 
          <div className="border border-white/5 rounded-lg p-1 items-center justify-center align-center flex gap-1 ">
            <span className="text-[10px] text-white">Newest</span>
          </div> */}

              <div className="border border-white/5 rounded-lg p-1 items-center justify-center align-center flex gap-1 ">
                {/* <IoIosArrowUp className="text-[10px] text-white" />
              <span className="text-[10px] text-white">All categories</span> */}

                <select
                  name="category"
                  defaultValue=""
                  className="appearance-none outline-none text-[10px] bg-transparent rounded-lg p-1 items-center justify-center align-center flex  flex-cols gap-1 "
                >
                  <option value="" disabled>
                    All Categories
                  </option>
                  <option value="food">🍔 Food</option>
                  <option value="transport">🚗 Transport</option>
                  <option value="housing">🏠 Housing</option>
                  <option value="health">💊 Health</option>
                  <option value="fun">🎮 Fun</option>
                  <option value="shopping">🛍️ Shopping</option>
                  <option value="education">📚 Education</option>
                  <option value="utilities">💡 Utilities</option>
                  <option value="salary">💵 Salary</option>
                  <option value="freelance">💻 Freelance</option>
                  <option value="business">📈 Business</option>
                  <option value="gift">🎁 Gift</option>
                  <option value="savings">💰 Savings</option>
                  <option value="others">⌾ Others</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-[12px] p-2">
            <div className="flex gap-1 ">
              <span className="text-[#393854]">Showing</span>
              <span className="text-white">0</span>
              <span className="text-[#393854]">transactions</span>
            </div>

            <div className="flex gap-2.5 ">
              <div className="text-[#2B9372] flex items-center ">
                <IoMdArrowUp />
                <span>#0</span>
              </div>
            </div>

            <div className="flex gap-2.5 ">
              <div className="text-[#994355] flex items-center ">
                <IoMdArrowDown />
                <span>#0</span>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="text-[#8068E2]">= Net:</span>
              <span className="text-[#8068E2] font-bold">#0</span>
            </div>
          </div>
          {/* horizontal line */}
          <div>
            <hr className="border-white/5 mx-2" />
            <div className="p-2 text-[12px] text-[#232232]">
              <table className="w-full items-start table-fixed">
                <thead className="text-left">
                  <tr>
                    <th>TRANSACTION</th>
                    <th>CATEGORY</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="border-white/5 mx-2" />
          </div>

          <div className="items-center p-62.5 justify-center flex flex-col text-[12px]">
            <div className="text-[50px] text-[#232329]">
              <ImSearch />
            </div>
            <span className="text-[#8779D2]">No transactions found</span>
            <span className="text-[#8779D2]">Try adjusting your filters</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
