'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import UpcomingDateButton from './UpcomingDateButton';
import UpcomingDealItem from './UpcomingDealItem';

import 'swiper/css'; // Base Swiper styles

const dates = [
  { date: '9/20', dDay: 'D-2' },
  { date: '9/21', dDay: 'D-3' },
  { date: '9/22', dDay: 'D-4' },
  { date: '9/23', dDay: 'D-5' },
  { date: '9/24', dDay: 'D-6' },
  { date: '9/25', dDay: 'D-7' },
  { date: '9/26', dDay: 'D-8' },
  { date: '9/27', dDay: 'D-9' },
];

const upcomingDeals = [
  {
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788473688105662_87e6b194.jpg',
    category: '키즈/육아',
    title: '엄마표영어로 수능까지 해결해보는 공부법 2차 특강',
    creator: '이미경 | 소다맘 😊',
  },
  {
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789181219358961_27458f63.jpg',
    category: '잡화',
    title: '슬리퍼, 메리제인, 조끼, 악세사리',
    creator: '비 늬 | 팔로워 33K',
  },
  {
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789652444530195_e5a9061c.jpg', // Placeholder for third item
    category: '의류',
    title: '여성 오피스룩, 데이트룩 필수템',
    creator: '미니민 | 팔로워 15K',
  },
];

const UpcomingDealsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // For date picker active state

  return (
    <section className="mt-4 bg-gray-100 pb-5">
      <div className="px-5 py-3 flex flex-col gap-1">
        <h2 className="font-pretendard-bold text-[20px] leading-[28px] text-gray-800">
          곧 오픈 예정이에요
        </h2>
        <p className="font-pretendard-semibold text-[12px] leading-[17px] text-grayScale-800">
          <span className="text-primary">오픈 알림 설정</span>을 통해, 핫딜을 놓치지 마세요
        </p>
      </div>

      <div className="mt-2">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          freeMode={true}
          className="date-swiper px-5"
          onSwiper={(swiper) => console.log('Date Swiper initialized', swiper)}
        >
          {dates.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <UpcomingDateButton
                date={item.date}
                dDay={item.dDay}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col gap-[20px] px-5 py-[24px]">
          {upcomingDeals.map((deal, index) => (
            <UpcomingDealItem key={index} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingDealsSection;