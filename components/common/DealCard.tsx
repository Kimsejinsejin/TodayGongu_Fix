import React from 'react';
import Image from 'next/image';

interface DealCardProps {
  imageSrc: string;
  dateRange: string;
  rank?: number; // Optional for cards without rank
  creatorInfo: string;
  productTitle: string;
  isExpired?: boolean; // New prop to handle expired state (dimming)
}

export function DealCard({ imageSrc, dateRange, rank, creatorInfo, productTitle, isExpired = false }: DealCardProps) {
  return (
    <div className="relative h-[275px] w-[220px] overflow-hidden rounded-[12px] shadow-sm active:opacity-90">
      <div className={`absolute inset-0 size-full ${isExpired ? 'opacity-50' : ''}`}>
        <Image
          src={imageSrc}
          alt={productTitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 64%, rgb(0, 0, 0) 100%)',
        }}
      />
      <div className="absolute left-3 top-[9px] flex flex-row gap-[6px]">
        {dateRange.startsWith('D-') && (
          <div className="rounded-[2px] bg-primary px-[6px] py-[3px]">
            <span className="font-pretendard text-10px font-semibold leading-14px text-white">
              {dateRange}
            </span>
          </div>
        )}
        <div className="rounded-[2px] bg-gray-tag-bg px-[6px] py-[3px]">
          <span className="font-pretendard text-10px font-semibold leading-14px text-gray-text">
            {dateRange.startsWith('D-') ? dateRange.substring(dateRange.indexOf(' ') + 1) : dateRange}
          </span>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2">
          {rank !== undefined && (
            <div className="rounded bg-dark-tag-bg px-[6px] py-[2px]">
              <span className="font-pretendard text-10px font-semibold leading-14px text-gray-100">
                {rank}
              </span>
            </div>
          )}
          <p className="flex-1 font-pretendard text-10px font-medium leading-14px text-white truncate">
            {creatorInfo}
          </p>
        </div>
        <p className="font-pretendard text-18px font-bold leading-25px text-gray-100 line-clamp-2">
          {productTitle}
        </p>
      </div>
    </div>
  );
}