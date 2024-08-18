import { useEffect, useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard";
import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const handleSliderChange = (value) => {
    setCurrentPage(1);
    setPriceRange(value);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?page=${
          currentPage - 1
        }&size=${itemsPerPage}&category=${category}&brand=${brand}&priceRange=${priceRange}&sortByPrice=${sortByPrice}&sortByDate=${sortByDate}&search=${submittedSearch}`,
        { withCredentials: true }
      );
      setProducts(data);
    };
    getData();
  }, [
    currentPage,
    itemsPerPage,
    category,
    brand,
    sortByPrice,
    submittedSearch,
    sortByDate,
    priceRange,
  ]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/getCount?category=${category}&brand=${brand}&search=${submittedSearch}&priceRange=${priceRange}`,
        { withCredentials: true }
      );
      setCount(data.count);
    };
    getCount();
  }, [category, submittedSearch, brand, priceRange]);

  const handlePagination = (val) => {
    setCurrentPage(val);
  };

  const handleReset = () => {
    setCurrentPage(1);
    setCategory("");
    setBrand("");
    setSortByPrice("");
    setSortByDate("");
    setPriceRange([0, 2000]);
    setSearch("");
    setSubmittedSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.search.value;
    setSubmittedSearch(searchInput);
    setCurrentPage(1);
  };

  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  return (
    <div className="container mx-auto min-h-[calc(100vh-302px)] my-10 flex flex-col justify-between">
      <div>
        {/* Tablet/PC  */}
        <div className="hidden md:flex flex-col md:flex-row md:justify-start md:items-center gap-5 flex-wrap flex-shrink">
          {/* Filter by category  */}
          <div>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
              value={category}
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

          {/* Filter by brand name  */}
          <div>
            <select
              onChange={(e) => {
                setBrand(e.target.value);
                setCurrentPage(1);
              }}
              value={brand}
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Brand</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Redmi">Redmi</option>
              <option value="Walton">Walton</option>
            </select>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                value={search}
                placeholder="Enter Product Name"
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>

          {/* Sort By Price */}
          <div>
            <select
              onChange={(e) => {
                setSortByPrice(e.target.value);
                setSortByDate("");
                setCurrentPage(1);
              }}
              value={sortByPrice}
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Price</option>
              <option value="L2H">Low to High</option>
              <option value="H2L">High to Low</option>
            </select>
          </div>

          {/* Sort By Date */}
          <div>
            <select
              onChange={(e) => {
                setSortByDate(e.target.value);
                setSortByPrice("");
                setCurrentPage(1);
              }}
              value={sortByDate}
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Date</option>
              <option value="new">Newest First</option>
              <option value="old">Oldest First</option>
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="btn bg-gray-600 text-white hover:bg-gray-700"
          >
            Reset
          </button>
        </div>

        {/* Mobile  */}
        <div className="md:hidden flex flex-col justify-start items-start gap-4">
          {/* Filter by category  */}
          <div className="w-full">
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
              value={category}
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

          {/* Filter by brand name  */}
          <div className="w-full">
            <select
              onChange={(e) => {
                setBrand(e.target.value);
                setCurrentPage(1);
              }}
              value={brand}
              className="border p-4 rounded-lg w-full"
            >
              <option value="">Filter By Brand</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Redmi">Redmi</option>
              <option value="Walton">Walton</option>
            </select>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full">
            <div className="flex border rounded-lg overflow-hidden flex-wrap">
              <input
                className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none flex-1"
                type="text"
                name="search"
                value={search}
                placeholder="Enter Product Name"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-gray-100 uppercase transition-colors duration-300 transform bg-rose-500 rounded-r-md hover:bg-rose-600 focus:outline-none w-full"
              >
                Search
              </button>
            </div>
          </form>

          {/* Sort By Price */}
          <div className="w-full">
            <select
              onChange={(e) => {
                setSortByPrice(e.target.value);
                setSortByDate("");
                setCurrentPage(1);
              }}
              value={sortByPrice}
              className="border p-3 rounded-md w-full"
            >
              <option value="">Sort By Price</option>
              <option value="L2H">Low to High</option>
              <option value="H2L">High to Low</option>
            </select>
          </div>

          {/* Sort By Date */}
          <div className="w-full">
            <select
              onChange={(e) => {
                setSortByDate(e.target.value);
                setSortByPrice("");
                setCurrentPage(1);
              }}
              value={sortByDate}
              className="border p-3 rounded-md w-full"
            >
              <option value="">Sort By Date</option>
              <option value="new">Newest First</option>
              <option value="old">Oldest First</option>
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="btn bg-gray-600 text-white hover:bg-gray-700 w-full"
          >
            Reset
          </button>
        </div>

        {/* Price Range Slider */}
        <div className="mt-4 md:mt-8">
          <h2 className="font-semibold mb-4">Price Range: {priceRange[0]} - {priceRange[1]}</h2>
          <Slider
            range
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onChange={handleSliderChange}
            className="mx-4"
          />
        </div>
      </div>

      {/* Products Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-3 text-center">No Product Found</div>
        )}
      </div>

      {/* Pagination  */}
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePagination(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
