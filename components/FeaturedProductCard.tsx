import Image from 'next/image';
import React from 'react';

interface FeaturedProductCardProps {
  imageSrc: string;
  dateRange: string;
  topTag?: string; // (예: 품절대란 전집) 날짜 범위 아래의 검은색 태그
  creatorAvatarSrc: string;
  creatorName: string;
  followers: string;
  brand?: string; // (예: 베이비마더스)
  brandCategory: string; // (예: 키즈/육아)
  productTitle: string;
  price?: string; // (예: 84,000원) 특수 카드나 가격이 없는 경우 선택 사항
  specialOverlay?: boolean; // 특수 오버레이 (예: "혹시 이거 아세요?" 카드) 여부
  overlayTitle?: string; // 특수 오버레이 제목
  overlaySubtitle?: string; // 특수 오버레이 부제목
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  imageSrc,
  dateRange,
  topTag,
  creatorAvatarSrc,
  creatorName,
  followers,
  brand,
  brandCategory,
  productTitle,
  price,
  specialOverlay,
  overlayTitle,
  overlaySubtitle,
}) => {
  return (
    // 개별 카드 컨테이너
    <div className="flex flex-1 flex-col gap-3 cursor-pointer">
      {/* 이미지 섹션 */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-md">
        <Image
          src={imageSrc}
          alt={productTitle}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // 반응형 이미지 사이즈
          className="object-cover transition-transform duration-120 linear hover:scale-105" // 호버 시 확대 효과
          priority={false} // LCP 이미지가 아니므로 priority 비활성화
        />
        {/* 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 64%, rgba(0, 0, 0, 0.75) 100%)',
          }}
        ></div>

        {/* 날짜 범위 - 이미지 좌측 상단 */}
        <div className="absolute left-2 top-2 z-10 flex items-center justify-center px-1.5 py-0.5 bg-black rounded-[4px]">
            <span className="font-pretendard text-[11px] font-semibold text-white leading-none">
                {dateRange}
            </span>
        </div>

        {/* 상단 태그 - 날짜 범위 바로 아래 (선택 사항) */}
        {topTag && (
          <div className="absolute left-2 top-[34px] z-10 flex items-center justify-center bg-black px-2 h-[24px] rounded-[4px]">
            <span className="font-pretendard text-[11px] font-semibold text-gray-100 leading-none">
              {topTag}
            </span>
          </div>
        )}

        {/* 크리에이터 정보 - 이미지 하단 */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-row items-center gap-[6px] z-10">
          <div className="relative size-4 shrink-0 rounded-full overflow-hidden">
            <Image
              src={creatorAvatarSrc}
              alt={creatorName}
              fill
              sizes="16px"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="flex-1 flex flex-row items-center gap-1 min-w-0">
            <span className="font-pretendard text-[11px] font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
              {creatorName}
            </span>
            <div className="size-[2px] shrink-0 rounded-full bg-white/80"></div>
            <span className="font-pretendard text-[11px] font-medium shrink-0 text-white whitespace-nowrap">
              팔로워 {followers}
            </span>
          </div>
        </div>

        {/* 특수 오버레이 - (예: "혹시 이거 아세요?" 카드) 이미지 중앙 하단 */}
        {specialOverlay && (
          <div className="absolute inset-x-0 bottom-0 top-[50%] flex flex-col justify-end p-2 pb-14 z-10">
            {overlayTitle && <p className="font-pretendard text-[15px] font-bold text-black mb-1 leading-tight">{overlayTitle}</p>}
            {overlaySubtitle && <p className="font-pretendard text-[13px] text-gray-700 leading-tight">{overlaySubtitle}</p>}
          </div>
        )}
      </div>

      {/* 이미지 아래 텍스트 콘텐츠 */}
      <div className="flex flex-col gap-1 px-[2px]">
        {/* 브랜드 및 카테고리 */}
        <div className="flex flex-row items-center gap-1">
          {brand && (
            <p className="font-pretendard text-[12px] font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
              {brand}
            </p>
          )}
          <p className="font-pretendard text-[10px] font-medium shrink-0 text-blue-500 whitespace-nowrap">
            {brandCategory}
          </p>
        </div>
        {/* 상품 제목 */}
        <p className="font-pretendard text-[13px] text-gray-800 line-clamp-2 leading-snug">
          {productTitle}
        </p>
        {/* 가격 (선택 사항) */}
        {price && (
          <div className="flex flex-row items-center gap-[2px]">
            <p className="font-pretendard text-[14px] font-bold text-black">
              {price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductCard;