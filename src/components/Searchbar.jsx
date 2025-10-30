import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { searchAction } from "../redux/actions/search";

function Searchbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (search.trim()) {
      dispatch(searchAction(search));
    } else {
      dispatch(searchAction(""));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-7xl mx-auto relative flex">
        <div className="relative flex-1">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Search products..."
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;