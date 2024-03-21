const FilterSection = ({ searchQuery, onSearch }) => {
  return (
    <div>
      <div className="flex text-gray-700 justify-between rounded-lg p-4 bg-white w-full items-center space-x-16">
        <div className="flex items-center">
          <div className="flex font-medium cursor-pointer text-sm items-center rounded-full bg-gray-200 px-4 py-2.5 hover:bg-gray-300">
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
            </svg>
            filter
          </div>
        </div>
        <div>
          <label
            className="relative flex items-center border py-2 px-2 rounded-2xl gap-2 focus-within:border-gray-300"
            htmlFor="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 ml-2">
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
            <input
              placeholder="Search"
              name=""
              className="w-full rounded-md flex-1 outline-none text-xs"
              required=""
              value={searchQuery}
              onChange={onSearch}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
