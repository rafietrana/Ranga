import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllArtAndCraftItems = () => {
  const allArtAndCraft = useLoaderData();
  return (
    <div className="bg-[#E5E2DB]">
      <div className="flex justify-center text-center">
        <div className="bg-[#ffffff] p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">All Art and Craft Items</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-7 items-center">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image & Title Name</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Customization</th>
                    <th>Stock Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allArtAndCraft.map((allArtAndCraft) => (
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-full h-12">
                              <img
                                src={allArtAndCraft.photoURL}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {allArtAndCraft.itemName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{allArtAndCraft.subCategory}</td>
                      <td>
                        <span className="badge badge-ghost">
                          $ {allArtAndCraft.price}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-ghost">
                          {allArtAndCraft.rating}
                        </span>
                      </td>

                      <td>
                        {allArtAndCraft.customization === "yes" ? (
                          <span className="badge text-white badge-success">
                            {allArtAndCraft.customization}
                          </span>
                        ) : (
                          <span className="badge text-white badge-error">
                            {allArtAndCraft.customization}
                          </span>
                        )}
                      </td>

                      <td> {allArtAndCraft.stockStatus}</td>
                      <th className="flex gap-2 mt-3">
                        <Link to={`/DetailsArtAndCraft/${allArtAndCraft._id}`}><span className="cursor-pointer badge badge-neutral">
                          Details
                        </span></Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
