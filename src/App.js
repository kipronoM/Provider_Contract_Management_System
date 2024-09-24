// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
// //import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
// import HomePage from './HomePage';
// import AdminHomePage from './AdminHomePage';
// import ContractsPage from './ContractsPage';
// import EditContractPage from './EditContractPage';
// import Reports from './Reports';
// import LoginPage from './LoginPage';
// import './App.css';
// import logo from './Logo.png';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState('');

//   const handleLogin = (role) => {
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserRole('');
//   };

//   return (
//     <Router>
//       <div className="app">
//         {isAuthenticated ? (
//           <>
//             <Header onLogout={handleLogout} />
//             <Routes>
//               <Route path="/home" element={<HomePage />} />
//               <Route path="/contracts" element={<ContractsPage />} />
//               <Route path="/edit-contract" element={<EditContractPage />} />
//               <Route path="/admin" element={<AdminHomePage />} />
//               <Route path="/Reports" element={<Reports />} />
//               <Route path="*" element={<Navigate to={userRole === 'admin' ? '/admin' : '/home'} />} />
//             </Routes>
//           </>
//         ) : (
//           <Routes>
//             <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         )}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// const Header = ({ onLogout }) => (
//   <header className="header">
//     <div className="logo">
//     <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
//     </div>
//     <nav className="nav">
//       <Link to="/home">Home</Link>
//       <Link to="/contracts">Contracts</Link>
//       <Link to="/reports">Reports</Link>
//       <Link to="/settings">Settings</Link>
//       <Link to="/help">About</Link>
//     </nav>
//     <div className="profile">
//       <img src="https://via.placeholder.com/40" alt="Profile" />
//       <span>User Name</span>
//       <button onClick={onLogout}>Logout</button>
//     </div>
//   </header>
// );

// const Footer = () => (
//   <footer className="footer">
//     <Link to="/about">About Us</Link>
//     <Link to="/contact">Contact Us</Link>
//     <Link to="/privacy">Privacy Policy</Link>
//     <Link to="/terms">Terms of Service</Link>
//   </footer>
// );

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AdminHomePage from './AdminHomePage';
import ContractsPage from './ContractsPage';
import EditContractPage from './EditContractPage';
import Reports from './Reports';
import LoginPage from './LoginPage';
import { VerifyUser, ResetPassword } from './verificationAndReset';
import ForgotPassword from './ForgotPassword';
import './App.css';
import logo from './Logo.png';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated ? (
          <>
            <Header onLogout={handleLogout} userRole={userRole}/>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/contracts" element={<ContractsPage />} />
              <Route path="/edit-contract/:id" element={<EditContractPage />} />
              <Route path="/admin" element={userRole === 'Admin' ? <AdminHomePage /> : <Navigate to="/home" />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to={userRole === 'Admin' ? '/admin' : '/home'} />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/verify/:token" element={<VerifyUser />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
        <Footer />
      </div>
    </Router>
  );
};

const Header = ({ onLogout,userRole }) => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
    </div>
    <nav className="nav">
      <Link to="/home">Home</Link>
      <Link to="/contracts">Contracts</Link>
      <Link to="/reports">Reports</Link>
      {userRole === 'Admin' && <Link to="/admin">Admin</Link>}
      <Link to="/settings">Settings</Link>
      <Link to="/help">About</Link>
    </nav>
    <div className="profile">
      <img src="https://via.placeholder.com/40" alt="Profile" />
      <span>User Name</span>
      <button onClick={onLogout}>Logout</button>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/privacy">Privacy Policy</Link>
    <Link to="/terms">Terms of Service</Link>
  </footer>
);

export default App;
