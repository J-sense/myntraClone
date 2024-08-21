import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/Bag";
const Bagitem = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch()
  const handleremoveFromBag=()=>{
    dispatch(bagActions.removeTobag(item.id))
    
  }
  return (
    <div>
      <div className="hero bg-white  relative ">
        <div className="hero-content flex-col lg:flex-row gap-5 border border-zinc-200 shadow hover:shadow-md hover:shadow-zinc-800 md:px-28 duration-200 transform">
          <img
            src={item.image}
            className="  object-cover w-1/3 h-2/3 shadow-2xl"
          />
          <div>
            <h1 className="text-base font-semibold leading-3 tracking-tight">
              Title ekhn nei
            </h1>
            <p className="text-sm font-medium">New-Road building-205</p>
            <div className="mb-5">
              <p className="text-sm font-bold">
                Rs.808 <span className="text-base">(40% OFF)</span>
              </p>
              <span></span>
            </div>
            <p className="text-sm">
              <span className="font-semibold">14 days</span> return available
            </p>
            <p>
              Deliver by<span className="text-green-400">10 Oct 2023</span>
            </p>
          </div>
        </div>
        <div className="absolute top-2 right-14 text-3xl hover:text-red-600 duration-200" onClick={handleremoveFromBag}>
          <HiMiniXMark />
        </div>
      </div>
    </div>
  );
};

export default Bagitem;
