import Image from 'next/image';
import React from 'react';

interface CountdownItemCardProps {
  dateRange: string;
  imageUrl: string;
  itemNumber: number;
  mainTitle: string; // 이미지 오버레이와 하단에 모두 표시되는 메인 제목
  creatorDescription: string; // 이미지 오버레이의 작은 설명 텍스트
}

const CountdownItemCard: React.FC<CountdownItemCardProps> = ({
  dateRange,
  imageUrl,
  itemNumber,
  mainTitle,
  creatorDescription,
}) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer active:opacity-90">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl}
          alt={mainTitle}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority // 페이지 로드 시 중요한 이미지로 설정
        />
        {/* 하단에 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0"></div>

        {/* 날짜 범위 태그 */}
        <div className="absolute left-2 top-2 flex h-[26px] items-center justify-center rounded-[4px] bg-white px-2">
          <span className="font-pretendard-medium text-[11px] text-gray-800">
            {dateRange}
          </span>
        </div>

        {/* 이미지 하단의 오버레이 콘텐츠 */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
          <div className="flex items-center gap-[6px]">
            <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-black">
              <span className="font-pretendard-semibold text-[11px] text-white">
                {itemNumber}
              </span>
            </div>
            <p className="font-pretendard-semibold truncate text-[13px] text-white">
              {mainTitle}
            </p>
          </div>
          <p className="font-pretendard-medium truncate text-[11px] text-white opacity-80">
            {creatorDescription}
          </p>
        </div>
      </div>

      {/* 이미지 아래 텍스트 콘텐츠 */}
      <div className="px-1">
        <p className="font-pretendard-bold leading-tight text-[13px] text-gray-800">
          {mainTitle}
        </p>
      </div>
    </div>
  );
};

export default CountdownItemCard;