/** @format */

import Image from "components/atom/Image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "style/swiperStyle.css";
import { Navigation, Pagination } from "swiper/modules";

export default function DetailImages({ styleImages }) {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleMouseEnter = () => {
    setShowNavigation(true);
  };

  const handleMouseLeave = () => {
    setShowNavigation(false);
  };

  return (
    <div
      className="pb-22px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination]}
      >
        {styleImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image url={image} styleName="w-640px h-852px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
