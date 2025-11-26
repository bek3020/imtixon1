import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    axios
      .get("https://68fb6f6994ec9606602607d5.mockapi.io/imtixon12")
      .then((res) => {
        const apiResponse = res.data;

        if (!Array.isArray(apiResponse) || apiResponse.length === 0) {
          setError("API ma'lumotlari bo'sh yoki noto'g'ri formatda.");
          setProducts([]);
          setLoading(false);
          return;
        }

        const data = apiResponse[0];

        const allProducts = [
          ...(data?.newProducts || []),
          ...(data?.bestProducts || []),
        ];

        let filtered = allProducts;

        if (category) {
          const lowerCaseCategory = category.toLowerCase().trim();

          filtered = allProducts.filter((p) => {
            const productCategory = p.category
              ? p.category.toLowerCase().trim()
              : "";
            return productCategory.includes(lowerCaseCategory);
          });
        }

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="max-w-[1224px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Products {category ? `for "${category}"` : "All"}
      </h1>

      {loading && <p className="text-blue-600">Mahsulotlar yuklanmoqda...</p>}

      {!loading && error && (
        <p className="text-red-600 border border-red-300 p-4 rounded-md">
          Xato: {error}
        </p>
      )}

      {!loading && !error && products.length === 0 ? (
        <p>No products found {category ? `for "${category}"` : ""}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <p className="text-sm text-gray-600">
                  Category: <strong>{p.category || "Noma'lum"}</strong>
                </p>
                <p className="text-lg font-bold text-[#F45E0C] mt-1">
                  Price: ${p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
