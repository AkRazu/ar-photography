import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Client.css";
const Client = () => {
  return (
    <div className="lg:pb-10">
      <div className="client-bg">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="lg:w-2/4 rounded-sm bg-base-100 px-5 mx-auto text-start py-10">
              <h3 className="text-xl head mb-5">
                " Caroline is an amazing photographer!!! She made the pictures
                during our wedding and they look amazing. It's like she has a
                third sense to capture all the interesting moments that are
                taking place. "
              </h3>
              <hr className="border-primary w-1/6" />
              <span className="flex justify-between items-center">
                <h6 className="tracking-[.2em]">— Olivia & Enrico </h6>
                <img
                  className="w-1/6"
                  src="https://duruthemes.com/demo/html/ckarla/two/images/quot.png"
                  alt=""
                />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-2/4 rounded-sm bg-base-100 px-5 mx-auto text-start py-10">
              <h3 className="text-xl head mb-5">
                " Caroline is an amazing photographer!!! She made the pictures
                during our wedding and they look amazing. It's like she has a
                third sense to capture all the interesting moments that are
                taking place. "
              </h3>
              <hr className="border-primary w-1/6" />
              <span className="flex justify-between items-center">
                <h6 className="tracking-[.2em]">— Marine & Kevin</h6>
                <img
                  className="w-1/6"
                  src="https://duruthemes.com/demo/html/ckarla/two/images/quot.png"
                  alt=""
                />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-2/4 rounded-sm bg-base-100 px-5 mx-auto text-start py-10">
              <h3 className="text-xl head mb-5">
                " Caroline is an amazing photographer!!! She made the pictures
                during our wedding and they look amazing. It's like she has a
                third sense to capture all the interesting moments that are
                taking place. "
              </h3>
              <hr className="border-primary w-1/6" />
              <span className="flex justify-between items-center">
                <h6 className="tracking-[.2em]">— Tammy & Matthew</h6>
                <img
                  className="w-1/6"
                  src="https://duruthemes.com/demo/html/ckarla/two/images/quot.png"
                  alt=""
                />
              </span>
            </div>
          </SwiperSlide>
          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
