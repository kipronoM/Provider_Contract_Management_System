// // VerifyUser.js
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const VerifyUser = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     try {
//       await axios.post(`http://localhost:5000/api/users/verify/${token}`, { password });
//       alert('Account verified and password set successfully');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error verifying account:', error);
//       alert('Error verifying account. Please try again.');
//     }
//   };

//   return (
//     <div className="verify-user">
//       <h2>Set Your Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="password" 
//           placeholder="New Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChange={(e) => setConfirmPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Set Password</button>
//       </form>
//     </div>
//   );
// };



// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     try {
//       await axios.post(`http://localhost:5000/api/users/reset-password/${token}`, { password });
//       alert('Password reset successfully');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       alert('Error resetting password. Please try again.');
//     }
//   };

//   return (
//     <div className="reset-password">
//       <h2>Reset Your Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="password" 
//           placeholder="New Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChange={(e) => setConfirmPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export { VerifyUser, ResetPassword };

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PasswordForm = ({ title, submitAction, navigateTo }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await submitAction(token, password);
      alert(`${title} successfully`);
      navigate(navigateTo);
    } catch (error) {
      console.error(`Error ${title.toLowerCase()}:`, error);
      alert(`Error ${title.toLowerCase()}. Please try again.`);
    }
  };

  return (
    <div className={title.toLowerCase().replace(' ', '-')}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          placeholder="New Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <button type="submit">{title}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

const VerifyUser = () => (
  <PasswordForm 
    title="Set Your Password"
    submitAction={(token, password) => 
      axios.post(`http://localhost:5000/api/users/verify/${token}`, { password })
    }
    navigateTo="/login"
  />
);

const ResetPassword = () => (
  <PasswordForm 
    title="Reset Your Password"
    submitAction={(token, password) => 
      axios.post(`http://localhost:5000/api/users/reset-password/${token}`, { password })
    }
    navigateTo="/login"
  />
);

export { VerifyUser, ResetPassword };