import React, { useEffect, useState } from 'react';
import Category from "./Category";

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetch("https://server-site-wheat-three.vercel.app/artAndCraft")
        .then(res => res.json())
        .then(data => {
            // Filter unique categories
            const uniqueCategories = data.filter((subCategory, index, self) =>
                index === self.findIndex((t) => (
                    t.subCategory === subCategory.subCategory
                ))
            );
            setCategories(uniqueCategories);
        })
    }, []);

    return (
        <div className="flex justify-center text-center">
            <div className="bg-[#ffffff] p-5 md:p-10 mt-[50px] mb-[50px] w-full shadow">
                <h1 className="text-[30px] font-mono">Categories</h1>
                <p className="max-w-[300px] m-auto mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    {
                    categories.map((category) => (
                        <Category key={category.id} category={category} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
