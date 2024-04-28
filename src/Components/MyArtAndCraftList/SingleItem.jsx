import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleItem = ({ artAndCraft }) => {
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
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artAndCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = arts.filter((cof) => cof._id !== _id);
              setArts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-[#E5E2DB] card-compact rounded-md shadow-xl">
      <figure>
        <img
          className="h-[250px] w-full object-cover"
          src={photoURL}
          alt="image"
        />
      </figure>
      <div className="p-5 text-left">
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
        <p className="text-[16px]"><span className="font-semibold">Customization : </span>
          {customization === "yes" ? (
            <span className="badge text-white badge-success">
              {customization}
            </span>
          ) : (
            <span className="badge text-white badge-error">
              {customization}
            </span>
          )}
        </p>
        <p className="text-[16px]"><span className="font-semibold">Stock Status :</span> {stockStatus}</p>
        <div className="flex justify-start gap-2 mt-2">
          <Link to={`/updateArtAndCraftSng/${_id}`}>
            <button className="bg-transparent py-2 border-black border text-black px-5 rounded-full mt-1 hover:bg-black hover:text-white mb-2">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-transparent py-2 border-black border text-black px-5 rounded-full mt-1 hover:bg-black hover:text-white mb-2"
          >
            Detete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
