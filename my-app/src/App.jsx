import { useState } from 'react'
import './App.css'

// Import all necessary components and router elements
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './components/MainLayout.jsx'
import Dashboard from './components/Dashboard.jsx' 
import LoginPage from './pages/LoginPage.jsx'
// import IncorrectDataPage from './pages/IncorrectDataPage.jsx'
// import VeddesPage from './pages/VeddesPage.jsx'


function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Routes>
          
          {/* Public route - Login */}
          <Route path='/login' element={<LoginPage />} />
          
          {/* Protected routes - wrapped with ProtectedRoute */}
          <Route element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path='/' element={<Dashboard />} /> 
            {/* <Route path='/incorrect-data' element={<IncorrectDataPage />} /> */}
            {/* <Route path='/veddes' element={<VeddesPage />} /> */}
          </Route>
          
          {/* Optional: 404 Catch-all */}
          <Route path='*' element={<h1>404: Page Not Found</h1>} />
          
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App