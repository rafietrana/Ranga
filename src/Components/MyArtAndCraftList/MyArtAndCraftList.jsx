import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyArtAndCraftList = () => {
  const allArtAndCraft = useLoaderData();
  const { user } = useContext(AuthContext);
  const currentUserEmail = user ? user.email : null;
  const [sort, setSort] = useState("");
  
  const filteredArtAndCraft = currentUserEmail
    ? allArtAndCraft.filter((artAndCraft) => artAndCraft.email === currentUserEmail)
    : [];

  const handleSort = (customization) => {
    setSort(customization);
  };

  const sortedItems = sort
    ? filteredArtAndCraft.filter(
        (artAndCraft) => artAndCraft.customization === sort
      )
    : filteredArtAndCraft;

  const uniqueCustomize = filteredArtAndCraft.filter((customize, index, self) =>
    index === self.findIndex((t) => t.customization === customize.customization)
  );

  return (
    <div className="bg-[#E5E2DB]">
      <Helmet>
        <title>Ranga-My Art & Craft List</title>
      </Helmet>
      <div className="flex justify-center text-center">
        <div className="bg-[#ffffff] rounded-md p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">My Art and Craft List</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="dropdown dropdown-hover py-5">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-neutral text-white hover:bg-neutral"
            >
              Sort Customization
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[160px] border"
            >
              {uniqueCustomize.map((item, index) => (
                <li key={index}>
                  <a onClick={() => handleSort(item.customization)}>
                    {item.customization}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {sortedItems.map((item) => (
              <SingleItem key={item.id} artAndCraft={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
