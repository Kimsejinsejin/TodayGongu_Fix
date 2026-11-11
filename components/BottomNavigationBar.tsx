'use client';

import React from 'react';
import { LuBarChart3, LuSearch, LuUser2 } from 'lucide-react'; // lucide-react에서 아이콘 임포트

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      tabIndex={0}
      className={`h-14 flex-1 flex flex-col items-center justify-start gap-1 py-9px active:opacity-80 transition-opacity duration-150`}
      onClick={onClick}
    >
      <div className="size-6 shrink-0 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, {
          className: `size-6 ${isActive ? 'text-primary-orange' : 'text-gray-400'}`,
        })}
      </div>
      <div
        className={`font-pretendard-medium text-11px ${
          isActive ? 'text-primary-orange' : 'text-gray-400'
        }`}
      >
        {label}
      </div>
    </button>
  );
};

interface BottomNavigationBarProps {
  activeTab?: 'top' | 'explore' | 'my';
  onTabChange?: (tab: 'top' | 'explore' | 'my') => void;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  activeTab = 'top',
  onTabChange = () => {},
}) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px -5px 52.4px 0px',
      }}
    >
      <div
        className="flex flex-row bg-black"
        style={{
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          minHeight: '75px',
          overflow: 'hidden',
          paddingTop: '10px',
          paddingBottom: '9px',
        }}
      >
        <NavItem
          icon={<LuBarChart3 />} // 실시간 TOP 아이콘
          label="실시간 TOP"
          isActive={activeTab === 'top'}
          onClick={() => onTabChange('top')}
        />
        <NavItem
          icon={<LuSearch />} // 공구 탐색 아이콘
          label="공구 탐색"
          isActive={activeTab === 'explore'}
          onClick={() => onTabChange('explore')}
        />
        <NavItem
          icon={<LuUser2 />} // 마이 아이콘
          label="마이"
          isActive={activeTab === 'my'}
          onClick={() => onTabChange('my')}
        />
      </div>
    </div>
  );
};

export default BottomNavigationBar;