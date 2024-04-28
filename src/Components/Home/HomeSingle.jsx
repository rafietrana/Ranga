import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HomeSingle = ({ artAndCraft }) => {
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
  } = artAndCraft;
  return (
    <div className=" rounded-md bg-[#E5E2DB]  shadow-xl md:flex items-center ">
      <div className="w-full">
        <img
          className="h-[250px] rounded md:rounded-l w-full object-cover"
          src={photoURL}
          alt="image"
        />
      </div>
      <div className="w-full p-5 text-left">
        <h2 className="card-title">{itemName}</h2>
        <div className="flex gap-3">
          <p className="text-[20px] flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            {price}
          </p>
          <p className="text-[20px] flex items-center gap-1">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </span>
            {rating}
          </p>
        </div>
        <div className="flex justify-start gap-2 mt-2">
          <Link to={`/DetailsArtAndCraft/${_id}`}>
            <button className="bg-transparent py-2 border-black border text-black px-5 rounded-full mt-1 hover:bg-black hover:text-white mb-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSingle;
