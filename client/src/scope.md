return (
    <div
className={`h-screen ${shouldCollapse === true ? "w-[70px] px-2" : "w-64"} gap-2 bg-[#141219] flex flex-col p-2 `}
onMouseEnter={() => setIsCollapsed(true)}
onMouseLeave={() => setIsCollapsed(false)}
>
<div className="flex flex-col gap-3">
<div className="flex gap-2  items-center">
<div
className={`text-[#24203a]   bg-[#b37ffb] border border-none rounded-sm ${shouldCollapse === true ? "hidden" : "blocked"}`}
>
<PiCurrencyCircleDollarLight />{" "}
</div>
<h1
className={` text-2xl font-bold text-white font-sans ${shouldCollapse == true ? "hidden" : "blocked"}`}
>
            SPENDLY
</h1>
</div>
<div className="pt-5">
{[User.map](http://User.map)((item) => (
<Link to={item.path} key={[item.name](http://item.name)}>
<h1
className={` text-[#403e50] font-bold p-2 ${shouldCollapse == true ? "hidden" : "blocked"} `}
>
{[item.cat](http://item.cat)}
</h1>
<div
className={`w-full p-2 border-l-[#9987e2] border-l-4 ${activeRoute == [item.name](http://item.name) ? "bg-[#24203a] text-[#9987e2] rounded-lg " : " "} flex gap-3 hover:bg-[#141219] mb-2 rounded-lg`}
onClick={() => setActiveRoute([item.name](http://item.name))}
>
<div
className={`flex gap-2 items-center hover:text-white ${activeRoute == [item.name](http://item.name) ? "text-[#9987e2]" : "text-white"} `}
>
<div
className={` text-[#9987e2]  ${shouldCollapse == true ? "flex items-center text-xl " : " "}`}
>
{item.icon}
</div>
<h1
className={` text-[#9987e2] hover:text-white ${shouldCollapse == true ? "hidden" : "block"}`}
>
{" "}
{[item.name](http://item.name)}
</h1>
</div>
</div>
</Link>
          ))}
</div>
</div>
</div>
  );