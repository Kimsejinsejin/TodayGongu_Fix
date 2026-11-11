import Image from 'next/image';

interface TomorrowDealCardProps {
  id: string;
  imageUrl: string;
  dateRange: string; // 예: "09.15~01.01"
  dDay: string; // 예: "D-105"
  orderNumber: number; // 예: 20
  creatorInfo: string; // 예: "장아람(지운맘) | 국내여행 | 해외여행 X 인생 선셋 리조트"
  title: string; // 예: "오션뷰 스파 리조트 객실 (최대 8인) + 2인 스파티켓"
}

export function TomorrowDealCard({
  id,
  imageUrl,
  dateRange,
  dDay,
  orderNumber,
  creatorInfo,
  title,
}: TomorrowDealCardProps) {
  return (
    <div
      tabIndex={0} // 키보드 접근성을 위해 tabindex 추가
      className="relative flex h-[188px] w-[400px] cursor-pointer flex-row items-start gap-3 overflow-hidden rounded-[10.7px] bg-white active:opacity-90"
      // 카드 전체 너비는 이미지 너비 + 텍스트 너비 + gap-3(12px)을 고려하여 400px로 설정
    >
      {/* 이미지 컨테이너 */}
      <div className="relative h-[187.5px] w-[150px] flex-shrink-0 overflow-hidden rounded-[10.7px] bg-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 150px, 150px"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 ease-in-out hover:scale-105" // 호버 애니메이션
          priority={false} // 첫 로딩 시 중요하지 않은 이미지로 설정
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-1 flex-col justify-between py-[9px] pr-3">
        {/* 상단 배지 (D-Day, 날짜 범위) */}
        <div className="flex flex-row items-center gap-[6px]">
          <div className="rounded-[2px] bg-primary px-[6px] py-[3px]">
            <span className="font-pretendard text-[10px] font-semibold leading-[14px] text-white">
              {dDay}
            </span>
          </div>
          <div className="rounded-[2px] bg-gray-200 px-[6px] py-[3px]">
            <span className="font-pretendard text-[10px] font-semibold leading-[14px] text-gray-800">
              {dateRange}
            </span>
          </div>
        </div>

        {/* 중단 정보 (순서 번호, 크리에이터 정보) */}
        <div className="mt-auto flex flex-col gap-1"> {/* mt-auto로 하단에 정렬 */}
          <div className="flex flex-row items-center gap-2">
            <div className="rounded-[2px] bg-gray-800 px-[6px] py-[2px]">
              <span className="font-pretendard text-[10px] font-semibold leading-[14px] text-gray-100">
                {orderNumber}
              </span>
            </div>
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-pretendard text-[10px] font-medium leading-[14px] text-gray-800">
              {creatorInfo}
            </span>
          </div>

          {/* 하단 제목 */}
          <h3 className="line-clamp-2 font-pretendard text-[16px] font-bold leading-[22px] text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}