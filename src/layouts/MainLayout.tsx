import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

function MainLayout() {
  return (
    <div className={'bg-[#f6f6f6] h-screen w-screen overflow-x-hidden'}>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
