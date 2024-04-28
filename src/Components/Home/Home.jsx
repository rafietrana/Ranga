import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import HomeSingle from "./HomeSingle";
import CategoryPage from "./CategoryPage";
import { Helmet } from "react-helmet";
import Faq from "./Faq";
const Home = () => {
  const allArtAndCraft = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Ranga-Home</title>
      </Helmet>
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
          <div
            className="bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/v4dmCKp/New-Project-11.jpg")',
            }}
          >
            <div className="flex justify-center py-[300px]">
              <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
                <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere, sapiente.
                </h1>
                <p className="text-[18px] mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iste, repudiandae.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/SPfDmwQ/New-Project-10.jpg")',
            }}
          >
            <div className="flex justify-center py-[300px]">
              <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
                <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere, sapiente.
                </h1>
                <p className="text-[18px] mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iste, repudiandae.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/b7ycnp1/New-Project-9.jpg")',
            }}
          >
            <div className="flex justify-center py-[300px]">
              <div className="bg-[#ffffff] inline-block py-[50px] px-[95px] text-center">
                <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere, sapiente.
                </h1>
                <p className="text-[18px] mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iste, repudiandae.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-[#F6F3EE]">
        <div className="text-center pt-14">
          <div className="bg-[#ffffff] p-10 max-w-[9000px] shadow rounded-2xl">
            <div className="mt-10 grid grid-cols-2 gap-5 items-center">
              <div className="flex justify-center">
                <img className="max-w-[600px] object-cover rounded-md" src="https://i.ibb.co/JrsJ6Qt/craft-hobbies-landing-art-supplies.jpg" alt="" />
              </div>
              <div className="flex justify-start">
                <div className="text-left max-w-[700px]">
                <h1 className="font-semibold text-[40px] font-mono">Who Are We ?</h1>
                <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore incidunt praesentium quo. Quasi sint ab, perferendis nesciunt, delectus voluptatum asperiores nostrum cumque facere adipisci nemo tempore vitae maxime! Assumenda illo necessitatibus, explicabo quis praesentium deserunt animi sunt autem magni, minima tempore harum recusandae inventore magnam nam corrupti. Provident, quam nesciunt?
                </p>
                <p className="mt-5 font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore incidunt praesentium quo. Quasi sint ab, perferendis nesciunt, delectus voluptatum asperiores
                </p>
                <button className="bg-transparent py-2 border-black border text-black px-5 rounded-full hover:bg-black hover:text-white mb-2 mt-5">
              See More
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F3EE]">
        <CategoryPage></CategoryPage>
      </div>
      <div className="bg-[#F6F3EE]">
        <div className="flex justify-center text-center">
          <div className="bg-[#ffffff] p-10 max-w-[9000px] shadow rounded-2xl mb-10">
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
      <div className="bg-[#F6F3EE]">
        <div className="text-center">
          <div className="bg-[#ffffff] p-10 max-w-[9000px] rounded-none px-40 mb-10">
          <h1 className="text-[30px] font-mono">FAQ</h1>
            <p className="max-w-[300px] m-auto mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="py-5">
              <Faq></Faq>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
