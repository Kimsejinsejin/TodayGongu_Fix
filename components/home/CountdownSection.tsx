'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Optional: if you need navigation buttons
import 'swiper/css/pagination'; // Optional: if you need pagination dots
import { DealCard } from '../common/DealCard';

// Dummy data for deal cards
const countdownDealCards = [
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789360000667249_c701f358.jpg',
    dateRange: '09.15~09.19',
    rank: 1,
    creatorInfo: '오프유 | 민선 | 베이비마더스',
    productTitle: '베이비마더스 전집 16...',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789315281115176_2e8329d0.jpg',
    dateRange: '09.15~09.19',
    rank: 2,
    creatorInfo: '꾸아맘 | 육아맘 소개주는 동네엄마 X 푸...',
    productTitle: '핸드메이드 패브릭 장난감...',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789043884372746_6cc3fa32.jpg',
    dateRange: '09.14~09.18',
    rank: 3,
    creatorInfo: '이선주ㅣ워니럽마켓 | 육아 필수템 최저가 만물상 X 추피',
    productTitle: '추피보드북 풀세트 (사랑해요 시리즈 6권+배워봐요 시리즈 4권)',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1788955410668969_97d38b48.jpg',
    dateRange: '09.14~09.19',
    rank: 4,
    creatorInfo: '⋆◡̎⋆ 슬기어트ㅣ다이어트식단ㅣ간편식단 X 비프리',
    productTitle: '밀폐용기',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789360000667249_c701f358.jpg',
    dateRange: '09.14~09.19',
    rank: 5,
    creatorInfo: '포유홈 𝕗𝕠𝕣 𝕪𝕠𝕦 𝕙𝕠𝕞𝕖 X 큐피온',
    productTitle: '나노프로텍트',
  },
  {
    imageSrc: 'https://d28s0oekm6yyba.cloudfront.net/gonggu_tracker/posting_pieces/images/2026/09/gonggu_posting_piece_1789315281115176_2e8329d0.jpg',
    dateRange: '09.15~09.19',
    rank: 6,
    creatorInfo: '도토맘 | 아기랑 가볼만한곳 | 육아꿀팁 X 무스텔라',
    productTitle: '이드라베베 바디 로션 500ml',
  },
];

export function CountdownSection() {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setHours(23, 59, 59, 999); // Set to end of current day
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if ((timeLeft as any)[interval] < 10) {
      timerComponents.push(
        <span key={interval}>{'0' + (timeLeft as any)[interval]}</span>
      );
    } else {
      timerComponents.push(
        <span key={interval}>{(timeLeft as any)[interval]}</span>
      );
    }
    if (index < Object.keys(timeLeft).length - 1) {
      timerComponents.push(<span key={`colon-${interval}`}>:</span>);
    }
  });

  return (
    <div className="flex flex-col gap-2 bg-main-bg px-0 pb-8 pt-8">
      <div className="flex flex-col gap-1 px-5 pb-4">
        <div className="flex h-6 flex-row items-center justify-center gap-1 self-start rounded bg-primary-light px-2">
          <div className="size-1 rounded-full bg-live-green" />
          <span className="font-pretendard text-10px font-semibold leading-14px text-primary">
            36분 전 업데이트
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-pretendard text-22px font-bold leading-31px text-neutral-title">
            마감까지{' '}
            <span className="text-primary">
              {timerComponents.length ? timerComponents : <span>00:00:00</span>}
            </span>
          </h2>
          <button className="self-stretch">
            <span className="font-pretendard text-12px font-medium leading-17px text-gray-link underline active:opacity-70">
              전체보기
            </span>
          </button>
        </div>
        <p className="font-pretendard text-12px font-semibold leading-17px text-gray-text">
          오늘 자정하면 비싸지는 공구, 잘 팔리는 순서대로 모았어요
        </p>
      </div>

      <div className="mt-2">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12} // gap-3 (12px)
          freeMode={true}
          className="mySwiper"
          slidesOffsetBefore={20} // padding-left: 20px
          slidesOffsetAfter={20} // padding-right: 20px
        >
          {countdownDealCards.map((card, index) => (
            <SwiperSlide key={index} style={{ width: '220px' }}>
              <DealCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}