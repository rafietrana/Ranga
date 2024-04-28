import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsArtAndCraft = () => {
    const artAndCraft = useLoaderData();
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
        <><Fade><div className='container m-auto md:my-20 p-5 lg:p-0'>
        <Helmet>
    <title>Ranga-Details</title>
  </Helmet>
        <div className='grid lg:grid-cols-2 gap-2 md:gap-20'>
            <div>
                <img className='w-full h-full rounded-md' src={photoURL} alt="image" />
            </div>
            <div>
                <h1 className='lg:text-[70px] text-[35px]'>{itemName}</h1>
                <p className='text-[30px]'>$ {price}</p>
                <p className='mt-2'>{details}</p>
                <p className='mt-2'><span className='font-bold mr-2'>Sub Category :</span> {subCategory}</p>
                <p className='mt-2'><span className='font-bold mr-2'>Rating :</span> {rating}</p>

                <p className='mt-2'><span className='font-bold mr-2'>Customization :</span> {customization}</p>
                <p className='mt-2'><span className='font-bold mr-2'>Stock Status :</span> {stockStatus}</p>
                <Link to={`/`}>
        <button className="bg-transparent py-2 mt-5 border-black border text-black px-5 rounded-full hover:bg-black hover:text-white mb-2">
          Back To Art And Craft Items
        </button>
      </Link>
            </div>
        </div>
    </div></Fade></>
    );
};

export default DetailsArtAndCraft;