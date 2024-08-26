import React, { useState } from 'react';
import './AdminHomePage.css';

const AdminHomepage = () => {
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEditClick = (user) => {
    setUserToEdit(user);
    setIsEditPanelOpen(true);
  };

  const handlePanelClose = () => {
    setIsEditPanelOpen(false);
    setUserToEdit(null);
  };

  return (
    <div className="admin-homepage">
      <div className="admin-section">
        <h2>Reports</h2>
        <div className="report-cards">
          <div className="report-card">
            <h3>Monthly Contracts Report</h3>
            <p>View detailed reports of contracts created, active, and expired each month.</p>
            <button className="standard-button">View Report</button>
          </div>
          <div className="report-card">
            <h3>Annual Financial Report</h3>
            <p>Analyze the financial impact and value of contracts on an annual basis.</p>
            <button className="standard-button">View Report</button>
          </div>
        </div>
      </div>

      <div className="admin-section">
        <h2>User Management</h2>
        <div className="user-management">
          <div className="user-card">
            <h3>Add New User</h3>
            <form className="add-user-form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Staff ID</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select required>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <button type="submit" className="standard-button">Add User</button>
            </form>
          </div>
          <div className="user-card">
            <h3>Manage Users</h3>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>admin</td>
                  <td>Admin</td>
                  <td>
                    <button className="standard-button" onClick={() => handleEditClick({ username: 'admin', role: 'Admin' })}>Edit</button>
                    <button className="standard-button delete-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>user</td>
                  <td>User</td>
                  <td>
                    <button className="standard-button" onClick={() => handleEditClick({ username: 'user', role: 'User' })}>Edit</button>
                    <button className="standard-button delete-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="admin-section">
        <h2>Contract Details Management</h2>
        <div className="contract-management">
          <div className="contract-card">
            <h3>View Contracts</h3>
            <table>
              <thead>
                <tr>
                  <th>Contract ID</th>
                  <th>Supplier ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Contract No</th>
                  <th>Supplier Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1001</td>
                  <td>2023-01-01</td>
                  <td>2024-01-01</td>
                  <td>C001</td>
                  <td>New York</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1002</td>
                  <td>2023-02-01</td>
                  <td>2024-02-01</td>
                  <td>C002</td>
                  <td>Los Angeles</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => window.location.href = '/contract'} className="standard-button">Add Contract</button>
          </div>
          <div className="contract-card">
            <h3>Edit Contracts</h3>
            <p>Edit existing contract details.</p>
            <button className="standard-button">Edit Contracts</button>
          </div>
        </div>
      </div>

      {isEditPanelOpen && (
        <div className="overlay">
          <div className="add-user-panel">
            <h2>Edit User</h2>
            <form className="add-user-form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Staff ID</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" value={userToEdit.username} readOnly />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select required value={userToEdit.role}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="standard-button">Save</button>
                <button type="button" className="standard-button" onClick={handlePanelClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomepage;
