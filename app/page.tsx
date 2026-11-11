import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import LiveGongguCard from '@/components/LiveGongguCard';
import GongguSearchSummary from '@/components/GongguSearchSummary';
import TrendingGongguSection from '@/components/TrendingGongguSection';
import MobileBottomNav from '@/components/MobileBottomNav';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-pretendard-regular">
      {/* Left Sidebar - Only visible on large screens */}
      <aside className="hidden lg:block w-[320px] shrink-0 bg-white border-r border-gray-100 pt-5 px-5">
        <h1 className="text-[28px] font-pretendard-bold text-gray-900 mb-2">오늘공구</h1>
        <p className="text-[15px] leading-[22px] text-gray-700 mb-6">
          매일 업데이트되는 실시간 공구.<br />
          지금 열린 할인만 모아서 보여드려요.
        </p>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="공구 검색"
            className="w-full h-[46px] rounded-[10px] bg-gray-50 border border-gray-200 pl-11 pr-4 text-gray-800 placeholder-gray-500 text-[15px] focus:outline-none focus:border-primary"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="mb-8">
          <h3 className="text-[13px] font-pretendard-semibold text-gray-800 mb-3">인기 브랜드</h3>
          <div className="flex flex-wrap gap-2">
            {['폴로', '아미', '데코아르', '경자국밥', '티니핑', '디어커스', '알텐바흐'].map((brand, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center h-[30px] rounded-[5px] bg-gray-100 px-3 text-[13px] text-gray-800 font-pretendard-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5 bg-white rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] text-center">
          <h3 className="text-[17px] font-pretendard-bold text-gray-900 mb-2">앱으로 더 편하게</h3>
          <p className="text-[13px] font-pretendard-medium text-gray-700 mb-4">QR 코드를 스캔해서 앱으로 만나보세요</p>
          <div className="flex justify-center items-center gap-4">
            {/* Placeholder for QR code image */}
            <div className="relative size-[100px] bg-gray-200 flex items-center justify-center rounded-lg">
              <Image src="/qr-code.png" alt="QR Code" fill style={{ objectFit: 'cover' }} className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center h-[40px] w-[120px] bg-black text-white rounded-lg text-[13px] font-pretendard-bold active:opacity-80">
                App Store
              </button>
              <button className="flex items-center justify-center h-[40px] w-[120px] bg-black text-white rounded-lg text-[13px] font-pretendard-bold active:opacity-80">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        <div className="relative mx-auto w-full max-w-[480px] bg-white pb-20 lg:pb-5 lg:min-h-screen">
          <Header /> {/* Global header (top right section) */}
          <CategoryTabs />
          <div className="px-5">
            <LiveGongguCard />
            <GongguSearchSummary />
          </div>
          <TrendingGongguSection />
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}