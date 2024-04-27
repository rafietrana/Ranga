import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import { useLoaderData } from "react-router-dom";
import SingleItem from "../MyArtAndCraftList/SingleItem";
import HomeSingle from "./HomeSingle";
const Home = () => {
  const allArtAndCraft = useLoaderData();
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{ delay: 1000 }}
        speed={1000}
      >
        <SwiperSlide>
        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/v4dmCKp/New-Project-11.jpg")'}}>
          <div className="flex justify-center py-[300px]">
            <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
              <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sapiente.</h1>
              <p className="text-[18px] mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae.</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/SPfDmwQ/New-Project-10.jpg")'}}>
          <div className="flex justify-center py-[300px]">
            <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
              <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sapiente.</h1>
              <p className="text-[18px] mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae.</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/b7ycnp1/New-Project-9.jpg")'}}>
          <div className="flex justify-center py-[300px]">
            <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
              <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sapiente.</h1>
              <p className="text-[18px] mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae.</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-[#E5E2DB]">
      <div className="flex justify-center text-center">
        <div className="bg-[#ffffff] p-10 my-[100px] max-w-[9000px] shadow">
          <h1 className="text-[30px] font-mono">Art and Craft</h1>
          <p className="max-w-[300px] m-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {allArtAndCraft.map((artAndCraft) => (
              <HomeSingle key={artAndCraft.id} artAndCraft={artAndCraft} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
