import { useState } from "react";
import { useCallback } from "react";
import { BiMap, BiSearch, BiCartAlt, BiCart } from "react-icons/bi";

import img from "../assets/image.png";
import { IoMdArrowDropdown } from "react-icons/io";

const lang = [
  { label: "ENGLISH - EN", id: "english" },
  { label: "हिन्दी - HI", id: "hindi" },
  { label: "தமிழ் - TA", id: "tamil" },
  { label: "తెలుగు - TE", id: "telugu" },
  { label: "ಕನ್ನಡ - KN", id: "kannada" },
  { label: "മലയാളം - ML", id: "malayalam" },
  { label: "বাংলা - BN", id: "bengali" },
  { label: "मराठी - MR", id: "marathi" },
];

const opt = [
  { selected: true, value: "search-alias=aps", label: "All Categories" },
  { value: "search-alias=alexa-skills", label: "Alexa Skills" },
  { value: "search-alias=amazon-devices", label: "Amazon Devices" },
  { value: "search-alias=fashion", label: "Amazon Fashion" },
  { value: "search-alias=nowstore", label: "Amazon Fresh" },
  { value: "search-alias=amazon-pharmacy", label: "Amazon Pharmacy" },
  { value: "search-alias=appliances", label: "Appliances" },
  { value: "search-alias=mobile-apps", label: "Apps & Games" },
  { value: "search-alias=audible", label: "Audible Audiobooks" },
  { value: "search-alias=baby", label: "Baby" },
  { value: "search-alias=beauty", label: "Beauty" },
  { value: "search-alias=stripbooks", label: "Books" },
  { value: "search-alias=automotive", label: "Car & Motorbike" },
  { value: "search-alias=apparel", label: "Clothing & Accessories" },
  { value: "search-alias=collectibles", label: "Collectibles" },
  { value: "search-alias=computers", label: "Computers & Accessories" },
  { value: "search-alias=todays-deals", label: "Deals" },
  { value: "search-alias=electronics", label: "Electronics" },
  { value: "search-alias=furniture", label: "Furniture" },
  { value: "search-alias=lawngarden", label: "Garden & Outdoors" },
  { value: "search-alias=gift-cards", label: "Gift Cards" },
  { value: "search-alias=grocery", label: "Grocery & Gourmet Foods" },
  { value: "search-alias=hpc", label: "Health & Personal Care" },
  { value: "search-alias=kitchen", label: "Home & Kitchen" },
  { value: "search-alias=industrial", label: "Industrial & Scientific" },
  { value: "search-alias=jewelry", label: "Jewellery" },
  { value: "search-alias=digital-text", label: "Kindle Store" },
  { value: "search-alias=luggage", label: "Luggage & Bags" },
  { value: "search-alias=luxury-beauty", label: "Luxury Beauty" },
  { value: "search-alias=dvd", label: "Movies & TV Shows" },
  { value: "search-alias=digital-music", label: "MP3 Music" },
  { value: "search-alias=popular", label: "Music" },
  { value: "search-alias=mi", label: "Musical Instruments" },
  { value: "search-alias=office-products", label: "Office Products" },
  { value: "search-alias=pets", label: "Pet Supplies" },
  { value: "search-alias=instant-video", label: "Prime Video" },
  { value: "search-alias=shoes", label: "Shoes & Handbags" },
  { value: "search-alias=software", label: "Software" },
  { value: "search-alias=sporting", label: "Sports, Fitness & Outdoors" },
  { value: "search-alias=specialty-aps-sns", label: "Subscribe & Save" },
  { value: "search-alias=home-improvement", label: "Tools & Home Improvement" },
  { value: "search-alias=toys", label: "Toys & Games" },
  { value: "search-alias=under-ten-dollars", label: "Under ₹500" },
  { value: "search-alias=videogames", label: "Video Games" },
  { value: "search-alias=watches", label: "Watches" },
];

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountHover = () => {
    setAccountMenuOpen(!accountMenuOpen);
  };
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.id);
  };

  const hoverOn = () => {
    setLangOpen(!langOpen);
  };
  return (
    <div
      id="nav"
      className="w-full py-1 bg-[#131921] h-[60px] items-center flex"
    >
      {/* Logo */}
      <div
        id="nav-logo"
        className="hover:cursor-pointer flex p-3 font-semibold border-collapse hover:border rounded-sm m-[4px] "
      >
        <svg
          className="w-[100px] h-auto invert mix-blend-difference"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.658000000000003 -1.875 384.24600000000004 119.917"
        >
          <path d="M81.633 27.542V64.65a2.268 2.268 0 0 1-2.268 2.268H67.651a2.269 2.269 0 0 1-2.268-2.268V4.292a2.268 2.268 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S84.634.667 96.134.667c0 0 11.375-1.375 16 11.25 0 0 3.875-11.25 15.625-11.25 0 0 17.474-1.039 17.474 17.042l.133 9.958v37.108a2.268 2.268 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268l-.107-40.483c.333-9.167-7.083-8.5-7.083-8.5-9.333.167-8.435 11.875-8.435 11.875v37.108a2.268 2.268 0 0 1-2.268 2.268H99.508a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.649-9.5c.001 0-8.249-1.083-7.958 11.834zM383.588 27.431v37.107a2.269 2.269 0 0 1-2.268 2.268l-12.183.236a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.648-9.5c0 0-7.959-.392-7.959 14.503v34.438a2.269 2.269 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268V4.292a2.269 2.269 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S354.262.667 365.762.667c0 0 12.319-1.869 16.468 11.015.001-.001 1.358 2.657 1.358 15.749zM299.008.417c-14.98 0-27.125 12.625-27.125 33.875 0 18.709 9.375 33.875 27.125 33.875 16.75 0 27.125-15.166 27.125-33.875 0-20.875-12.144-33.875-27.125-33.875zm9.455 34.625c0 8-1 12.25-1 12.25-1.423 8.457-7.562 8.469-8.467 8.424-.977.039-7.168-.049-8.449-8.424 0 0-1-4.25-1-12.25v-1.333c0-8 1-12.25 1-12.25 1.281-8.375 7.473-8.463 8.449-8.425.905-.045 7.044-.034 8.467 8.425 0 0 1 4.25 1 12.25zM265.084 12.708v-8.66a2.269 2.269 0 0 0-2.268-2.268h-38.72a2.268 2.268 0 0 0-2.268 2.268v8.593a2.269 2.269 0 0 0 2.268 2.268h20.197l-23.906 34.68s-.942 1.406-.911 2.959v10.549s-.156 3.617 3.946 1.518c0 0 7.286-4.402 19.503-4.402 0 0 12.065-.15 20.109 4.781 0 0 3.339 1.518 3.339-1.82v-9.182s.303-2.43-2.884-3.947c0 0-9.258-5.084-21.399-4.25zM56.342 56.124l-3.667-5.582c-1.167-2.084-1.083-4.418-1.083-4.418V20.375C52.092-1.875 27.425.042 27.425.042 5.497.042 2.258 17.107 2.258 17.107c-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.14.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.083 3.668 5.917 7.166 5.917 7.166 1.918 2.08 3.917.334 3.917.334l8.667-7.416c1.916-1.418.5-3.168.5-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.437-9.583v3.305c.415 14.438-6.093 17.245-10.726 17.245zM212.008 56.124l-3.666-5.582c-1.167-2.084-1.084-4.418-1.084-4.418V20.375c.5-22.25-24.167-20.333-24.167-20.333-21.928 0-25.167 17.065-25.167 17.065-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.139.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.084 3.668 5.916 7.166 5.916 7.166 1.918 2.08 3.918.334 3.918.334l8.666-7.416c1.917-1.418.501-3.168.501-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.436-9.583v3.305c.416 14.438-6.091 17.245-10.725 17.245z" />
          <g fill="#f3971b">
            <path d="M241.504 104.862s-.98 1.705.224 2.086c0 0 1.36.531 3.056-1.043 0 0 12.369-10.805 12.667-30.477 0 0 .091-2.457-.895-3.129 0 0-3.875-3.428-17.809-2.385 0 0-12.146.82-18.777 6.707 0 0-.596.521-.596 1.191 0 0-.143 1.447 3.502.82 0 0 12.145-1.715 19.373-.82 0 0 3.727.447 4.77 1.715 0 0 1.714 1.416.819 6.109 0 .002-2.46 11.924-6.334 19.226z" />
            <path d="M239.055 85.989s1.814 2.35-1.113 4.377c0 0-31.267 25.01-83.767 25.01 0 0-54.042 2.666-99.167-38.334 0 0-1.582-1.389-.6-2.68 0 0 .878-1.188 3.151.104 0 0 42.449 26.451 98.199 26.451 0 0 38.75 1.5 78.5-15.5 0 0 3.167-1.641 4.797.572z" />
          </g>
        </svg>
        <span className="text-white  ">.in</span>
      </div>
      {/* Location */}
      <div
        id="location-box"
        className="hover:cursor-pointer hover:border w-[220px] flex h-full rounded-sm p-2"
      >
        <span className="items-end pb-2  flex  justify-center">
          <BiMap className="text-white text-xl " />
        </span>
        <div className="flex flex-col ml-1">
          <span className="text-[#cccccc] text-[12px]"> Delivering to</span>
          <span className="text-white text-sm font-semibold">
            Update Location
          </span>
        </div>
      </div>
      {/* Search */}
      <div id="search" className="flex w-[65%] ">
        <select
          name="options"
          id="options"
          className="md:w-[124px] sm:w-10 h-auto ml-1 rounded-l border-none focus:outline-[#febd69]  focus:border-2"
        >
          <option value="">All Categories</option>
          <option value="">Alexa Skills</option>
          <option value="">Amazon Devices</option>
          <option value="">Luggages & Bags</option>
          <option value="">Jewellery</option>
          <option value="">Furniture</option>
          <option value="">Electronics</option>
          <option value="">Kindle Store</option>
          <option value="">Amazon Pharmacy</option>
          <option value="">Deals</option>
          <option value="">Appliances</option>
          <option value="">Beauty</option>
          <option value="">Grocery</option>
          <option value="">Games</option>
          <option value="">Clothing</option>
          <option value="">Health & Personal Care</option>
        </select>
        <input
          type="text"
          formAction="search"
          placeholder="Search Amazon.in"
          className="pl-3 px-3 py-2 w-[70%]"
        />
        <span className="text-black w-10 h-10 bg-[#febd69] rounded-r flex items-center text-2xl justify-center cursor-pointer focus:border-[#febd69]">
          <BiSearch className="w-6 h-6 " />
        </span>
      </div>
      {/* Country/Region Language */}

      <div
        id="region country "
        onMouseEnter={hoverOn}
        className=" flex hover:border m-1 rounded-sm"
      >
        <div className="flex  m-2 gap-1 items-end justify-center ">
          <img src={img} className="w-6 h-6" />
          <span className="text-white">EN</span>
          <IoMdArrowDropdown className="text-gray-400 min-w-10  inline-flex text-xl    " />
        </div>
        {langOpen && (
          <div
            onMouseEnter={() => {
              setLangOpen(true);
            }}
            onMouseLeave={() => {
              setLangOpen(false);
            }}
            className="fixed top-[8%] border cursor-pointer rounded-sm p-4  accent-[#febd69] ring-[#febd69]   "
          >
            <label htmlFor="lang" radioGroup="lang">
              {lang.map((items) => (
                <label
                  htmlFor={items.id}
                  key={items.id}
                  className="flex cursor-pointer gap-2 py-1 px-2 hover:text-amber-600 hover:underline "
                >
                  <input
                    type="radio"
                    id={items.id}
                    value={items.label}
                    checked={selectedLanguage === items.id}
                    className={`flex ${
                      items.id === selectedLanguage ? "ring-[#ffd814]" : ""
                    }`}
                    name="lang"
                    onChange={handleLanguageChange}
                  />
                  {items.label}
                </label>
              ))}
              <div className="text-blue-400 cursor-pointer px-7 py-2 hover:underline hover:decoration-amber-600 text-[12px]">
                Learn more
              </div>
              <hr />
              <div className="flex text-[12px] pl-2 gap-1 justify-center items-center">
                <img src={img} className="w-4 h-4 " />
                <span>You are shopping on Amazon.in</span>
              </div>
              <span className="text-blue-400 px-7 text-[12px] hover:decoration-amber-600 hover:underline  cursor-pointer">
                Change Country/region
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Profile */}
      <div
        onClick={accountHover}
        className="flex flex-col text-white cursor-pointer hover:border items-center justify-center "
      >
        <span className="text-[12px]">Hello, sign in</span>
        <span className="text-[14px] font-semibold">
          Account & Lists{" "}
          <IoMdArrowDropdown className="text-gray-400 inline-flex  text-xl" />
        </span>
        {accountMenuOpen && (
          <div className=" h-[410px] rounded-sm   w-[500px] border pl-4 fixed top-[8%]  ">
            <div className="w-full flex flex-col  items-center h-[18%] justify-center">
              <button className="bg-[#ffd814] text-black px-16 py-[6px] rounded-xl focus:outline-sky-900 ">
                Sign in
              </button>
              <div className="m-1 text-gray-600 text-[12px] ">
                New customer?{" "}
                <span className="text-blue-600 cursor-pointer text-[12px] underline hover:decoration-amber-600 ">
                  Start here
                </span>
              </div>
            </div>
            <hr />
            <div className="flex h-[95%] ">
              <div className="mt-2 border-r ml-1 h-[70%] w-[50%]">
                <span className="font-semibold flex flex-col text-black">
                  Your Lists
                </span>
                <span className="text-gray-600 hover:underline hover:text-amber-600 hover:decoration-amber-600 flex text-sm">
                  Create a Wish List
                </span>
                <span className="text-gray-600 hover:underline hover:text-amber-600 hover:decoration-amber-600 flex text-sm">
                  Wish from Any Website
                </span>
                <span className="text-gray-600 hover:underline hover:text-amber-600 hover:decoration-amber-600 flex text-sm">
                  Baby Wishlist
                </span>
                <span className="text-gray-600 hover:underline hover:text-amber-600 hover:decoration-amber-600 flex text-sm">
                  Discover Your Style
                </span>
                <span className="text-gray-600 hover:underline hover:text-amber-600 hover:decoration-amber-600 flex text-sm">
                  Explore Showroom
                </span>
              </div>
              <div className="mt-2 ml-2 mr-2 pl-4 h-[70%] w-[50%] ">
                <span className="font-semibold flex flex-col text-black">
                  Your Account
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Account
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Orders
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Wish List
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Recommendations
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Prime Membership
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Prime Video
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Subscribe & Save Items
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Memberships & Subscriptions
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Your Seller Account
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Manage Your Content and Devices
                </span>
                <span className="text-gray-600 flex text-sm hover:underline hover:text-amber-600 hover:decoration-amber-600 ">
                  Register for a free Business Account
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border rounded-sm">
        <span className="text-[12px] inline-block text-white">
          Returns<span className="font-semibold text-sm px-1"> & Orders</span>
        </span>
      </div>
      <div>
        <span>
          <BiCart />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
