"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GongguItemCard from './GongguItemCard';

const trendingItems = [
  {
    id: '1',
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788868316774783_29462f36.jpg',
    category: '키즈/육아',
    dateRange: '09.15~09.19',
    title: '아기가 매일 꺼내보는 베이비마더구스 전집 16...',
    creatorImageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774447604323223_3b0f56ae.jpg',
    creatorName: '오프유 | 민 선 | 짹짹육아하는 해인맘 X 베이비마더구스',
    followers: '팔로워 156K',
  },
  {
    id: '2',
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789617068749172_e93ad27f.jpg',
    category: '키즈/육아',
    dateRange: '09.15~09.19',
    title: '혹시 이거 아세요? 프리미엄 한정수공예 핸드메이드 패브릭 장난감',
    creatorImageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778482031618258_9b88499b.jpg',
    creatorName: '쀼맘 | 육아템 소개해주는 동네엄마',
    followers: '팔로워 39K',
  },
  {
    id: '3',
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789342854466816_3fd4b3ed.jpg',
    category: '잡화',
    dateRange: '09.19 ~',
    title: '로파서울',
    creatorImageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774448040243249_753bb6ab.jpg',
    creatorName: '기은세',
    followers: '팔로워 822K',
  },
  {
    id: '4',
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789257900319027_289e9310.jpg',
    category: '의류',
    dateRange: '09.19~09.21',
    title: '자켓/바람막이',
    creatorImageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778481576324483_1655edf7.jpg',
    creatorName: '달솜언니',
    followers: '팔로워 166K',
  },
];

const TrendingGongguSection: React.FC = () => {
  return (
    <section className="mt-5 pb-5">
      <div className="px-5">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="size-1.5 rounded-full bg-primary" /> {/* Small orange dot */}
          <span className="font-pretendard-medium text-[12px] text-primary">36분 전 업데이트</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[18px] font-pretendard-bold text-gray-900">
            마감까지 <span className="text-countdown-red">08:23:30</span>
          </h3>
          <button className="text-[13px] font-pretendard-medium text-gray-700 active:opacity-80">
            전체보기
          </button>
        </div>
        <p className="text-[13px] font-pretendard-medium text-gray-700 mb-5">
          오늘 자정이면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
        </p>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15} // Gap between cards
        freeMode={true}
        className="px-5" // Padding for the Swiper itself
      >
        {trendingItems.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 'auto' }}>
            <GongguItemCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingGongguSection;