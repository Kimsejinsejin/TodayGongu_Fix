'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { DealCard } from './DealCard';
import { trendingDeals } from '@/app/data/deals'; // 데이터 불러오기
import Link from 'next/link';

export function TrendingDeals() {
  return (
    <section className="px-4 py-6 md:px-6 lg:px-8 bg-white rounded-t-xl"> {/* 메인 컨테이너 배경 및 상단 라운딩 */}
      {/* 업데이트 시간 정보 */}
      <div className="flex items-center gap-1 text-sm font-pretendard mb-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </span>
        <span className="text-gray-800 text-[11px] leading-[16px] font-medium">36분 전 업데이트</span>
      </div>

      {/* 마감 시간 및 설명 */}
      <div className="flex items-end justify-between mb-4">
        <div className="flex flex-col">
          <h2 className="font-pretendard font-bold text-[22px] leading-[32px] text-gray-900">
            마감까지 <span className="text-primary">08:23:30</span>
          </h2>
          <p className="font-pretendard text-[12px] leading-[17px] text-gray-500 mt-0.5">
            오늘 자정 자정 이 비싸지는 공구, 잘 팔리는 순서대로 모았어요
          </p>
        </div>
        <Link href="#" className="font-pretendard font-medium text-[12px] leading-[17px] text-gray-500">
          전체보기
        </Link>
      </div>

      {/* 딜 캐러셀 */}
      <Swiper
        slidesPerView="auto" // 화면에 맞게 자동으로 슬라이드 개수 조절
        spaceBetween={12} // 슬라이드 간 간격
        freeMode={true} // 자유로운 스크롤 모드
        modules={[FreeMode]}
        className="mySwiper !pb-4" // Swiper 인스턴스에 클래스 적용, 아래쪽 스크롤바를 위한 패딩
      >
        {trendingDeals.map((deal) => (
          <SwiperSlide key={deal.id} className="!w-auto"> {/* 슬라이드 너비를 내용에 맞게 자동 조절 */}
            <DealCard {...deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}