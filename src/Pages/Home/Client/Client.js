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
        </Swiper>
      </div>

      <div>
        <div className="bg-base-100 py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
