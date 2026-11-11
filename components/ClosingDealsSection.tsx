'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/free-mode'; // Optional: if you want free mode scrolling
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import { ClosingDealCard } from './ClosingDealCard';

export function ClosingDealsSection() {
  const closingDeals = [
    {
      id: 1,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789297839082987_f64e1c21.jpg',
      dateRange: '09.15~09.19',
      creator: '오프유 | 민 선 | 짹짹아하는 해인맘 X 베이비마더스',
      productTitle: '베이비마더스 전집 16...',
    },
    {
      id: 2,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789290040775330_5c05510d.jpg',
      dateRange: '09.15~09.19',
      creator: '뚜밤 | 육아맘 소개하는 동네엄마 X 투앤쓰리',
      productTitle: '핸드메이드 패브릭 장난감...',
    },
    {
      id: 3,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/05/gonggu_posting_piece_1778652670073308_d922148b.jpg',
      dateRange: '05.08~10.01',
      creator: '김은정 [ 한브로 with 여행 ] X 시에나',
      productTitle: '호캉스 숙박권',
      isDDay: true,
      dDayValue: 'D-13',
    },
    {
      id: 4,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1786598972252531_7008b7e2.jpg',
      dateRange: '08.11~10.01',
      creator: '또맘 (정도희) 아이랑갈만한곳 • 놀이교육전문가 X 아틀란티스',
      productTitle: '아틀란티스 송도 입장권',
      isDDay: true,
      dDayValue: 'D-13',
    },
    {
      id: 5,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789327826876326_db6c34b4.jpg',
      dateRange: '09.15~',
      creator: '바이쏨 ✲ 아이와 국내 • 해외여행 X ',
      productTitle: '캠핑테마룸 6인/7인 패키지',
    },
    {
      id: 6,
      imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/07/gonggu_posting_piece_1785136218672389_90df16d9.jpg',
      dateRange: '07.27~10.01',
      creator: '용복맘 l 육아템 • 육아정보 🐰 X 주렁주렁',
      productTitle: '아마존 월드 입장권',
      isDDay: true,
      dDayValue: 'D-13',
    },
    // Add more dummy data as needed to demonstrate scrolling
  ];

  return (
    <section className="mt-6">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-badge" />
            <span className="font-pretendard-semibold text-[11px] leading-[15px] text-gray-400">
              36분 전 업데이트
            </span>
          </div>
          <h2 className="font-pretendard-bold text-[22px] leading-[30px] text-gray-800">
            마감까지 <span className="text-primary">08:23:30</span>
          </h2>
          <p className="font-pretendard-medium text-[13px] leading-[18px] text-gray-800">
            오늘 자정하면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
          </p>
        </div>
        <Link href="#" className="font-pretendard-medium text-[13px] leading-[18px] text-gray-800 active:opacity-70">
          전체보기
        </Link>
      </div>

      <div className="mt-4 w-full">
        <Swiper
          slidesPerView="auto" // Auto makes each slide take its defined width
          spaceBetween={16} // Gap between slides
          freeMode={true} // Enables free scrolling
          modules={[FreeMode]}
          className="mySwiper !pb-2" // !pb-2 to ensure scrollbar doesn't clip content
        >
          {closingDeals.map((deal) => (
            <SwiperSlide key={deal.id} style={{ width: 'auto' }}> {/* Important for slidesPerView="auto" */}
              <ClosingDealCard {...deal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}