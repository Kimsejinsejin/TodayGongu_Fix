import React from 'react';
import Image from 'next/image';

interface GongguItemCardProps {
  id: string;
  imageSrc: string;
  category: string;
  dateRange: string;
  title: string;
  creatorImageSrc: string;
  creatorName: string;
  followers: string;
}

const GongguItemCard: React.FC<GongguItemCardProps> = ({
  id,
  imageSrc,
  category,
  dateRange,
  title,
  creatorImageSrc,
  creatorName,
  followers,
}) => {
  return (
    <div className="flex h-[188px] w-[275px] shrink-0 flex-row items-start gap-3">
      {/* Image Section */}
      <div className="relative h-full w-[150px] overflow-hidden rounded-[10.7px] bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 150px, 150px"
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[94px] rounded-b-[10.7px]"
          style={{ backgroundImage: 'linear-gradient(rgba(118, 118, 118, 0), rgba(0, 0, 0, 0.7))' }}
        />
        {/* Category Tag */}
        <div className="absolute left-[10px] top-[7px] rounded-[5px] bg-primary px-[5px] py-[2px]">
          <span className="font-pretendard-semibold text-[9px] leading-[13px] text-gray-100">
            {category}
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex h-full flex-1 flex-col justify-between py-[2px]">
        <div className="flex flex-col gap-2">
          {/* Date Range */}
          <div className="self-start rounded-[2px] bg-brand-light-gray px-[6px] py-[3px]">
            <span className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-800">
              {dateRange}
            </span>
          </div>
          {/* Title */}
          <h4 className="line-clamp-2 font-pretendard-semibold text-[14px] leading-[20px] text-gray-900">
            {title}
          </h4>
          {/* Creator Info */}
          <div className="flex flex-row items-center gap-1.5">
            <div className="relative size-6 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={creatorImageSrc}
                alt={creatorName}
                fill
                sizes="24px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="line-clamp-1 shrink font-pretendard-medium text-[11px] leading-[15px] text-gray-800">
              {creatorName}
            </span>
            <div className="size-[2px] shrink-0 rounded-full bg-gray-600" />
            <span className="shrink-0 font-pretendard-medium text-[11px] leading-[15px] text-gray-800">
              {followers}
            </span>
          </div>
        </div>
        {/* Call to Action Button */}
        <button className="flex h-[30px] items-center justify-center rounded bg-black text-white active:opacity-80">
          <span className="font-pretendard-bold text-[12px] leading-[17px] text-gray-100">
            오픈 알림 받기
          </span>
        </button>
      </div>
    </div>
  );
};

export default GongguItemCard;