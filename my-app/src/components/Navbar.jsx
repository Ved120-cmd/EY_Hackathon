import React from 'react';
import { Shield, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Extract username from email (part before @)
  const getUsername = () => {
    if (user && user.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  return (
    <div className='border border-gray-200 shadow-md bg-white'>
      <nav className='flex items-center justify-between p-4'>
        <div className='flex text-xl font-bold tracking-wider'>
          <Shield className='text-green-400'/>
          <span>Provider Validation</span>
        </div>
        
        <div>
          <ul className='flex space-x-6 items-center'>
            <li className='text-blue-500 hover:text-gray-300 transition duration-150'>
              <Link to="/">Dashboard</Link>
            </li>
            
            <li className='text-grey-300 hover:text-blue-500 transition duration-150'>
              <Link to="/incorrect-data">Validation Status</Link>
            </li>
            
            {/* Show username if logged in */}
            {isAuthenticated() && (
              <li className='flex items-center gap-2 text-gray-700 font-medium'>
                <User className='w-4 h-4' />
                <span>{getUsername()}</span>
              </li>
            )}
            
            <li className='hover:text-gray-300 transition duration-150 cursor-pointer'>
              <Link to="/kpi">KPI</Link>
            </li>
            
            <li>
              {isAuthenticated() ? (
                <button 
                  className='border border-1 hover:bg-red-600 hover:text-white cursor-pointer text-black font-medium py-1 px-3 rounded transition duration-150'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button 
                  className='border border-1 hover:bg-green-700 hover:text-white cursor-pointer text-black font-medium py-1 px-3 rounded transition duration-150'
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;