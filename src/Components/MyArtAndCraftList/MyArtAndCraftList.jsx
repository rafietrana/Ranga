import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";
import { AuthContext } from "../../Providers/AuthProvider";

const MyArtAndCraftList = () => {
  const allArtAndCraft = useLoaderData();
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email; 
  const filteredArtAndCraft = allArtAndCraft.filter(
    (artAndCraft) => artAndCraft.email === currentUserEmail
  );

  return (
    <div className="bg-[#E5E2DB]">
      <div className="flex justify-center text-center">
        <div className="bg-[#ffffff] p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">My Art and Craft List</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {filteredArtAndCraft.map((artAndCraft) => (
              <SingleItem key={artAndCraft.id} artAndCraft={artAndCraft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
