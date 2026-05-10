import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const Budget = () => {
  return (
    <div>
      <NavbarComponent
        pathTitle="Budgets"
        showDash={false}
        showExport={true}
        label="Add Budget"
      />
    </div>
  );
};

export default Budget;
