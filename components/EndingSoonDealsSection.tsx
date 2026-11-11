import React from 'react';
import EndingSoonDealCard from './EndingSoonDealCard';

const DUMMY_DEALS = [
  {
    id: 1,
    dateRange: '09.15~09.19',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1787346850239642_48555986.jpg',
    rank: 1,
    title: '아기가 매일 꺼내보는 베이비마더스 전집 16...',
    description: '오프유 | 민 선 | 짝육아하는 해인맘 X 베이비마더...',
  },
  {
    id: 2,
    dateRange: '09.15~09.19',
    imageUrl: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1786523174291880_b3f9ff79.jpg',
    rank: 2,
    title: '혹시 이거 아세요? 프리미엄 한정수공예',
    description: '뚜암 | 육아템 소개해주는 동네엄마 X 두둥맘 | 핸드메이드 페브릭 장난감', // Adjusted based on partial visible text
  },
];

const EndingSoonDealsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 px-4 py-6 md:px-0">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-pretendard-medium text-[#00c853]">
            ● 36분 전 업데이트
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-pretendard-bold text-[18px] text-gray-800">
              마감까지 <span className="text-todaygonggu-orange">08:23:30</span>
            </h2>
            <p className="font-pretendard text-[12px] text-gray-500">
              오늘 자정하면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
            </p>
          </div>
          <a href="#" className="font-pretendard text-[13px] text-gray-500">
            전체보기
          </a>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-2 gap-2">
        {DUMMY_DEALS.map((deal) => (
          <EndingSoonDealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default EndingSoonDealsSection;