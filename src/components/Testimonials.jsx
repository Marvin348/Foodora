import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useEffect, useState } from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="mt-12">
      <div className="container">
        <h2 className="text-2xl font-semibold">Was unsere Kunden sagen</h2>
        <p>Echte Bewertungen von glücklichen Foodora Kunden.</p>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".nav-prev",
            nextEl: ".nav-next",
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={32}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6"
        >
          {testimonials.map(({ id, name, review, img }) => (
            <SwiperSlide key={id}>
              <Review name={name} review={review} img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-end mt-2 gap-2">
          <button className="nav-prev w-8 h-8 rounded-full bg-0 border-2 border-gray-400 cursor-pointer hover:bg-gray-300 hover:border-transparent">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="nav-next w-8 h-8 rounded-full bg-0 border-2 border-gray-400 cursor-pointer hover:bg-gray-300 hover:border-transparent">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

const Review = ({ name, review, img }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-2xl">
      <div className="mb-4 text-accent">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </div>
      <div>
        <p className="mb-4 leading-normal">"{review}"</p>
        <div className="flex items-center gap-4 pt-4 border-t border-gray-400">
          <img className="w-12 h-auto rounded-full" src={img} alt="" />
          <h3 className="text-base">{name}</h3>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
