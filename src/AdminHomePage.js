// import './AdminHomePage.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminHomepage = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ firstName: '', lastName: '', staffId: '', email: '', username: '', password: '', role: 'user' });
//   const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);
//   const [userToEdit, setUserToEdit] = useState(null);
//   const [contracts, setContracts] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//     fetchContracts();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/users', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchContracts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/contracts', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setContracts(response.data);
//     } catch (error) {
//       console.error('Error fetching contracts:', error);
//     }
//   };

//   const handleAddUser = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/register', newUser, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchUsers();
//       setNewUser({ firstName: '', lastName: '', staffId: '', email: '', username: '', password: '', role: 'user' });
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   const handleEditClick = (user) => {
//     setUserToEdit({ ...user }); // Create a copy to avoid mutating state directly
//     setIsEditPanelOpen(true);
//   };

//   const handlePanelClose = () => {
//     setIsEditPanelOpen(false);
//     setUserToEdit(null);
//   };

//   const handleUserEdit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/users/${userToEdit._id}`, userToEdit, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchUsers();
//       handlePanelClose();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/users/${userId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchUsers();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (userToEdit) {
//       setUserToEdit({ ...userToEdit, [name]: value });
//     } else {
//       setNewUser({ ...newUser, [name]: value });
//     }
//   };

//   return (
//     <div className="admin-homepage">
//       <div className="admin-section">
//         <h2>Reports</h2>
//         <div className="report-cards">
//           <div className="report-card">
//             <h3>Monthly Contracts Report</h3>
//             <p>View detailed reports of contracts created, active, and expired each month.</p>
//             <button className="standard-button">View Report</button>
//           </div>
//           <div className="report-card">
//             <h3>Annual Financial Report</h3>
//             <p>Analyze the financial impact and value of contracts on an annual basis.</p>
//             <button className="standard-button">View Report</button>
//           </div>
//         </div>
//       </div>

//       <div className="admin-section">
//         <h2>User Management</h2>
//         <div className="user-management">
//           <div className="user-card">
//             <h3>Add New User</h3>
//             <form className="add-user-form" onSubmit={handleAddUser}>
//               <div className="form-group">
//                 <label>First Name</label>
//                 <input type="text" name="firstName" value={newUser.firstName} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={newUser.lastName} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Staff ID</label>
//                 <input type="text" name="staffId" value={newUser.staffId} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" name="email" value={newUser.email} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Username</label>
//                 <input type="text" name="username" value={newUser.username} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input type="password" name="password" value={newUser.password} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Role</label>
//                 <select name="role" value={newUser.role} onChange={handleChange} required>
//                   <option value="admin">Admin</option>
//                   <option value="user">User</option>
//                 </select>
//               </div>
//               <button type="submit" className="standard-button">Add User</button>
//             </form>
//           </div>
//           <div className="user-card">
//             <h3>Manage Users</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Role</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id}>
//                     <td>{user.username}</td>
//                     <td>{user.role}</td>
//                     <td>
//                       <button className="standard-button" onClick={() => handleEditClick(user)}>Edit</button>
//                       <button className="standard-button delete-button" onClick={() => handleDeleteUser(user._id)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className="admin-section">
//         <h2>Contract Details Management</h2>
//         <div className="contract-management">
//           <div className="contract-card">
//             <h3>View Contracts</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Contract ID</th>
//                   <th>Supplier ID</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Contract No</th>
//                   <th>Supplier Location</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {contracts.map((contract) => (
//                   <tr key={contract._id}>
//                     <td>{contract.contractId}</td>
//                     <td>{contract.supplierId}</td>
//                     <td>{contract.startDate}</td>
//                     <td>{contract.endDate}</td>
//                     <td>{contract.contractNo}</td>
//                     <td>{contract.supplierLocation}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button onClick={() => window.location.href = '/contract'} className="standard-button">Add Contract</button>
//           </div>
//           <div className="contract-card">
//             <h3>Edit Contracts</h3>
//             <p>Edit existing contract details.</p>
//             <button className="standard-button">Edit Contracts</button>
//           </div>
//         </div>
//       </div>

//       {isEditPanelOpen && (
//         <div className="overlay">
//           <div className="add-user-panel">
//             <h2>Edit User</h2>
//             <form className="add-user-form" onSubmit={handleUserEdit}>
//               <div className="form-group">
//                 <label>First Name</label>
//                 <input type="text" name="firstName" value={userToEdit.firstName} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={userToEdit.lastName} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Staff ID</label>
//                 <input type="text" name="staffId" value={userToEdit.staffId} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" name="email" value={userToEdit.email} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Username</label>
//                 <input type="text" name="username" value={userToEdit.username} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input type="password" name="password" value={userToEdit.password} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Role</label>
//                 <select name="role" value={userToEdit.role} onChange={handleChange} required>
//                   <option value="admin">Admin</option>
//                   <option value="user">User</option>
//                 </select>
//               </div>
//               <button type="submit" className="standard-button">Save Changes</button>
//               <button type="button" className="standard-button cancel-button" onClick={handlePanelClose}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminHomepage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminHomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
//import 'font-awesome/css/font-awesome.min.css';

const AdminHomepage = () => {
  const [users, setUsers] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', staffId: '', email: '', username: '', password: '', role: 'User', isActive: true });
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingContract, setEditingContract] = useState(null);
  
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [userFilterInput, setUserFilterInput] = useState('');
  const [contractFilterInput, setContractFilterInput] = useState({ providerName: '', startDate: '', endDate: '' });

  useEffect(() => {
    fetchUsers();
    fetchContracts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchContracts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contracts', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setContracts(response.data);
      setFilteredContracts(response.data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };
 

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', newUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsers();
      setNewUser({ firstName: '', lastName: '', staffId: '', email: '', username: '', password: '', role: 'User', isActive: true });
      setIsAddingUser(false);
      alert('User registered successfully. An email has been sent to the user for verification.');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Please try again.');
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${editingUser._id}`, editingUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  // const handleToggleUserStatus = async (userId, currentStatus) => {
  //   try {
  //     await axios.put(`http://localhost:5000/api/users/${userId}`, { isActive: !currentStatus }, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //     });
  //     fetchUsers();
  //   } catch (error) {
  //     console.error('Error toggling user status:', error);
  //   }
  // };



  const handleEditContract = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/contracts/${editingContract._id}`, editingContract, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchContracts();
      setEditingContract(null);
    } catch (error) {
      console.error('Error updating contract:', error);
    }
  };
  const handleToggleUserStatus = async (userId, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, { isActive: !currentStatus }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsers();
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const applyUserFilter = () => {
    const filtered = users.filter(user => 
      user.username.toLowerCase().includes(userFilterInput.toLowerCase()) ||
      user.firstName.toLowerCase().includes(userFilterInput.toLowerCase()) ||
      user.lastName.toLowerCase().includes(userFilterInput.toLowerCase()) ||
      user.email.toLowerCase().includes(userFilterInput.toLowerCase()) ||
      user.staffId.toLowerCase().includes(userFilterInput.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const applyContractFilter = () => {
    const filtered = contracts.filter(contract => {
      const contractStartDate = new Date(contract.startDate);
      const contractEndDate = new Date(contract.endDate);
      const filterStartDate = contractFilterInput.startDate ? new Date(contractFilterInput.startDate) : null;
      const filterEndDate = contractFilterInput.endDate ? new Date(contractFilterInput.endDate) : null;

      return (
        contract.providerName.toLowerCase().includes(contractFilterInput.providerName.toLowerCase()) &&
        (!filterStartDate || contractStartDate >= filterStartDate) &&
        (!filterEndDate || contractEndDate <= filterEndDate)
      );
    });
    setFilteredContracts(filtered);
  };
  const resetUserFilter = () => {
    setUserFilterInput('');
    setFilteredUsers(users);
  };

  const resetContractFilter = () => {
    setContractFilterInput({ providerName: '', startDate: '', endDate: '' });
    setFilteredContracts(contracts);
  };


  return (
    <div className="admin-homepage">
      <h1>Admin Dashboard</h1>

      <section className="user-management">
        <h2>User Management</h2>
        <button className="btn add-user-btn" onClick={() => setIsAddingUser(true)}>Add New User</button>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filter by name, username, email, or staff ID"
            value={userFilterInput}
            onChange={(e) => setUserFilterInput(e.target.value)}
            className="filter-input"
          />
          <button className="filter-button" onClick={applyUserFilter}>Apply Filter</button>
          <button className="filter-button" onClick={resetUserFilter}>Reset Filter</button>
        </div>

        {/* User Table */}
        <table className="styled-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Staff ID</th>
              <th>email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.staffId}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.isVerified ? 'Yes' : 'No'}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td>
                <button className="btn btn-edit" onClick={() => setEditingUser(user)}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-toggle" onClick={() => handleToggleUserStatus(user._id, user.isActive)}>
                    <FontAwesomeIcon icon={user.isActive ? faToggleOn : faToggleOff} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add User Form */}
        {isAddingUser && (
          <div className="modal">
            <form onSubmit={handleAddUser}>
              <input type="text" placeholder="First Name" value={newUser.firstName} onChange={(e) => setNewUser({...newUser, firstName: e.target.value})} required />
              <input type="text" placeholder="Last Name" value={newUser.lastName} onChange={(e) => setNewUser({...newUser, lastName: e.target.value})} required />
              <input type="text" placeholder="Staff ID" value={newUser.staffId} onChange={(e) => setNewUser({...newUser, staffId: e.target.value})} required />
              <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} required />
              <input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})} required />
              <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} required />
              <select value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <button className="btn" type="submit">Add User</button>
              <button className="btn btn-cancel" type="button" onClick={() => setIsAddingUser(false)}>Cancel</button>
            </form>
          </div>
        )}

        {/* Edit User Form */}
        {editingUser && (
          <div className="modal">
            <form onSubmit={handleEditUser}>
              <input type="text" placeholder="First Name" value={editingUser.firstName} onChange={(e) => setEditingUser({...editingUser, firstName: e.target.value})} required />
              <input type="text" placeholder="Last Name" value={editingUser.lastName} onChange={(e) => setEditingUser({...editingUser, lastName: e.target.value})} required />
              <input type="text" placeholder="Staff ID" value={editingUser.staffId} onChange={(e) => setEditingUser({...editingUser, staffId: e.target.value})} required />
              <input type="email" placeholder="Email" value={editingUser.email} onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} required />
              <input type="text" placeholder="Username" value={editingUser.username} onChange={(e) => setEditingUser({...editingUser, username: e.target.value})} required />
              <select value={editingUser.role} onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <button className="btn" type="submit">Save Changes</button>
              <button className="btn btn-cancel" type="button" onClick={() => setEditingUser(null)}>Cancel</button>
            </form>
          </div>
        )}
      </section>

      <section className="contract-management">
        <h2>Contract Management</h2>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filter by provider name"
            value={contractFilterInput.providerName}
            onChange={(e) => setContractFilterInput({...contractFilterInput, providerName: e.target.value})}
            className="filter-input"
          />
          <input
            type="date"
            value={contractFilterInput.startDate}
            onChange={(e) => setContractFilterInput({...contractFilterInput, startDate: e.target.value})}
            className="filter-input"
          />
          <input
            type="date"
            value={contractFilterInput.endDate}
            onChange={(e) => setContractFilterInput({...contractFilterInput, endDate: e.target.value})}
            className="filter-input"
          />
          <button className="filter-button" onClick={applyContractFilter}>Apply Filter</button>
          <button className="filter-button" onClick={resetContractFilter}>Reset Filter</button>
        </div>
        {/* Contract Table */}
        <table className="styled-table">
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Contract ID</th>
              <th>Clinic Code</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract._id}>
                <td>{contract.providerName}</td>
                <td>{contract.contractId}</td>
                <td>{contract.clinicCode}</td>
                <td>{new Date(contract.startDate).toLocaleDateString()}</td>
                <td>{new Date(contract.endDate).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-edit" onClick={() => setEditingContract(contract)}> <FontAwesomeIcon icon={faPen} /> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Contract Form */}
        {editingContract && (
          <div className="modal">
            <form onSubmit={handleEditContract}>
              <input type="text" placeholder="Provider Name" value={editingContract.providerName} onChange={(e) => setEditingContract({...editingContract, contractId: e.target.value})} required />
              <input type="text" placeholder="Contract ID" value={editingContract.contractId} onChange={(e) => setEditingContract({...editingContract, contractId: e.target.value})} required />
              <input type="text" placeholder="Clinic Code" value={editingContract.clinicCode} onChange={(e) => setEditingContract({...editingContract, supplierId: e.target.value})} required />
              <input type="date" value={editingContract.startDate} onChange={(e) => setEditingContract({...editingContract, startDate: e.target.value})} required />
              <input type="date" value={editingContract.endDate} onChange={(e) => setEditingContract({...editingContract, endDate: e.target.value})} required />
              <button className="btn" type="submit">Save Changes</button>
              <button className="btn btn-cancel" type="button" onClick={() => setEditingContract(null)}>Cancel</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminHomepage;
