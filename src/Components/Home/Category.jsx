import React from "react";
import { Link } from "react-router-dom";
const Category = ({ category }) => {
  const {
    _id,
    name,
    email,
    itemName,
    subCategory,
    rating,
    price,
    customization,
    stockStatus,
    processingTime,
    photoURL,
    details,
  } = category;
  return (
    <Link to={`${subCategory}`}>
    <div className="cursor-pointer border rounded-md">
      <div className="p-5 flex justify-center bg-cover rounded-md" style={{ backgroundImage: `url('${photoURL}')`}}>
        <h2 className="card-title my-10 text-[14px] border bg-[#FFFFFF] px-[10px] py-2 rounded-md">{subCategory}</h2>
      </div>
    </div>
    </Link>
  );
};

export default Category;
