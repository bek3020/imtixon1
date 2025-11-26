import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://68fb6f6994ec9606602607d5.mockapi.io/imtixon12")
      .then((res) => {
        const data = res.data[0];

        const allProducts = [
          ...(data?.newProducts || []),
          ...(data?.bestProducts || []),
        ];

        const found = allProducts.find((p) => String(p.id) === String(id));

        setProduct(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-10">Yuklanmoqda...</p>;
  if (!product) return <p className="p-10 text-red-600">Mahsulot topilmadi!</p>;

  return (
    <div className="max-w-[1250px] mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-lg border"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.category}</p>

        <div className="text-3xl font-bold text-[#F45E0C] mb-6">
          ${product.price}
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
