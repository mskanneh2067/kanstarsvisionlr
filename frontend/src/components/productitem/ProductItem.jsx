import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ id, name, image, price }) => {
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">${price}</p>
    </Link>
  );
};

export default ProductItem;
