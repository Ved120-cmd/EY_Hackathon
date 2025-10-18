import React from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    // Outer container with background and shadow
    <div className='border border-gray-200 shadow-md bg-white '>
      
      
      <nav className='flex items-center justify-between p-4'>
        
        
        <div className='flex text-xl font-bold tracking-wider'>
            <Shield className='text-green-400'/>
            <span>Provider Validation</span>
        </div>
        
        
        <div>
          
          <ul className='flex space-x-6 items-center'>
            
            
            <li className='text-blue-500 hover:text-gray-300 transition duration-150'>
              
              <a href="/dashboard">Dashboard</a>
            </li>
            
            
            <li className='text-grey-300 hover:text-blue-500 transition duration-150'>
              <a href="/incorrect-data">Incorrect data</a>
            </li>
            
            
            <li className='hover:text-gray-300 transition duration-150'>
              <a href="/veddes">veddes</a>
            </li>
            
            
            <li>
              <button 
                className='border border-1 hover:bg-green-700 cursor-pointer text-black font-medium py-1 px-3 rounded transition duration-150'
                
                onClick={() => console.log('Handling Logout...')} 
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;