import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

// Layout of the main app for registered users
export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
