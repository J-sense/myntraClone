import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "./store/Bag";
import '../App.css'

const SingleItem = ({singleIten,handleAddTocart}) => {
    const dispatch = useDispatch()
    const bagitems = useSelector((store) => store.bag);
    const bagElemnt = bagitems.indexOf(singleIten.id) >= 0;
    const handleRemove=()=>{
        dispatch(bagActions.removeTobag(singleIten.id))
    }
  return (
    <div className="card w-72 md:w-72 h-full bg-base-100 shadow-sm md:shadow-xl gap-6 ">
      <figure>
        <img
          src={singleIten.image}
          alt="Shoes"
          className=" h-[280px] md:h-[300px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div>
          {bagElemnt ? (
            <button className="btn btn-outline btn-warning w-full" onClick={handleRemove}>Remove</button>
          ) : (
            <button
              className="btn btn-info w-full"
              onClick={() => handleAddTocart(singleIten.id)}
            >
              {" "}
              Add to Cart
            </button>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default SingleItem;
