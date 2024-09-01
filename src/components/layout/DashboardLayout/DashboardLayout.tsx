import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] p-4">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
