import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardNavbar from '../../ui/DashboardNavbar';
import Navbar from '../../shared/Navbar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] p-4">
        <Sidebar />
      </div>
      <div className="w-[100%] md:w-[92%] lg:w-[100%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {/* <DashboardNavbar />
         */}
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
