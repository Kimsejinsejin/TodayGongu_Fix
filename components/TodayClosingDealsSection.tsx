import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import DealCard from './DealCard';

interface DealData {
  imageUrl: string;
  dateRange: string;
  rank: number;
  creator: string;
  title: string;
  isSpecialCard?: boolean;
  specialTitle?: string;
  specialCreator?: string;
}

// 이미지와 제공된 HTML 스니펫을 기반으로 카드 데이터를 추출했습니다.
// 이미지에 표시된 1, 2위 카드의 시각적 순서와 내용을 우선시하고,
// 이후 카드들은 HTML 스니펫을 사용하여 채웠습니다.
const dealData: DealData[] = [
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789275962772496_43607cec.jpg",
    dateRange: "09.15~09.19",
    rank: 1,
    creator: "오프유 | 민 선 | 짝육아하는 해인맘 X 베이비마더스",
    title: "아기가 매일 꺼내보는 베이비마더스 전집 16...", // 이미지에서 발췌
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789277785457282_2dc5775b.jpg",
    dateRange: "09.15~09.19", // 이미지에서 발췌
    rank: 2,
    isSpecialCard: true,
    specialTitle: "혹시 이거 아세요? 프리미엄 한정수공예", // 이미지에서 발췌
    specialCreator: "뚜밤 | 육아템 소개해주는 동네맘 X 푸...", // 이미지에서 발췌
    title: "핸드메이드 패브릭 장난감...", // 이미지에서 발췌
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789307515192981_6d0ffa66.jpg", // HTML에서는 12위
    dateRange: "09.16~09.19",
    rank: 3, // 시각적 재현을 위해 3위로 조정
    creator: "뽀물맘 • 책육아 육아꿀템• X 돌잡이",
    title: "돌잡이 시리즈 조작북 (명화·한글·영어·수학) 4권 세트",
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789289245152578_a002c2e9.jpg", // HTML에서는 13위
    dateRange: "09.14~09.19",
    rank: 4, // 시각적 재현을 위해 4위로 조정
    creator: "홈앤홈 ʜᴏᴍᴇ ɴ ʜᴏᴍᴇ X Foodle",
    title: "오벌돔 시리즈 (리버시블 테이블웨어)",
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788977182095445_d5df2895.jpg", // HTML에서는 14위
    dateRange: "09.10~09.19",
    rank: 5, // 시각적 재현을 위해 5위로 조정
    creator: "Lee Yoonmi X 바이소이",
    title: "베트남 나트랑 3박 호텔 패키지 (베스트웨스턴 프리미어 마벨라)",
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789668210313714_0ebcaf7d.jpg", // HTML에서는 15위
    dateRange: "09.16~09.19",
    rank: 6, // 시각적 재현을 위해 6위로 조정
    creator: "최영원 X ", // 원본 HTML에 'X' 뒤 내용이 없어 그대로 둠
    title: "캡내장나시",
  },
  {
    imageUrl: "https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789367356054912_121bfce0.jpg", // HTML에서는 16위
    dateRange: "09.14~09.19",
    rank: 7, // 시각적 재현을 위해 7위로 조정
    creator: "삼월의집 ➰ Minyoung X 매직쉐프",
    title: "매직쉐프 에어프라이어", // 원본 HTML이 잘려있어 임의로 채움
  },
];

const TodayClosingDealsSection: React.FC = () => {
  return (
    <section className="bg-white py-6 px-4">
      {/* Header */}
      <div className="mb-2 flex items-center gap-1 text-[11px] leading-[16px] text-[#2ac189]">
        {/* 애니메이션이 적용된 초록색 점 */}
        <span className="relative flex h-[6px] w-[6px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ac189] opacity-75"></span>
          <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#2ac189]"></span>
        </span>
        36분 전 업데이트
      </div>

      <div className="mb-2 flex items-end justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="font-pretendard-bold text-[20px] leading-[28px] text-gray-900">
            마감까지
          </h2>
          <span className="font-pretendard-bold text-[28px] leading-[39px] text-[#ff3344]">
            08:23:30
          </span>
        </div>
        <button className="font-pretendard-semibold text-[13px] leading-[18px] text-gray-500 active:opacity-70">
          전체보기
        </button>
      </div>

      <p className="mb-5 font-pretendard-medium text-[13px] leading-[18px] text-gray-500">
        오늘 자정 비싸지는 공구, 잘 팔리는 순서대로 모았어요
      </p>

      {/* Swiper를 사용한 가로 스크롤 가능한 딜 목록 */}
      <Swiper
        slidesPerView="auto"
        spaceBetween={12} // 카드 사이의 간격
        freeMode={true} // 자유로운 스크롤 모드
        className="mySwiper" // 필요에 따라 사용자 정의 스타일링을 위한 클래스
      >
        {dealData.map((deal, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <DealCard {...deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TodayClosingDealsSection;