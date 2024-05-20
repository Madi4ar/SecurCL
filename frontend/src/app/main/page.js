'use client';
import Sidebar from '@/components/Sidebar';
import UserHeader from '@/components/UserHeader';
import UserPanel from './user-panel/page';
import { useState } from 'react';
import Events from './events/page';
import Files from './files/page';
import Friends from './friends/page';

export default function MainPage() {
  const [content, setContent] = useState('main');

  const renderContent = () => {
    switch (content) {
      case 'user-panel':
        return <UserPanel />;
      case 'events':
        return <Events />;
      case 'files':
        return <Files />;
      case 'friends':
        return <Friends />;
      default:
        return <UserPanel />;
    }
  };
  return (
    <>
      <div className="flex bg-[#E9F0F3]">
        <Sidebar setContent={setContent} />
        <div className="flex flex-col w-full">
          <UserHeader />
          {renderContent()}
        </div>
      </div>
    </>
  );
}
