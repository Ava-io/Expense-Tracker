import { CiCalendarDate, CiCirclePlus } from "react-icons/ci";
import Button from "../../shared/Button";
import { LuPlus } from "react-icons/lu";
import { BiArrowToBottom } from "react-icons/bi";
import { IoCalendarNumber } from "react-icons/io5";
import { useState, useEffect } from "react";

interface NavBarProps {
  pathTitle: string;
  showDash?: boolean;
  showPage?: boolean;
  showExport?: boolean;
  label?: string;
  label2?: string;
  onClick?: () => void;
}

const NavbarComponent = ({
  pathTitle,
  showDash,
  showPage,
  showExport,
  label,
  label2,
  onClick,
}: NavBarProps) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-none px-[30px] flex gap-4 h-16 justify-between items-center">
        {/* title */}
        <div className="flex items-center gap-4">
          <div className="font-Syne text-white bg-none text-[18px]">
            <h1>{pathTitle}</h1>
          </div>

          {mobile ? (
            <div className="text-white">work on it</div>
          ) : (
            <div>
              {showDash && (
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-[12px] text-[#594EAF]">
                      April 2026
                    </span>
                  </div>

                  <div className="group">
                    <Button className="border border-gray-100/20 bg-transparent ">
                      <IoCalendarNumber className="text-[#946ACC] group-hover:text-white" />
                      <span className="text-[#594EAF] group-hover:text-white">
                        {" "}
                        Period
                      </span>
                    </Button>
                  </div>

                  <div>
                    <Button className="bg-[#946ACC] hover:bg-[#b37ffb]">
                      <LuPlus className="text-lg" />
                      {label}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex  items-center">
          <div className="p-4">
            {/* buttons */}
            {showPage && (
              <div className="text-white items-center  bg-none">
                <Button className="bg-white/15 border border-white/[0.05] ">
                  <LuPlus className="text-lg" />
                  {label2}
                </Button>
              </div>
            )}
          </div>

          <div>
            {showExport && (
              <div>
                <Button
                  onClick={onClick}
                  className="bg-[#946ACC] hover:bg-[#b37ffb]"
                >
                  <LuPlus className="text-lg" />
                  {label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="text-white/8" />
    </>
  );
};

export default NavbarComponent;
