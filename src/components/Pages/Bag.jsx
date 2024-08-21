import React from "react";
import Bagitem from "../Bag/Bagitem";
import BagCard from "../Bag/BagCard";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector(store =>store.items)
  console.log(items)
  const bagItems = useSelector(store =>store.bag)
  const findItems = items[0].filter(item => {
    
    const exitme = bagItems.indexOf(item.id)
    return exitme >= 0;
    
  })
  console.log(findItems)
  // console.log(items)
  return (
    <div className="w-full md:w-[85%] md:mx-auto my-10 relative">
      <div className="md:flex">
        <div className="w-full md:w-[60%]  overflow-hidden">
          {
            findItems.map(item =><Bagitem item={item}/>)
          }
        
        </div>
        <div className="md:w-[30%] md:fixed  md:right-10">
          <BagCard />
        </div>
      </div>
    </div>
  );
};

export default Bag;
