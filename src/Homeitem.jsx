import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "./components/store/Bag";
import SingleItem from "./components/SingleItem";

// import { ToastContainer, toast } from "react-toastify";
const Homeitem = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();

  // console.log(singleIten.id,bagElemnt)

  const handleAddTocart = (id) => {
    dispatch(bagActions.addtoBag(id));
  };
  return (
    <div className="grid lg:grid-cols-4 w-[90%] mx-auto items-center  justify-center gap-8 md:shadow md:px-0 mt-20">
      {item.map((singleIten) => <SingleItem singleIten={singleIten} handleAddTocart={handleAddTocart}/>)
       }
    </div>
  );
};

export default Homeitem;
