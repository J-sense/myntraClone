import React from "react";
import { useSelector } from "react-redux";

const BagCard = () => {
  const bagItemsIdsIds = useSelector(store => store.bag)
  const allItems = useSelector(store => store.items)
  console.log(allItems)
  const CONVININCE_FEE = 99;
  let totalItem = bagItemsIdsIds.length;
  let totalMrp = 0;
  let discount =0;
  const findItems = allItems[0].filter(item =>{
    const exactIem = bagItemsIdsIds.indexOf(item.id)
    return exactIem >= 0
  })
  console.log(findItems)
  findItems.forEach((bagItem)=>{
    totalMrp += bagItem.original_price;
    discount += bagItem.original_price - bagItem.current_price;
  })

  let finalPayment = totalMrp - discount + CONVININCE_FEE;
  return (
    <div>
      <div className="p-5 ">
        <p className="font-semibold text-base text-zinc-600 divide-y ">
          PRICE DETAILS [{totalItem}]
        </p>
        <div className="mt-4 ">
          <div className="flex justify-between font-semibold text-lg  text-zinc-600">
            <p className="">Total MRP</p>
            <span className="text-sm font-bold">{totalMrp}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg text-zinc-600">
            <p className="">Discount on MRP</p>
            <span className="text-sm font-bold">#{discount}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg text-zinc-600">
            <p className="">Connections Fee</p>
            <span className="text-sm font-bold">{CONVININCE_FEE}</span>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="mt-3">
          <div className="flex justify-between font-semibold text-lg items-center  text-zinc-600">
            <p className="">Total Amount</p>
            <span className="text-sm font-bold">${finalPayment}</span>
          </div>
          <div>
            <button className="w-full bg-pink-500 py-2 mt-3 rounded text-white">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
