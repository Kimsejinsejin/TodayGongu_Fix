'use client';

import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import BottomNavigationBar from './BottomNavigationBar';

// 이미지 및 제공된 HTML 청크를 기반으로 한 더미 데이터
const dummyProducts = [
  {
    imageUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/08/gonggu_posting_piece_1787267751996749_52d61166.jpg',
    category: '키즈/가족',
    creatorAvatarUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/05/gonggu_1778488972084148_de7c2fd4.jpg',
    creatorName: '김은정 [ 한브로 with 여행 ]',
    followerCount: '팔로워 294K',
    subtitle: '대구 아쿠아리움', // 이미지 내용에 맞게 추가
    title: '대구 아쿠아리움 입장권',
  },
  {
    imageUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/06/gonggu_posting_piece_1781854082149504_4d486bcb.jpg',
    category: '키즈/가족',
    creatorAvatarUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/04/gonggu_1775100953255330_96505b75.jpg',
    creatorName: '니니브로 | 부산출발 아이와 여행',
    followerCount: '팔로워 74K',
    subtitle: '풀빌라 숙소', // 이미지 내용에 맞게 추가
    title: '풀빌라 숙소',
  },
  {
    imageUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/07/gonggu_posting_piece_1784573979706222_3bb96ccd.jpg',
    category: '기타',
    creatorAvatarUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774436911528540_c02e1076.jpg',
    creatorName: '경상도 여행➰윤보람',
    followerCount: '팔로워 115K',
    subtitle: '포항 풀빌라', // 이미지 내용에 맞게 추가
    title: '포항 풀빌라 숙박 (야외 수영장·해루질·스파·BBQ 포함 패키지)',
  },
  {
    imageUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789274485709441_a7346951.jpg',
    category: '기타',
    creatorAvatarUrl:
      'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/images/2026/03/gonggu_1774599219771176_3dbd38f4.jpg',
    creatorName: '장아람(지운맘) | 국내여행 | 해외여행',
    followerCount: '팔로워 343K',
    subtitle: '인생 선셋 리조트',
    title: '오션뷰 스파 리조트 객실 (최대 8인) + 2인 스파티켓',
  },
];

const TodayGongguChunk: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'explore' | 'my'>('top');

  return (
    <div className="relative min-h-screen bg-gray-50 pb-[75px]"> {/* 하단 내비게이션 바를 위한 하단 패딩 */}
      <div className="p-4"> {/* 메인 콘텐츠를 위한 패딩 */}
        {/* 청크에 포함되지 않은 상단 콘텐츠이지만, 시각적 완성을 위해 추가 */}
        <div className="mb-4">
          <h2 className="font-pretendard-bold text-lg text-gray-900">추천 공구</h2>
          <p className="font-pretendard text-sm text-gray-600">
            지금 가장 핫한 공구를 만나보세요!
          </p>
        </div>
        <ProductGrid products={dummyProducts} />
      </div>

      <BottomNavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default TodayGongguChunk;