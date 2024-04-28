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
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  const allArtAndCraft = useLoaderData();
  const [textone] = useTypewriter({
    words: [
      "A Serene Lakeside Watercolor Painting Capturing Nature's Peaceful Beauty and Calm Atmosphere",
    ],
    loop: 0,
  });
  const [texttwo] = useTypewriter({
    words: [
      "Sketching the Tranquil Beauty of Nature's Serene Elegance with Shadows, Light, Color, and Graceful Lines",
    ],
    loop: 0,
  });
  const [textthree] = useTypewriter({
    words: [
      "A Vivid Oil Painting Immortalizing Nature's Serene Beauty and Captivating Stillness with Brushstrokes of Peace.",
    ],
    loop: 0,
  });
  return (
    <div className="z-0">
      <Fade>
        <Helmet>
          <title>Ranga-Home</title>
        </Helmet>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper z-0"
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
              <div className="flex justify-center py-[200px] md:py-[300px]">
                <div className="bg-[#ffffff] inline-block py-[50px] md:px-[95px] text-center px-5">
                  <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                    {textone}
                  </h1>
                  <p className="text-[18px] mt-2">
                    Tranquil Waters is a captivating watercolor painting that
                    depicts a serene lakeside scene, with lush greenery
                    reflected in the calm, clear blue water, creating a sense of
                    peace and tranquility.
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
              <div className="flex justify-center py-[200px] md:py-[300px]">
                <div className="bg-[#ffffff] inline-block py-[50px] md:px-[95px] text-center px-5">
                  <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                    {texttwo}
                  </h1>
                  <p className="text-[18px] mt-2">
                    Whispers in Charcoal is a stunning sketch capturing nature's
                    serene elegance. With delicate shadows and light, it depicts
                    the tranquil beauty of the natural world, inviting viewers
                    into a peaceful retreat.
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
              <div className="flex justify-center py-[200px] md:py-[300px]">
                <div className="bg-[#ffffff] inline-block py-[50px] md:px-[95px] text-center px-5">
                  <h1 className="text-[22px] font-semibold border-b-2 border-black pb-3">
                    {textthree}
                  </h1>
                  <p className="text-[18px] mt-2">
                    Eternal Tranquility is an exquisite oil painting that
                    captures the serene beauty of nature with vibrant colors and
                    captivating stillness, inviting viewers into a peaceful
                    oasis of tranquility and calm.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="bg-[#F6F3EE] px-2">
          <div className="text-center pt-14">
            <div className="bg-[#ffffff] p-5  md:p-10 max-w-[9000px] shadow rounded-2xl">
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 items-center">
                <div className="w-full">
                  <img
                    className="w-full object-cover rounded-md"
                    src="https://i.ibb.co/JrsJ6Qt/craft-hobbies-landing-art-supplies.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-start">
                  <div className="text-left">
                    <h1 className="font-semibold text-[30px] md:text-[40px] font-mono">
                      Who Are We ?
                    </h1>
                    <p className="mt-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Labore incidunt praesentium quo. Quasi sint ab,
                      perferendis nesciunt, delectus voluptatum asperiores
                      nostrum cumque facere adipisci nemo tempore vitae maxime!
                      Assumenda illo necessitatibus, explicabo quis praesentium
                      deserunt animi sunt autem magni, minima tempore harum
                      recusandae inventore magnam nam corrupti. Provident, quam
                      nesciunt?
                    </p>
                    <p className="mt-5 font-bold text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Labore incidunt praesentium quo. Quasi sint ab,
                      perferendis nesciunt, delectus voluptatum asperiores
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
        <div className="bg-[#F6F3EE] px-2">
          <div className="flex justify-center text-center">
            <div className="bg-[#ffffff] p-5 md:p-10 max-w-[9000px] shadow rounded-2xl mb-10">
              <h1 className="text-[30px] font-mono">Art and Craft</h1>
              <p className="max-w-[300px] m-auto mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {allArtAndCraft.slice(0, 6).map((artAndCraft) => (
                  <HomeSingle key={artAndCraft.id} artAndCraft={artAndCraft} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F3EE]">
          <div className="text-center">
            <div className="bg-[#ffffff] p-5 md:p-10 max-w-[9000px] rounded-none xl:px-40 mb-10">
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
      </Fade>
    </div>
  );
};

export default Home;
