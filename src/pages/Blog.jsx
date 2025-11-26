import React from "react";
import Bannre2 from "../assets/img/bebe.png";
import Naushnik from "../assets/img/naushnik.png";
import Tred from "../assets/img/tred.png";
const Blog = () => {
  return (
    <main className="max-w-[1224px] mx-auto px-4 py-12 md:py-16">
      <header className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Blogs
        </h2>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-gray-900 transition duration-150 font-medium"
        >
          View all
          <span className="ml-1 text-sm">&gt;</span>
        </a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <div className="relative h-64 md:h-96">
            <img
              src={Bannre2}
              alt="Meta Platforms plans to release free software"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
              <span className="flex items-center">
                <span className="mr-1">
                  <i class="fa-solid fa-calendar"></i>
                </span>
                August, 8, 2023
              </span>
              <span className="flex items-center">
                <span className="mr-1">
                  <i class="fa-solid fa-alarm-clock"></i>
                </span>
                3 min read
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition duration-150 cursor-pointer mb-3">
              Meta Platforms plans to release free...
            </h3>

            <p className="text-gray-600 line-clamp-3">
              The parent company of Facebook, Meta Platforms, is introducing
              software to help deve...
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center bg-white p-4 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg cursor-pointer">
            <div className="w-20 h-20 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img
                src={Naushnik}
                alt="Headphones"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-1">
                8 Things You Probably Didn't Know About Headphones
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  <i class="fa-solid fa-calendar"></i> March, 28, 2023
                </span>
                <span className="text-red-500">&#128214;</span>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg cursor-pointer">
            <div className="w-20 h-20 flex-shrink-0 mr-4 rounded-lg overflow-hidden">
              <img
                src={Tred}
                alt="Bitcoin Price Drop"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-1">
                Analyzing the August 17th Bitcoin Price Drop
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  <i class="fa-solid fa-calendar"></i> August, 17, 2023
                </span>
                <span className="text-red-500">&#128214;</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-gray-800 text-center font-medium hover:bg-gray-50 transition">
            Ko'proq Maqolalar
          </div>
        </div>
      </div>

      <hr className="my-16 border-gray-200" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-gray-700">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-blue-600 mb-2">
            <i class="fa-solid fa-laptop"></i>
          </span>
          <p className="font-medium">Latest and Greatest Tech</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl text-blue-600 mb-2">
            <i class="fa-solid fa-shield-halved"></i>
          </span>
          <p className="font-medium">Guarantee</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl text-blue-600 mb-2">
            <i class="fa-solid fa-truck"></i>
          </span>
          <p className="font-medium">Free Shipping over 1000$</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-blue-600 mb-2">
            <i class="fa-solid fa-alarm-clock"></i>
          </span>
          <p className="font-medium">24/7 Support</p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
