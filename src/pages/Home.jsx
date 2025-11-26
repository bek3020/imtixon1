import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../assets/img/banner_img.png";
import Card1 from "../assets/img/card1.png";
import Card2 from "../assets/img/card2.png";
import Card3 from "../assets/img/card3.png";
import Card4 from "../assets/img/card4.png";
import Card5 from "../assets/img/card5.png";
import Card6 from "../assets/img/card6.png";
import Cart1 from "../assets/img/cart1.png";
import Cart2 from "../assets/img/cart2.png";
import Cart3 from "../assets/img/cart3.png";
import Cart4 from "../assets/img/cart4.png";
import Cart5 from "../assets/img/cart5.png";
import NewProducts from "./NewProducts";
import BestSellers from "./BestSellers";
import Iphone from "../assets/img/iphone15.png";
import Ps from "../assets/img/ps53.png";
import Logo1 from "../assets/img/apple.png";
import Logo2 from "../assets/img/sony.png";
import Logo3 from "../assets/img/samsung.png";
import Logo4 from "../assets/img/canon.png";
import Logo5 from "../assets/img/huawei.png";
import Logo6 from "../assets/img/lenevo.png";
import Watch from "../assets/img/watch.png";
import Blog from "./Blog";
const Home = () => {
  const navigate = useNavigate();

  const categoryCards = [
    { img: Card1, name: "Accessories" },
    { img: Card2, name: "Camera" },
    { img: Card3, name: "Laptop" },
    { img: Card4, name: "Smart Phone" },
    { img: Card5, name: "Gaming" },
    { img: Card6, name: "Smart Watch" },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <main className="max-w-[1224px] mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10 md:gap-0">
        <div className="flex flex-col items-start gap-8 md:gap-[70px] w-full md:w-auto">
          <h1 className="font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[0]">
            Tech Heim
          </h1>
          <p className="font-medium text-[20px] md:text-[32px] leading-[100%] tracking-[0] max-w-md">
            "Join the <b className="text-[#F45E0C]">digital revolution</b>"
          </p>
          <button className="w-full md:w-[288px] h-[56px] rounded-[8px] bg-[#F45E0C] text-white cursor-pointer pt-2 pr-4 pb-2 pl-4 gap-2 opacity-100 hover:bg-[#d54f0a] transition-colors">
            Explore More
          </button>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <img
            src={Banner}
            alt="Banner"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between mb-[48px]">
        {categoryCards.map(({ img, name }) => (
          <div
            key={name}
            className="w-[184px] h-[196px] flex flex-col cursor-pointer shadow-lg p-4 bg-white rounded items-center"
            onClick={() => handleCategoryClick(name)}
          >
            <img src={img} alt={name} />
            <p className="font-light text-[16px] leading-[24px] tracking-[0] text-center mt-2">
              {name}
            </p>
          </div>
        ))}
      </div>
      <div className="p-[36px] bg-[#063A88] rounded-3xl mb-[100px]">
        <div className="flex overflow-x-auto lg:overflow-visible lg:flex-nowrap space-x-4">
          <div className="w-[200px] flex-shrink-0 bg-white border-2 border-[#1E40AF] rounded-lg p-3 shadow-xl relative">
            <div className="absolute top-0 left-0 bg-[#FDDBC9] text-[#111827] font-bold text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
              -50%
            </div>
            <div className="flex items-center justify-center h-28 mb-3 mt-2">
              <img
                src={Cart1}
                alt="Logitech G502 Gaming Mouse"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 line-through">$38.00</p>
              <p className="text-base font-bold text-gray-900">$19.00</p>
            </div>
          </div>

          <div className="w-[200px] flex-shrink-0 bg-white border-2 border-[#1E40AF] rounded-lg p-3 shadow-xl relative">
            <div className="absolute top-0 left-0 bg-[#FDDBC9] text-[#111827] font-bold text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
              -30%
            </div>
            <div className="flex items-center justify-center h-28 mb-3 mt-2">
              <img
                src={Cart2}
                alt="Logitech G502 Gaming Mouse"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 line-through">$38.00</p>
              <p className="text-base font-bold text-gray-900">$19.00</p>
            </div>
          </div>

          <div className="w-[200px] flex-shrink-0 bg-white border-2 border-[#1E40AF] rounded-lg p-3 shadow-xl relative">
            <div className="absolute top-0 left-0 bg-[#FDDBC9] text-[#111827] font-bold text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
              -20%
            </div>
            <div className="flex items-center justify-center h-28 mb-3 mt-2">
              <img
                src={Cart3}
                alt="Logitech G502 Gaming Mouse"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 line-through">$38.00</p>
              <p className="text-base font-bold text-gray-900">$19.00</p>
            </div>
          </div>
          <div className="w-[200px] flex-shrink-0 bg-white border-2 border-[#1E40AF] rounded-lg p-3 shadow-xl relative">
            <div className="absolute top-0 left-0 bg-[#FDDBC9] text-[#111827] font-bold text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
              -25%
            </div>
            <div className="flex items-center justify-center h-28 mb-3 mt-2">
              <img
                src={Cart4}
                alt="Logitech G502 Gaming Mouse"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 line-through">$38.00</p>
              <p className="text-base font-bold text-gray-900">$19.00</p>
            </div>
          </div>

          <div className="w-[200px] flex-shrink-0 bg-white border-2 border-[#1E40AF] rounded-lg p-3 shadow-xl relative">
            <div className="absolute top-0 left-0 bg-[#FDDBC9] text-[#111827] font-bold text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
              -17%
            </div>
            <div className="flex items-center justify-center h-28 mb-3 mt-2">
              <img
                src={Cart5}
                alt="Logitech G502 Gaming Mouse"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-500 line-through">$38.00</p>
              <p className="text-base font-bold text-gray-900">$19.00</p>
            </div>
          </div>
        </div>
      </div>

      <NewProducts />

      <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-8 max-w-7xl mx-auto">
        <div
          className="flex flex-col flex-1 p-6 lg:p-10 rounded-xl overflow-hidden text-white min-h-[450px]"
          style={{
            background: "linear-gradient(135deg, #1e90ff, #20b2aa, #66cdaa)",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone 15 Series
          </h2>

          <div className="flex gap-2 mb-6">
            <div className="bg-white/20 rounded-lg p-2 text-center flex flex-col items-center">
              <span className="font-bold text-lg">8</span>
              <span className="text-xs opacity-80">Days</span>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center flex flex-col items-center">
              <span className="font-bold text-lg">8</span>
              <span className="text-xs opacity-80">Days</span>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center flex flex-col items-center">
              <span className="font-bold text-lg">8</span>
              <span className="text-xs opacity-80">Days</span>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center flex flex-col items-center">
              <span className="font-bold text-lg">8</span>
              <span className="text-xs opacity-80">Days</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1 items-center">
            <div className="flex-1 w-full flex justify-center md:justify-start mb-6 md:mb-0">
              <img
                src={Iphone}
                alt="iPhone 15 Series"
                className="w-full max-w-[200px] h-[250px] md:max-w-[250px] md:h-[300px] object-contain"
              />
            </div>

            <div className="flex-1 md:pl-6 text-center md:text-left">
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                It feels good to be the first
              </h3>
              <p className="text-sm lg:text-base opacity-90 mb-6">
                Get ready for the future of smartphones. Experience innovation
                like never before. Stay tuned for the big iPhone 15 pre-sale.
              </p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex-1 p-6 lg:p-10 rounded-xl overflow-hidden relative text-white min-h-[450px] 
            flex flex-col justify-end"
          style={{
            backgroundColor: "#FFC72C",
            background: "linear-gradient(to right, #1D3557 50%, #FFC72C 50%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "left bottom",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 relative z-10 text-white">
            Play Station 5
          </h2>

          <div className="relative z-10 text-[#1D3557] text-left">
            <p className="text-lg lg:text-2xl font-medium mb-5">
              . . . Digital Edition + 2TB
            </p>
            <button className="px-6 py-2 bg-[#1D3557] hover:bg-[#15293E] text-white font-bold rounded-md transition duration-300">
              Buy Now
            </button>
          </div>

          <div className="absolute bottom-0 right-0 w-3/4 h-3/4">
            <img
              src={Ps}
              alt="Play Station 5 Digital Edition"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <BestSellers />

      <div className="max-w-[1224px] mx-auto px-4 mt-16">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Top Brands</h2>
          <a className="text-sm text-gray-600 cursor-pointer">View all →</a>
        </div>

        <div className="flex mb-[48px] items-center gap-[60px] overflow-x-auto whitespace-nowrap py-4 lg:overflow-x-hidden lg:whitespace-normal lg:justify-center">
          <img src={Logo1} alt="Logo 1" className="flex-shrink-0 w-auto h-8" />
          <img src={Logo2} alt="Logo 2" className="flex-shrink-0 w-auto h-8" />
          <img src={Logo3} alt="Logo 3" className="flex-shrink-0 w-auto h-8" />
          <img src={Logo4} alt="Logo 4" className="flex-shrink-0 w-auto h-8" />
          <img src={Logo5} alt="Logo 5" className="flex-shrink-0 w-auto h-8" />
          <img src={Logo6} alt="Logo 6" className="flex-shrink-0 w-auto h-8" />
        </div>

        <div className="relative bg-[#2b3a42] text-white min-h-[450px] md:min-h-[550px] overflow-hidden flex items-center p-4 md:p-8">
          <div className="absolute top-0 right-0 w-full h-full">
            <div
              className="absolute bg-[#f16b5a] rounded-full 
                     w-[150%] h-[150%] md:w-[70%] md:h-[200%] 
                     -right-[75%] -bottom-[75%] md:-right-[25%] md:-bottom-[100%]"
            ></div>
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto flex">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
                SMART WATCH
              </h1>
              <p className="text-xl sm:text-2xl opacity-80 mb-6">
                Various designs and brands
              </p>
              <button className="bg-[#f16b5a] hover:bg-red-500 text-white font-medium py-2 px-8 rounded text-lg transition duration-200">
                view
              </button>
            </div>

            <div className="hidden flex items-center justify-center md:block md:w-1/2">
              <img
                src={Watch}
                alt="Various Smart Watches"
                className="absolute right-0 bottom-0 w-[300px] xl:w-[350px] h-auto z-30"
                style={{
                  transform: "translateY(10%)",
                }}
              />
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 right-0 w-3/4 opacity-30 z-10">
            <img
              src={Watch}
              alt="Various Smart Watches"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Blog />
    </main>
  );
};

export default Home;
