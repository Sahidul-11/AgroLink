import React from "react";

const SearchBarSection: React.FC = () => {
  return (
    <div className=" py-4">
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-2xl">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products, weather, forums, or expert advice..."
            className="w-full rounded-full px-4 py-3 shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-shadow"
          />
          {/* Search Icon/Button */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4CAF50] text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:bg-[#2E7D32] transition"
          >
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarSection;
