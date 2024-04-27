import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
const Home = () => {
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
    </>
  );
};

export default Home;
