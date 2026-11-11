"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const categories = [
  '최저가비교',
  '전체',
  '의류',
  '푸드',
  '키즈/육아',
  '뷰티',
  '생활용품',
  '잡화',
  '가전',
];

const CategoryTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(1); // '전체'가 기본 활성화 상태

  return (
    <div className="relative -mt-0.5 lg:mt-0 lg:ml-0 lg:mr-0">
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-[54px] bg-white border-b border-gray-100 px-5"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category} style={{ width: 'auto' }} className="!flex items-center justify-center">
            <button
              className={`h-full px-2 text-[15px] font-pretendard-semibold whitespace-nowrap transition-colors duration-200
                ${activeIndex === index
                  ? 'text-gray-900 border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryTabs;