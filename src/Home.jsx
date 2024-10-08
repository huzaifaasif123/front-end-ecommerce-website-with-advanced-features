import React, { useContext, useState, useEffect } from "react";
import Hero from "./Hero";
import Card from "./Card";
import { Context } from "./Applayout";
import ProductNotFound from "./ProductNotFound";
import Filters from "./Filters";
import ProductDetailsPage from "./ProductDetailsPage";
import CartPage from "./CartPage";

const Home = () => {
  const { searchVal = '', isCartOpen } = useContext(Context);

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortingOption, setSortingOption] = useState("Alphabet ( A to Z )");
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false); // New state to handle API errors
  const [ToggleDetailPage, setToggleDetailPage] = useState(false);
  const [singleProductDetail, setSingleProductDetail] = useState({
    img: "",
    title: null,
    description: null,
    price: null,
    id: null,
  });

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setFetching(true);
        setError(false); // Reset error on new fetch
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(true); // Set error if fetch fails
        console.error("Error fetching products:", error);
      } finally {
        setFetching(false); // to ensure fetching is set to false after completion
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );

  const filteredProductsByCategory =
    selectedCategory === "All"
      ? filteredProducts
      : filteredProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Sorting Logic
  const sortedProducts = [...filteredProductsByCategory].sort((a, b) => {
    if (sortingOption === "Alphabet ( A to Z )") {
      return a.title.localeCompare(b.title);
    } else if (sortingOption === "Price (High to Low)") {
      return b.price - a.price;
    } else if (sortingOption === "Price (Low to High)") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      {!searchVal && <Hero />} 
      {fetching && (
        <div className="text-center py-4 text-lg text-palette9 font-bold bg-palette3">
          Please wait, fetching product details from API...
        </div>
      )}
      {/* Show error message if fetch fails */}
      {error && !fetching && (
        <div className="text-center py-4 text-lg text-red-600 font-bold bg-palette3">
          Failed to fetch products. Please check your connection.
        </div>
      )}
      
      {!fetching  && (
        <>
          <Filters
            setSelectedCategory={setSelectedCategory}
            setSortingOption={setSortingOption}
            ToggleDetailPage={ToggleDetailPage}
          />
        </>
      )}

      
      {!fetching && !error && (
        <div
          className={`min-h-screen w-screen flex items-center justify-center bg-palette3 flex-wrap gap-10 ${
            ToggleDetailPage && "hidden"
          }`}
        >
          {filteredProducts.length === 0 && searchVal ? (
            <ProductNotFound />
          ) : (
            sortedProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                img={product.image}
                category={product.category}
                description={product.description}
                setToggleDetailPage={setToggleDetailPage}
                setSingleProductDetail={setSingleProductDetail}
              />
            ))
          )}
        </div>
      )}
      {ToggleDetailPage && (
        <ProductDetailsPage
          setToggleDetailPage={setToggleDetailPage}
          singleProductDetail={singleProductDetail}
        />
      )}
      {isCartOpen && <CartPage />}
    </>
  );
};

export default Home;
