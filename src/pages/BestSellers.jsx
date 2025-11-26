import { useProducts } from "./useProducts";

const BestSellers = () => {
  const { bestProducts, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-[1224px] mx-auto px-4 mt-16">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">Best Sellers</h2>
        <a className="text-sm text-gray-600 cursor-pointer">View all →</a>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-4">
        {bestProducts.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[220px] bg-white border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.img}
              className="w-full h-40 object-contain mb-4"
              alt={item.name}
            />

            <h3 className="text-sm font-medium leading-tight mb-2">
              {item.name}
            </h3>

            <p className="text-lg font-semibold">${item.price}</p>

            <div className="flex items-center gap-1 mt-1 text-blue-600">
              <i class="fa-solid fa-star"></i>
              <span>{item.rate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
