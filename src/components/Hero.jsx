import { useEffect, useRef, useState } from "react";
import ProductCards from "./ProductCards";
import {
  BiArrowToLeft,
  BiChevronLeft,
  BiChevronRight,
  BiMenu,
} from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Hero = () => {
  const [primeHover, setPrimeHover] = useState(false);

  const imgContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);
  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      if (imgContainerRef.current) {
        imgContainerRef.current.scrollLeft += 400;
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    startAutoScroll();
  };
  const scrollLeft = () => {
    if (imgContainerRef.current) {
      imgContainerRef.current.scrollLeft -= 400;
      resetAutoScroll();
    }
  };

  const scrollRight = () => {
    if (imgContainerRef.current) {
      imgContainerRef.current.scrollLeft += 400;
      resetAutoScroll();
    }
  };

  const hoverPrime = () => {
    setPrimeHover(!primeHover);
  };
  const images = [
    { id:1, url: "src/assets/back.jpg" },
    { id:2, url: "src/assets/back1.jpg" },
    { id:3, url: "src/assets/back2.jpg" },
    { id:4, url: "src/assets/back3.png" },
    { id:5, url: "src/assets/back4.jpg" },
  ];

  return (
    <div>
      <div className="w-full h-10 items-center flex bg-[#232F3F] cursor-pointer">
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <BiMenu className="text-[26px]" />
          <span>All</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Fresh</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>MX Player</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Sell</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Best Sellers</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Today's Deals</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Mobiles</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Electronics</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Customer Service</span>
        </div>
        <div
          onMouseEnter={hoverPrime}
          onMouseLeave={() => {
            setPrimeHover(false);
          }}
          className="text-white flex items-center hover:border rounded-sm p-2"
        >
          <span>Prime</span>
          <span>
            <IoMdArrowDropdown />
          </span>
          {primeHover && (
            <div className=" absolute top-[14%] p-4 border rounded-md  cursor-default   bg-white">
              <img
                src="./src/assets/prime.jpg"
                className="max-w-[340px] cursor-pointer max-h-[320px]"
                alt=""
              />
            </div>
          )}
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Home & Kitchen</span>
        </div>
        <div className="text-white flex items-center hover:border rounded-sm p-2">
          <span>Amazon Pay</span>
        </div>
      </div>

      {/* main */}

      <main className="relative ">
        <div
          onClick={scrollLeft}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="absolute text-4xl   h-full flex items-center z-10 cursor-pointer prev "
        >
          <BiChevronLeft />
        </div>
        <div
          onClick={scrollRight}
          className="next  absolute text-4xl  h-full flex items-center z-10 cursor-pointer right-0 "
        >
          <BiChevronRight />
        </div>
        <div
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          ref={imgContainerRef}
          className=" flex w-screen  h-[400px] relative snap-mandatory snap-x -z-10 overflow-x-scroll  scroll-smooth no-scroll"
        >
          {images.map((items) => (
            <img
              key={items.id}
              className="object-cover img w-full h-full snap-center "
              src={items.url}
            />
          ))}
        </div>
      </main>

      <ProductCards />
    </div>
  );
};

export default Hero;
