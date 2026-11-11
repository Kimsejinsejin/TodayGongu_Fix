import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  category: string;
  creatorAvatarUrl: string;
  creatorName: string;
  followerCount: string;
  subtitle?: string; // 예: "대구 아쿠아리움"
  title: string; // 예: "대구 아쿠아리움 입장권"
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  category,
  creatorAvatarUrl,
  creatorName,
  followerCount,
  subtitle,
  title,
}) => {
  return (
    <div
      tabIndex={0}
      className="flex-1 flex flex-col gap-3 active:opacity-90 cursor-pointer transition-opacity duration-150 group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
        {/* 메인 상품 이미지 */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-120 linear group-hover:scale-105"
            priority={false}
            loading="lazy"
          />
        </div>

        {/* 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0) 64%, rgba(0, 0, 0, 0.75) 100%)',
          }}
        ></div>

        {/* 카테고리 태그 */}
        <div className="absolute left-0 top-0 h-[30px] flex items-center justify-center bg-black px-2 rounded-br-md">
          <div className="font-pretendard-semibold text-12px text-gray-100">
            {category}
          </div>
        </div>

        {/* 크리에이터 정보 */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-row items-center gap-6px">
          <div className="size-4 shrink-0 rounded-full overflow-hidden">
            <Image
              src={creatorAvatarUrl}
              alt={`${creatorName} 아바타`}
              width={16}
              height={16}
              className="object-cover object-center"
              priority={false}
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-row items-center gap-1">
            <div className="font-pretendard-medium shrink text-11px text-white truncate">
              {creatorName}
            </div>
            <div className="size-2px shrink-0 rounded-full bg-white/80"></div>
            <div className="font-pretendard-medium shrink-0 text-11px text-white">
              {followerCount}
            </div>
          </div>
        </div>
      </div>

      {/* 텍스트 상세 정보 */}
      <div className="flex flex-col gap-1 px-10px">
        <div className="flex flex-row items-center gap-1">
          {subtitle && (
            <div className="font-pretendard-bold text-12px text-gray-800">
              {subtitle}
            </div>
          )}
          <div className="font-pretendard-medium shrink-0 text-10px text-primary-blue">
            여행
          </div>
        </div>
        <div className="font-pretendard text-13px text-gray-800">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;