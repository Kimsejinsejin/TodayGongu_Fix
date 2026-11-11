"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules"; // Import FreeMode module for horizontal drag
import "swiper/css";
import "swiper/css/free-mode";
import DealCard from "./DealCard";

// Mock Data for the deal cards
const MOCK_DEAL_DATA = [
  {
    id: 1,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789574706915017_b0f27916.jpg",
    dateRange: "09.15~09.19",
    rank: 1,
    creatorInfo: "오프유 | 민 선 | 짹짹아하...",
    productTitle: "베이비마더구스 전집 16...",
  },
  {
    id: 2,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789574676550757_4f43407e.jpg",
    dateRange: "09.15~09.19",
    rank: 2,
    creatorInfo: "뿌맘 | 육아맘 소개해주는 동네엄마 X 투...",
    productTitle: "핸드메이드 패브릭 장난감...",
  },
  {
    id: 3,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789312487879928_f06d4d99.jpg",
    dateRange: "09.16~09.19",
    rank: 3,
    creatorInfo: "쪼이맘 | 출산준비 • 육아꿀템 • 라무르공구 X 훈민",
    productTitle: "터치터치 사운드북",
  },
  {
    id: 4,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789307732688230_89fb2306.jpg",
    dateRange: "09.14~09.19",
    rank: 4,
    creatorInfo: "캔디맘 | 육아템추천 • 출산꿀팁 • 육아정보 X 헬로키티",
    productTitle: "헬로키티 스푼누들포크세트",
  },
  {
    id: 5,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788700033089340_d6a7e7d3.jpg",
    dateRange: "09.15~09.19",
    rank: 5,
    creatorInfo: "프라우허 허유정 X MHC 문화통상",
    productTitle: "짜글이",
  },
  {
    id: 6,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789572919925717_7f6395e9.jpg",
    dateRange: "09.05~09.19",
    rank: 6,
    creatorInfo: "김진순 점심시간 X",
    productTitle: "제주갈치 선물세트",
  },
  {
    id: 7,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789356930719342_3bfc4cad.jpg",
    dateRange: "09.15~09.19",
    rank: 7,
    creatorInfo: "지원이랑놀자💛실패없는 가족여행 X 화담숲",
    productTitle: "리조트 숙박 패키지",
  },
  {
    id: 8,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789580197272502_3c488fce.jpg",
    dateRange: "09.13~09.19",
    rank: 8,
    creatorInfo: "마마홈 | 𝐌𝐚𝐌𝐚 𝐡𝐨𝐦𝐞 X 쿠퍼S",
    productTitle: "복을복을 냄비",
  },
  {
    id: 9,
    imageUrl:
      "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789580197272502_3c488fce.jpg",
    dateRange: "09.15~09.19",
    rank: 9,
    creatorInfo: "프라우허 허유정 X MHC",
    productTitle: "미니스텐 3종 트윙클 세트 (팅커벨)",
  },
];

const TodayGongguSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("08:23:30"); // Example time

  useEffect(() => {
    // This effect would typically calculate a countdown to a specific time.
    // For this example, we'll keep it static or a simple decrement if needed.
    // If dynamic, you'd calculate the difference between now and a target end time.
    // For pixel-perfect, we'll just show the static value from the image.
    // If it were dynamic, you'd use setInterval and clear it on unmount.
  }, []);

  return (
    <section className="mt-8 px-4 md:px-6 lg:px-8">
      {/* Header and description */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-today-green" />
          <span className="font-pretendard-medium text-xs text-[#a3aab3]">
            36분 전 업데이트
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <h2 className="font-pretendard-bold text-2xl text-today-dark">
              마감까지
            </h2>
            <span className="font-pretendard-bold text-[28px] leading-none text-today-green">
              {timeLeft}
            </span>
          </div>
          <a
            href="#"
            className="font-pretendard-medium text-xs text-[#a3aab3] hover:underline"
          >
            전체보기
          </a>
        </div>
        <p className="font-pretendard-medium text-sm text-[#8a8a8e]">
          오늘 자정하면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
        </p>
      </div>

      {/* Swiper Slider for Deal Cards */}
      <div className="pb-8">
        {" "}
        {/* Add padding to prevent cut-off scrollbar */}
        <Swiper
          modules={[FreeMode]}
          slidesPerView={"auto"} // Allows cards to be their defined width
          spaceBetween={12} // Gap between cards
          freeMode={true} // Enables free-mode for drag scrolling
          className="w-full h-auto" // Ensures Swiper takes full width
        >
          {MOCK_DEAL_DATA.map((deal) => (
            <SwiperSlide key={deal.id} style={{ width: "220px" }}>
              {" "}
              {/* Force slide width */}
              <DealCard {...deal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TodayGongguSection;