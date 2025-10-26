import React, { useState } from 'react';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const API_URL = 'http://localhost:5000/api/auth';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter all fields');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const endpoint = activeTab === 'login' ? '/login' : '/signup';
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Something went wrong');
      }

      if (activeTab === 'login') {
        // Store token in AuthContext
        login(data.token, { email });
        setSuccess('Login successful! Redirecting to dashboard...');
        console.log('JWT Token:', data.token);
        
        // Redirect to dashboard
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setSuccess('Account created successfully! Please login.');
        setActiveTab('login');
        setEmail('');
        setPassword('');
      }

    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 p-4'>
      <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md'>
        
        <div className='flex flex-col items-center text-center mb-8'>
          <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6'>
            <Shield className='text-blue-600 w-8 h-8' />
          </div>
          <h1 className='text-2xl font-bold text-gray-800 mb-2'>Provider Validation Platform</h1>
          <p className='text-sm text-gray-500'>Sign in to access the AI-powered validation dashboard</p>
        </div>
        
        {error && (
          <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start'>
            <AlertCircle className='text-red-600 w-5 h-5 mr-3 flex-shrink-0 mt-0.5' />
            <p className='text-sm text-red-800'>{error}</p>
          </div>
        )}

        {success && (
          <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start'>
            <CheckCircle className='text-green-600 w-5 h-5 mr-3 flex-shrink-0 mt-0.5' />
            <p className='text-sm text-green-800'>{success}</p>
          </div>
        )}
        
        <div className='flex w-full mb-8 border border-gray-200 rounded-lg overflow-hidden'>
          <button
            className={`flex-1 py-3 text-lg font-medium transition-colors duration-200 
              ${activeTab === 'login' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            onClick={() => handleTabSwitch('login')}
            disabled={loading}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 text-lg font-medium transition-colors duration-200 
              ${activeTab === 'signup' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            onClick={() => handleTabSwitch('signup')}
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
        
        <div className='w-full text-left mb-6 space-y-5'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              disabled={loading}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='••••••••'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              disabled={loading}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed'
            />
            {activeTab === 'signup' && (
              <p className='text-xs text-gray-500 mt-1'>Must be at least 6 characters</p>
            )}
          </div>

          <button 
            onClick={handleSubmit}
            disabled={loading}
            className='w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center'
          >
            {loading ? (
              <>
                <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Processing...
              </>
            ) : (
              activeTab === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>
        </div>

        {activeTab === 'login' && (
          <p className='text-center text-sm text-gray-500'>
            Don't have an account?{' '}
            <button
              onClick={() => handleTabSwitch('signup')}
              className='text-blue-600 hover:text-blue-700 font-medium'
              disabled={loading}
            >
              Sign up
            </button>
          </p>
        )}

      </div>
    </div>
  );
};

export default LoginPage;