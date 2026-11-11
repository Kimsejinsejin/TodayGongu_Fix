'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { DealCard } from '../common/DealCard';

// Dummy data for deal cards
const realtimeSalesDealCards = [
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789355190775793_60d43841.jpg',
    dateRange: 'D-13 07.09~10.01',
    rank: 1,
    creatorInfo: '혜연 / 우리나라 숨은 여행지 X 씨마크',
    productTitle: '호텔 숙박 패키지 (오픈런/프리오더/조식 포함 PKG)',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788750609975345_f228f5f5.jpg',
    dateRange: 'D-74 09.07~12.01',
    rank: 2,
    creatorInfo: '혜연 / 우리나라 숨은 여행지 X 씨마크',
    productTitle: '호텔 숙박 패키지 (오픈런/프리오더/조식 포함 PKG)',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789360000667249_c701f358.jpg',
    dateRange: 'D-13 07.09~10.01',
    rank: 3,
    creatorInfo: '혜연 / 우리나라 숨은 여행지 X 씨마크',
    productTitle: '호텔 숙박 패키지 (오픈런/프리오더/조식 포함 PKG)',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788955410668969_97d38b48.jpg',
    dateRange: 'D-13 07.09~10.01',
    rank: 4,
    creatorInfo: '혜연 / 우리나라 숨은 여행지 X 씨마크',
    productTitle: '호텔 숙박 패키지 (오픈런/프리오더/조식 포함 PKG)',
  },
];

export function RealtimeSalesSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-main-bg px-0 py-8">
      <div className="flex w-full flex-col gap-2 px-5 pb-4">
        <div className="flex h-6 flex-row items-center justify-center gap-1 self-start rounded bg-primary-light px-2">
          <div className="size-1 rounded-full bg-live-green" />
          <span className="font-pretendard text-10px font-semibold leading-14px text-primary">
            36분 전 업데이트
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-pretendard text-22px font-bold leading-31px">
            <span className="text-primary">실시간 판매량</span>
            <span className="text-neutral-title"> 높은 공구</span>
          </h2>
          <button className="self-stretch">
            <span className="font-pretendard text-12px font-medium leading-17px text-gray-link underline active:opacity-70">
              전체보기
            </span>
          </button>
        </div>
        <p className="font-pretendard text-12px font-semibold leading-17px text-gray-text">
          진행 중인 <span className="text-primary">4,317개</span> 중 가장 잘팔리는 공구만 모았어요
        </p>
      </div>

      <div className="mt-2 w-full">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12} // gap-3 (12px)
          freeMode={true}
          className="mySwiper"
          slidesOffsetBefore={20} // padding-left: 20px
          slidesOffsetAfter={20} // padding-right: 20px
        >
          {realtimeSalesDealCards.map((card, index) => (
            <SwiperSlide key={index} style={{ width: '220px' }}>
              <DealCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}