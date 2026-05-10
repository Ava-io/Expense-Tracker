import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const Settings = () => {
  return (
    <div>
      <NavbarComponent
        pathTitle="Settings"
        showDash={false}
        showExport={true}
        label="Save Changes"
      />
    </div>
  );
};

export default Settings;
