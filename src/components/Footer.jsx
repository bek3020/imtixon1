import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#021736] px-6 py-12 md:py-20">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          <div className="flex flex-col md:flex-row gap-10 md:gap-[100px] text-white">
            <div className="flex flex-col gap-2 min-w-[140px]">
              <h3 className="font-medium text-[16px] leading-[100%] tracking-[0%]">
                Company
              </h3>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                About Us
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                Blog
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                Returns
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                Order Status
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px]">
              <h3 className="font-medium text-[16px] leading-[100%] tracking-[0%]">
                Info
              </h3>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                How it works?
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                Our promises
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] cursor-pointer hover:text-[#F45E0C]">
                FAQ
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-[180px]">
              <h3 className="font-medium text-[16px] leading-[100%] tracking-[0%]">
                Contact us
              </h3>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>
                123 Main Street, Anytown, USA
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] flex items-center gap-2">
                <i className="fa-solid fa-phone-volume"></i>
                +1 (555) 123-4567
              </p>
              <p className="font-light text-[16px] leading-[24px] text-[#CBCBCB] flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i>
                TechHeimSupport@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white min-w-[260px]">
            <h3 className="font-medium text-[16px] leading-[100%] tracking-[0%]">
              Sign up for News and updates
            </h3>
            <div className="w-full h-[48px] border border-gray-300 rounded-xl flex items-center justify-between px-4 bg-transparent">
              <div className="flex items-center gap-2 w-full">
                <i className="fa-regular fa-user text-white text-lg"></i>
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="bg-transparent outline-none text-white placeholder-white text-[14px] font-medium w-full"
                />
              </div>
              <i className="fa-solid fa-chevron-right text-white text-lg cursor-pointer"></i>
            </div>

            <div className="flex items-center gap-6 text-white text-xl mt-2">
              <i className="fa-brands fa-facebook cursor-pointer hover:text-[#F45E0C]"></i>
              <i className="fa-brands fa-twitter cursor-pointer hover:text-[#F45E0C]"></i>
              <i className="fa-brands fa-instagram cursor-pointer hover:text-[#F45E0C]"></i>
              <i className="fa-solid fa-circle-play cursor-pointer hover:text-[#F45E0C]"></i>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 text-white text-[12px] font-medium">
          <p className="text-amber-50">© 2023 Tech Heim.</p>
          <div className="flex flex-wrap gap-6">
            <p className="underline cursor-pointer hover:text-[#F45E0C]">
              Cookie Settings
            </p>
            <p className="underline cursor-pointer hover:text-[#F45E0C]">
              Privacy Policy
            </p>
            <p className="underline cursor-pointer hover:text-[#F45E0C]">
              Terms and Conditions
            </p>
            <p className="underline cursor-pointer hover:text-[#F45E0C]">
              Imprint
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
