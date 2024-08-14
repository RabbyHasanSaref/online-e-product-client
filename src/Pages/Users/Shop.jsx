import { useEffect, useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard";
import axios from "axios";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?page=${
          currentPage - 1
        }&size=${itemsPerPage}&filter=${filter}&sortByPrice=${sortByPrice}&sortByDate=${sortByDate}&search=${search}`
      );
      setProducts(data);
    };
    getData();
  }, [currentPage, itemsPerPage, filter, sortByPrice, search, sortByDate]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/getCount?filter=${filter}&search=${search}`
      );
      console.log(data.count);
      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  const handlePagination = (val) => {
    setCurrentPage(val);
  };

  const handleReset = () => {
    setFilter("");
    setSortByPrice("");
    setSortByDate("");
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.search.value;
    setSearch(searchInput);
    form.reset();
  };

  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  return (
    <div className="container mx-auto min-h-[calc(100vh-302px)] my-10 flex flex-col justify-between">
      <div>
        {/* tablet/pc  */}
        <div className="hidden md:flex flex-col md:flex-row md:justify-center md:items-center gap-5 flex-wrap flex-shrink">
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Accessories">Accessories</option>
              <option value="Wearables">Wearables</option>
              <option value="Tablets">Tablets</option>
              <option value="Desktops">Desktops</option>
              <option value="Networking">Networking</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Product Name"
              />

              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-rose-500 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={(e) => {
                setSortByPrice(e.target.value);
                setCurrentPage(1);
              }}
              value={sortByPrice}
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Price</option>
              <option value="L2H">Low to High</option>
              <option value="H2L">High to Low</option>
            </select>
          </div>
          <div>
            <select
              onChange={(e) => {
                setSortByDate(e.target.value);
                setCurrentPage(1);
              }}
              value={sortByPrice}
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Date</option>
              <option value="new">Newest First</option>
              <option value="old">Oldest First</option>
            </select>
          </div>
          <button onClick={handleReset} className="btn bg-gray-600 text-white hover:bg-gray-700">
            Reset
          </button>
        </div>
        {/* mobile  */}
        <div className="md:hidden flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Filter By Category</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Accessories">Accessories</option>
              <option value="Wearables">Wearables</option>
              <option value="Tablets">Tablets</option>
              <option value="Desktops">Desktops</option>
              <option value="Networking">Networking</option>
            </select>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex-1 min-w-[200px]">
            <div className="flex border rounded-lg overflow-hidden">
              <input
                className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none flex-1"
                type="text"
                name="search"
                placeholder="Enter Product Name"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-gray-100 uppercase transition-colors duration-300 transform bg-rose-500 rounded-r-md hover:bg-rose-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>

          {/* Sort By Price */}
          <div className="flex-1 min-w-[200px]">
            <select
              onChange={(e) => {
                setSortByPrice(e.target.value);
                setCurrentPage(1);
              }}
              value={sortByPrice}
              name="sortByPrice"
              id="sortByPrice"
              className="border p-3 rounded-md w-full"
            >
              <option value="">Sort By Price</option>
              <option value="L2H">Low to High</option>
              <option value="H2L">High to Low</option>
            </select>
          </div>

          {/* Sort By Date */}
          <div className="flex-1 min-w-[200px]">
            <select
              onChange={(e) => {
                setSortByDate(e.target.value);
                setCurrentPage(1);
              }}
              value={sortByDate}
              name="sortByDate"
              id="sortByDate"
              className="border p-3 rounded-md w-full"
            >
              <option value="">Sort By Date</option>
              <option value="new">Newest First</option>
              <option value="old">Oldest First</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex-1 min-w-[200px]">
            <button
              onClick={handleReset}
              className="w-full py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              Reset
            </button>
          </div>
        </div>
        
        {/* product cards */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        {/* previous btn */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-rose-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">Previous</span>
          </div>
        </button>
        
        {/* pagination number buttons  */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePagination(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-rose-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-rose-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next btn */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-rose-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Shop;
