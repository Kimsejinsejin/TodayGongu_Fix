import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

// 피쳐드 카드 데이터 (원본 이미지 및 HTML 스니펫을 바탕으로 구성)
const featuredCardsData = [
  // 1열, 1번째 카드: "베이비마더구스 전집"
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1787268808605510_9b9e6a0d.jpg',
    dateRange: '09.15~09.19',
    topTag: '품절대란 전집',
    creatorAvatarSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/04/gonggu_1775791772430462_0d72477f.jpg',
    creatorName: '오프유 | 민 선 | 짹짹육아하는 해인맘 X 베이비마더...',
    followers: '171K',
    brand: '베이비마더스',
    brandCategory: '키즈/육아',
    productTitle: '아기가 매일 꺼내보는 베이비마더구스 전집 16...',
    price: '84,000원',
    specialOverlay: false,
  },
  // 1열, 2번째 카드: "핸드메이드 패브릭 장난감" (특수 오버레이)
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788774148084402_b24058ab.jpg',
    dateRange: '09.15~09.19',
    topTag: undefined, // 이미지에서 검은색 태그가 보이지 않음
    creatorAvatarSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778482197966066_ee70ba7a.jpg',
    creatorName: '우드블라썸 | 나를 돌보는 시간',
    followers: '86K',
    brand: undefined, // 브랜드 이름이 아닌 카테고리가 바로 이어짐
    brandCategory: '생활용품',
    productTitle: '핸드메이드 패브릭 장난감',
    price: undefined, // 이미지에 가격 없음
    specialOverlay: true,
    overlayTitle: '혹시 이거 아세요?',
    overlaySubtitle: '프리미엄 한정수공예',
  },
  // 2열, 1번째 카드: "아마존 월드 입장권"
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1786558380315812_4bd6de4b.jpg',
    dateRange: '09.15~09.19',
    topTag: '기타 외출 용품',
    creatorAvatarSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774598915759351_cde066ce.jpg',
    creatorName: '여행, 서하네 | 박현진',
    followers: '313K',
    brand: '파라다이스시티',
    brandCategory: '키즈/육아',
    productTitle: '아마존 월드 입장권', // HTML과 이미지의 내용이 달라 이미지 내용 우선
    price: '18,800원',
    specialOverlay: false,
  },
  // 2열, 2번째 카드: "아하한글 시리즈"
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789285923002881_e67231fb.jpg',
    dateRange: '09.15~09.19',
    topTag: '교구',
    creatorAvatarSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778488956336516_ff083722.jpg',
    creatorName: '하봄',
    followers: '309K',
    brand: '아하한글',
    brandCategory: '키즈/육아',
    productTitle: '아하한글 시리즈 9종세트',
    price: undefined, // 이미지에 가격 없음
    specialOverlay: false,
  },
];

const TodayGongguFeatured: React.FC = () => {
  return (
    // 전체 컨테이너: 흰색 배경, 둥근 모서리, 그림자
    <div className="flex flex-col gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm font-pretendard">
      {/* 헤더 섹션: 업데이트 정보, 마감 타이머, 전체보기 버튼 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          {/* "36분 전 업데이트"의 점 */}
          <div className="size-[6px] rounded-full bg-green-dot"></div>
          <span className="text-[12px] font-medium text-gray-700">36분 전 업데이트</span>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold text-black leading-tight">
              마감까지 <span className="text-red-timer">08:23:30</span>
            </h2>
            <p className="text-[13px] text-gray-700 mt-0.5">
              오늘 자정이면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
            </p>
          </div>
          <button className="text-[13px] text-gray-700 font-medium whitespace-nowrap active:opacity-70">
            전체보기
          </button>
        </div>
      </div>

      {/* 카드 그리드 섹션 */}
      <div className="flex flex-col gap-4"> {/* 각 행 사이의 간격 */}
        {/* 1번째 행 (일반 카드) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-4"> {/* 모바일: 1열, PC: 2열 */}
          {featuredCardsData.slice(0, 2).map((card, index) => (
            <FeaturedProductCard key={index} {...card} />
          ))}
        </div>
        {/* 2번째 행 (번호 매겨진 카드) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-4"> {/* 모바일: 1열, PC: 2열 */}
          {featuredCardsData.slice(2, 4).map((card, index) => (
            <div key={index} className="flex flex-row gap-[6px] items-start">
              {/* 카드 번호 */}
              <span className="font-pretendard text-[12px] font-bold text-gray-800 pt-[2px]">{index + 1}.</span>
              <FeaturedProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayGongguFeatured;