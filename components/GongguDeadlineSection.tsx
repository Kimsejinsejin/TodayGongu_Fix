import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/free-mode';

interface GongguCardProps {
  rank: number;
  category: string;
  dateRange: string;
  title: string;
  creatorName: string;
  creatorImage: string;
  followers: string;
  gongguImage: string;
}

/**
 * 개별 공구 카드를 렌더링하는 컴포넌트입니다.
 * 원본 사이트의 UI 요소(이미지, 카테고리 태그, 제목, 크리에이터 정보, 버튼 등)를 재현합니다.
 */
const GongguCard: React.FC<GongguCardProps> = ({
  rank,
  category,
  dateRange,
  title,
  creatorName,
  creatorImage,
  followers,
  gongguImage,
}) => {
  return (
    <div className="flex items-start gap-3 w-full h-[188px] cursor-pointer active:opacity-90">
      {/* 이미지 섹션 */}
      <div className="relative h-[187.5px] w-[150px] overflow-hidden rounded-[10.7px] bg-gray-100 shrink-0">
        <Image
          src={gongguImage}
          alt={title}
          fill // 부모 요소에 맞춰 크기 조정
          priority
          className="transition-transform duration-120 linear object-cover"
        />
        {/* 그라데이션 오버레이 */}
        <div className="absolute bottom-0 left-0 right-0 h-[94px]"
          style={{ backgroundImage: 'linear-gradient(rgba(118, 118, 118, 0), rgba(0, 0, 0, 0.7))' }}>
        </div>
        {/* 카테고리 태그 */}
        <div className="absolute left-[10px] top-[7px] rounded-[5px] bg-primary px-[5px] py-[2px]">
          <span className="font-pretendard-semibold text-[9px] leading-[13px] text-gray-100">
            {category}
          </span>
        </div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="flex flex-1 flex-col justify-between h-[188px] py-0.5">
        <div className="flex flex-col gap-2">
          {/* 날짜 범위 태그 */}
          <div className="self-start rounded-[2px] bg-[#f2f4f6] px-[6px] py-[3px]">
            <span className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-800">
              {dateRange}
            </span>
          </div>
          {/* 제목 */}
          <p className="font-pretendard-semibold text-[14px] leading-[20px] text-black line-clamp-2">
            {title}
          </p>
          {/* 크리에이터 정보 */}
          <div className="flex items-center gap-1.5">
            {/* 랭킹 및 크리에이터 이미지 */}
            <div className="relative size-6 shrink-0 rounded-full bg-gray-100 overflow-hidden">
                <span className="absolute -top-[2px] -left-[2px] w-[15px] h-[15px] rounded-full bg-black text-white text-[9px] font-pretendard-bold flex items-center justify-center z-10">
                    {rank}
                </span>
                <Image
                    src={creatorImage}
                    alt={creatorName}
                    fill // 부모 요소에 맞춰 크기 조정
                    priority
                    className="object-cover"
                />
            </div>
            <p className="font-pretendard-medium text-[11px] leading-[15px] text-gray-800 shrink">
              {creatorName}
            </p>
            <div className="size-[2px] shrink-0 rounded-full bg-gray-600"></div>
            <p className="shrink-0 font-pretendard-medium text-[11px] leading-[15px] text-gray-800">
              {followers}
            </p>
          </div>
        </div>

        {/* 오픈 알림 받기 버튼 */}
        <button className="h-[30px] flex items-center justify-center rounded bg-black active:opacity-80">
          <span className="font-pretendard-bold text-[12px] leading-[17px] text-gray-100">
            오픈 알림 받기
          </span>
        </button>
      </div>
    </div>
  );
};

// 재현을 위한 더미 데이터
const gongguData: GongguCardProps[] = [
  {
    rank: 1,
    category: '키즈/육아',
    dateRange: '09.15~09.19',
    title: '아기가 매일 꺼내보는 베이비마더구스 전집 16...',
    creatorName: '오프유 | 민 선 | 짝육아하는 해인맘 X 베이...',
    creatorImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778064394318900_864fbdc9.jpg',
    followers: '팔로워 23K',
    gongguImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789300423837824_f3668958.jpg',
  },
  {
    rank: 2,
    category: '생활용품',
    dateRange: '09.15~09.19',
    title: '혹시 이거 아세요? 프리미엄 한정수공예 핸드메이드 패브릭 장난감...',
    creatorName: '뀨맘 | 육아템 소개해주는 동네맘 X 투...',
    creatorImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778480196855724_83527744.jpg',
    followers: '팔로워 43K',
    gongguImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789611652024207_7896405d.jpg',
  },
  {
    rank: 3,
    category: '잡화',
    dateRange: '09.19 ~',
    title: '플렉스 적립 통장 세트 (통장, 인감도장, 통장케이스, 체크카드, 거치대)',
    creatorName: '엄마표 홈스쿨링 & 책육아 쭈니놀이터🎈',
    creatorImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774436594378962_81bd0807.jpg',
    followers: '팔로워 29K',
    gongguImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789611652024207_7896405d.jpg', // 예시 이미지, 다른 이미지로 교체 필요
  },
  {
    rank: 4,
    category: '기타',
    dateRange: '09.19',
    title: 'MOVE, CONNECT 팝업 바레 클래스 (맘/커플)',
    creatorName: 'Joy | 원정',
    creatorImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/09/gonggu_1788845832819330_f5c49ffa.jpg',
    followers: '팔로워 34K',
    gongguImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788857420232664_3a360601.jpg', // 예시 이미지
  },
  {
    rank: 5,
    category: '뷰티',
    dateRange: '09.20',
    title: '컬러 톤업 선크림 (자연스러운 톤업, 워터프루프, 저자극, 촉촉)',
    creatorName: '뷰티끌로이 🌿',
    creatorImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/09/gonggu_1789073048889419_1cc23b25.jpg',
    followers: '팔로워 50K',
    gongguImage: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789073048889419_1cc23b25.jpg', // 예시 이미지
  },
];

/**
 * 마감 임박 공구 목록 섹션을 렌더링하는 컴포넌트입니다.
 * 헤더 정보와 수평 스크롤 가능한 공구 카드 목록을 포함합니다.
 */
const GongguDeadlineSection: React.FC = () => {
  return (
    <section className="p-5 bg-white">
      {/* 헤더: 업데이트 시간 */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 bg-green-dot rounded-full"></span>
        <p className="text-gray-600 text-[10px] font-pretendard-medium">36분 전 업데이트</p>
      </div>

      {/* 헤더: 마감 시간 및 전체보기 링크 */}
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-pretendard-bold text-black">
          마감까지 <span className="text-primary">08:23:30</span>
        </h2>
        <a href="#" className="text-gray-600 text-[13px] font-pretendard-medium">전체보기</a>
      </div>

      {/* 서브 타이틀 */}
      <p className="text-gray-600 text-[13px] font-pretendard-medium mb-5">
        오늘 자정 자정 비싸지는 공구, 잘 팔리는 순서대로 모았어요
      </p>

      {/* 공구 카드 Swiper */}
      <Swiper
        modules={[FreeMode]}
        slidesPerView={'auto'} // 화면 크기에 따라 자동으로 슬라이드 수 조절
        spaceBetween={20} // 슬라이드 간 간격
        freeMode={true} // 자유로운 스크롤 모드
        className="gonggu-swiper pb-4 -mb-4" // 스크롤바 공간 확보 및 레이아웃 상쇄
      >
        {gongguData.map((data, index) => (
          <SwiperSlide key={index} className="!w-[280px]"> {/* 각 슬라이드의 너비 */}
            <GongguCard {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GongguDeadlineSection;