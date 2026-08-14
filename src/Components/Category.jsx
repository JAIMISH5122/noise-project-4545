import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../Assets/CSS/Category.css";

export default function Category() {
  const { category } = useParams();
  const [state, setState] = useState([]);
const [search, setSearch] = useState("");
const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3001/${category}`
        );
        setState(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [category]);

  const filteredProducts = [...state]
  .filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    if (sort === "low") {
      return a.price - b.price;
    }

    if (sort === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    
    <div className="category-section">

      <div className="d-flex justify-content-between align-items-center mb-4">

  <input
    type="text"
    className="form-control w-50"
    placeholder="Search Product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="form-select w-25"
    value={sort}
    onChange={(e) => setSort(e.target.value)}
  >
    <option value="">Sort By</option>
    <option value="low">Price : Low to High</option>
    <option value="high">Price : High to Low</option>
  </select>

</div>
      <h2 className="text-center mb-4"> Products</h2>

      <div className="category-container">
        {filteredProducts.map((el) => (
          <Link
            key={el.id}
            to={`/${category}/${el.id}`}
            className="category-card"
          >
            <img src={el.image} width={200} alt={el.name} className="h-50" />

            <div className="category-body">
              <h5>{el.name}</h5>

              <p>{el.category}</p>

              <h4>₹{el.price}</h4>

              <button className="btn btn-warning w-100">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}