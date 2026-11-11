import React from 'react';
import CountdownItemCard from './CountdownItemCard'; // CountdownItemCard 컴포넌트 경로에 맞게 조정

const CountdownSection: React.FC = () => {
  // 이미지와 크롭 이미지를 기반으로 하드코딩된 카드 데이터
  const cardData = [
    {
      dateRange: '09.15~09.19',
      imageUrl:
        'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789308216679044_78708895.jpg', // 곰 인형 이미지
      itemNumber: 1,
      mainTitle: '아기가 매일 꺼내보는 베이비마더구스 전집',
      creatorDescription: '오프유 | 민 선 | 짹짹아해는 해인맘 X 베이...',
    },
    {
      dateRange: '09.15~09.19',
      imageUrl:
        'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789327826876326_db6c34b4.jpg', // 채소 이미지
      itemNumber: 2,
      mainTitle: '혹시 이거 아세요? 프리미엄 한정수공예',
      creatorDescription: '류란 | 육아템 소개해주는 동네엄마 X 투...',
    },
  ];

  // 카운트다운 시간은 이미지에서 보이는 대로 정적으로 표시
  const countdownTime = '08:23:30';

  return (
    <section className="bg-white p-4">
      {/* 카운트다운 섹션 헤더 */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            {/* "36분 전 업데이트" 옆의 애니메이션 점 */}
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500"></span>
            </span>
            <span className="font-pretendard-medium text-[11px] text-gray-500">
              36분 전 업데이트
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-pretendard-bold text-[18px] text-gray-800">
              마감까지
            </h2>
            <span className="font-pretendard-bold text-[24px] text-red-500">
              {countdownTime}
            </span>
          </div>
          <p className="font-pretendard text-[12px] text-gray-500">
            오늘 자정하면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
          </p>
        </div>
        <button className="font-pretendard-medium text-[13px] text-[#4a5deb] active:opacity-70">
          전체보기
        </button>
      </div>

      {/* 카운트다운 아이템 카드 그리드 */}
      <div className="grid grid-cols-2 gap-x-[2px]">
        {cardData.map((data, index) => (
          <CountdownItemCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;