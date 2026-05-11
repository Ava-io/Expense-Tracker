import NavbarComponent from "../components/Navbar/NavbarComponent";

const Settings = () => {
  return (
    <div className="gap-4">
      <NavbarComponent
        pathTitle="Settings"
        showDash={false}
        showExport={true}
        label="Save Changes"
      />

      <div className="w-full grid gap-4 p-[30px]">
        {/* Section 1 */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-white">
          <div className="border border-white/5 w-full rounded-lg p-2">lkjhgfds</div>
          <div className="border border-white/5 w-full rounded-lg p-2">nbvcxz</div>
        </div>

        {/* Section 2 */}
        <div></div>
      </div>
    </div>
  );
};

export default Settings;
