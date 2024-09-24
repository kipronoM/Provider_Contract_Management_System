// import React, { useState } from 'react';
// import './LoginPage.css';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin') {
//       setRole('admin');
//       onLogin('admin');
//     } else if (username === 'user' && password === 'user') {
//       setRole('user');
//       onLogin('user');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleUsernameChange = (e) => {
//     const value = e.target.value;
//     setUsername(value);
//     if (value === 'admin') {
//       setRole('admin');
//     } else {
//       setRole('user');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-header">Provider Contracts Management</div>
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <div className="form-group">
//           <label>Username</label>
//           <input type="text" value={username} onChange={handleUsernameChange} required />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Role</label>
//           <input type="text" value={role} readOnly />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        onLogin(response.data.role);
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
        <div className="login-page">
          <div className="login-header">Provider Contracts Management</div>
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      );
};

export default LoginPage;