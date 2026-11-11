'use client'; // 클라이언트 컴포넌트로 지정

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules'; // 자유로운 스크롤을 위한 FreeMode 모듈 임포트

// Swiper 기본 스타일 및 FreeMode 스타일 임포트 (globals.css에서 처리 가능)
// import 'swiper/css';
// import 'swiper/css/free-mode';

import { TomorrowDealCard } from './TomorrowDealCard';

// 목업 데이터 (원본 이미지 및 HTML 구조에서 추출)
const MOCK_TOMORROW_DEALS = [
  {
    id: 'tomorrow-1',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789274485709441_a7346951.jpg',
    dateRange: '09.15~01.01',
    dDay: 'D-105',
    orderNumber: 20,
    creatorInfo: '장아람(지운맘) | 국내여행 | 해외여행 X 인생 선셋 리조트',
    title: '오션뷰 스파 리조트 객실 (최대 8인) + 2인 스파티켓',
  },
  {
    id: 'tomorrow-2',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/07/gonggu_posting_piece_1784789424255537_dc0189a7.jpg',
    dateRange: '07.28~12.01',
    dDay: 'D-74',
    orderNumber: 16,
    creatorInfo: '제이드아이 | 홍예지 ▫️국내여행 ▫️ 해외여행 ▫️가족여행 X',
    title: '마카오 키즈 특화 호텔 패키지 (워터파크, 키즈테마파크, 관람차, 투어 포함)',
  },
  {
    id: 'tomorrow-3',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1787267751996749_52d61166.jpg',
    dateRange: '08.20~10.23',
    dDay: 'D-35',
    orderNumber: 17,
    creatorInfo: '김은정 [ 한브로 with 여행 ] X 대구 아쿠아리움',
    title: '대구 아쿠아리움 입장권',
  },
  {
    id: 'tomorrow-4',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/06/gonggu_posting_piece_1781854082149504_4d486bcb.jpg',
    dateRange: '06.15~11.01',
    dDay: 'D-44',
    orderNumber: 18,
    creatorInfo: '니니브로 | 부산출발 아이와 여행 X',
    title: '풀빌라 숙소',
  },
  {
    id: 'tomorrow-5',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/07/gonggu_posting_piece_1784573979706222_3bb96ccd.jpg',
    dateRange: '07.23~11.01',
    dDay: 'D-44',
    orderNumber: 19,
    creatorInfo: '경상도 여행➰윤보람 X',
    title: '포항 풀빌라 숙박 (야외 수영장·해루질·스파·BBQ 포함 패키지)',
  },
];

export function TomorrowDealsSection() {
  return (
    <section className="flex w-full items-center justify-center bg-gray-100 px-0 py-4">
      <div className="w-full">
        {/* 섹션 제목 및 부제목 */}
        <div className="mb-2 flex flex-col gap-1 px-5 py-3">
          <h2 className="font-pretendard text-[20px] font-bold leading-[28px] text-gray-800">
            내일 오픈 예정인 공구
          </h2>
          <p className="font-pretendard text-[12px] font-semibold leading-[17px] text-gray-800">
            <span className="text-primary">오픈 직후 빠르게 품절되는 핫딜</span>이니, 꼭 미리 확인하세요
          </p>
        </div>

        {/* Swiper 슬라이더 컨테이너 */}
        <div className="mt-2 overflow-hidden">
          <Swiper
            modules={[FreeMode]}
            slidesPerView="auto" // 슬라이드가 자연 너비를 가지도록 설정
            spaceBetween={20} // 슬라이드 간 간격
            freeMode={true} // 자유로운 스크롤 모드 활성화
            className="tomorrow-deals-swiper pb-5 pl-5" // 첫 번째 아이템의 왼쪽 패딩과 스크롤바를 위한 하단 패딩
          >
            {MOCK_TOMORROW_DEALS.map((deal) => (
              <SwiperSlide key={deal.id} style={{ width: 'auto' }}>
                <TomorrowDealCard {...deal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}