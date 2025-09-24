import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setCategories([...new Set(data.map((item) => item.category))]); // unique categories
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div className="App">
      <h1>Product List</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
