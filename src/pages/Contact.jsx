import React from "react";

const ContactSimple = () => {
  return (
    // Asosiy konteyner, markazda
    <main className="max-w-[1224px] mx-auto px-4 py-12 md:py-16">
      {/* 1. Sarlavha Bloki */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Aloqa
        </h1>
        <p className="text-gray-500">
          Bizga xabar yuboring yoki quyidagi ma'lumotlar orqali bog'laning.
        </p>
      </header>

      {/* 2. Kontent Qismi: Shakl chapda, Ma'lumotlar o'ngda (Oddiy 2 ustun) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Chap ustun: Aloqa Shakli */}
        <div className="md:order-1 order-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Xabar Yuborish
          </h2>

          <form className="space-y-4">
            {/* Ism */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ism
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-gray-500 focus:ring-0"
                placeholder="To'liq ismingiz"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-gray-500 focus:ring-0"
                placeholder="email@manzil.com"
              />
            </div>

            {/* Xabar */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Xabar
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-gray-500 focus:ring-0"
                placeholder="Savol yoki takliflaringizni yozing..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition duration-150"
            >
              Yuborish
            </button>
          </form>
        </div>

        <div className="md:order-2 order-1">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Ma'lumotlar
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center">
              <span className="text-gray-800 mr-3 text-lg">
                <i class="fa-solid fa-message"></i>
              </span>
              <a href="mailto:info@example.uz" className="hover:text-gray-800">
                info@example.uz
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800 mr-3 text-lg">
                <i class="fa-solid fa-mobile"></i>
              </span>
              <a href="tel:+998901234567" className="hover:text-gray-800">
                +998 90 123 45 67
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800 mr-3 text-lg">
                <i class="fa-solid fa-location-arrow"></i>
              </span>
              <span>Toshkent sh., Markaziy ko'cha 1</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactSimple;
