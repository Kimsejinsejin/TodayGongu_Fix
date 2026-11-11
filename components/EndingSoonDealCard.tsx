import Image from 'next/image';
import React from 'react';

interface EndingSoonDealCardProps {
  dateRange: string;
  imageUrl: string;
  rank: number;
  title: string;
  description: string;
}

const EndingSoonDealCard: React.FC<EndingSoonDealCardProps> = ({
  dateRange,
  imageUrl,
  rank,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer active:opacity-90">
      {/* Date Range */}
      <div className="font-pretendard text-[11px] text-gray-500">{dateRange}</div>

      {/* Image with overlay */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-card-gradient-overlay"
          aria-hidden="true"
        ></div>

        {/* Rank and Title on Image */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-col">
          <div className="flex items-center gap-1 text-white">
            <span className="font-pretendard-bold text-[15px]">{rank}</span>
            <span className="font-pretendard text-[13px] line-clamp-2">{title}</span>
          </div>
          <div className="font-pretendard text-[11px] text-gray-300 line-clamp-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default EndingSoonDealCard;