import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import Plans from "./Plans";
import MySubscription from "./MySubscription";
import AdminSubscriptions from "./AdminSubscriptions";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* plans... */}
     {tab === "plans" && <Plans />}
      {/* subscription */}
      {tab === "subscription" && <MySubscription />}
      {/* adminSubs  */}
      {tab === "adminSubs" && <AdminSubscriptions />}
     
    </div>
  );
}
