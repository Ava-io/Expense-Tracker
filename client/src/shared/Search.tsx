import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="flex mt-3 items-center gap-3">
      <div className="relative">
        <input
          type="search"
          className="outline mt-3 bg-blue-100 pl-8 rounded-3xl w-[200px] h-8"
          placeholder="search"
        />
        <IoIosSearch className="absolute top-1/2 left-2" />
      </div>

      {/* filter input */}
      <div>
        <input
          type="date"
          className="outline mt-3 bg-blue-100 p-4 placeholder:text-gray-300 rounded-3xl w-[172px] h-8"
        />
      </div>
    </div>
  );
};

export default Search;
