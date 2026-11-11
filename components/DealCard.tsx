"use client";

import Image from "next/image";
import React from "react";

interface DealCardProps {
  id: number;
  imageUrl: string;
  dateRange: string;
  rank: number;
  creatorInfo: string;
  productTitle: string;
}

const DealCard: React.FC<DealCardProps> = ({
  imageUrl,
  dateRange,
  rank,
  creatorInfo,
  productTitle,
}) => {
  return (
    <div
      tabIndex={0}
      className="relative h-[275px] w-[220px] overflow-hidden rounded-[12px] active:opacity-90 cursor-pointer"
    >
      {/* Image Container */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={productTitle}
          fill
          priority={false} // Adjust based on your needs
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-120ms linear group-hover:scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0) 64%, rgb(0, 0, 0) 100%)",
        }}
      ></div>

      {/* Date Range Badge */}
      <div className="absolute left-3 top-[9px] flex flex-row gap-[6px]">
        <div className="rounded-[2px] bg-today-light-gray px-[6px] py-[3px]">
          <div
            dir="auto"
            className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-800"
          >
            {dateRange}
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
        {/* Rank and Creator Info */}
        <div className="flex flex-row items-center gap-2">
          <div className="rounded bg-today-dark px-[6px] py-[2px]">
            <div
              dir="auto"
              className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-100"
            >
              {rank}
            </div>
          </div>
          <div
            dir="auto"
            className="flex-1 font-pretendard-medium text-[10px] leading-[14px] text-white overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {creatorInfo}
          </div>
        </div>
        {/* Product Title */}
        <div
          dir="auto"
          className="font-pretendard-bold text-[18px] leading-[25px] text-gray-100 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {productTitle}
        </div>
      </div>
    </div>
  );
};

export default DealCard;