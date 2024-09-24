// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './EditContractPage.css';

// const EditContractPage = () => {
//   const location = useLocation();
//   const { contract } = location.state;

//   return (
//     <div className="edit-contract-page">
//       <h2>Edit Contract Details</h2>
//       <div className="contract-details">
//         <div className="detail-group">
//           <label>Contract ID</label>
//           <p>{contract.contractID}</p>
//         </div>
//         <div className="detail-group">
//           <label>Supplier ID</label>
//           <p>{contract.supplierID}</p>
//         </div>
//         <div className="detail-group">
//           <label>Start Date</label>
//           <p>{contract.startDate}</p>
//         </div>
//         <div className="detail-group">
//           <label>End Date</label>
//           <p>{contract.endDate}</p>
//         </div>
//         <div className="detail-group">
//           <label>Contract No</label>
//           <p>{contract.contractNo}</p>
//         </div>
//         <div className="detail-group">
//           <label>Supplier Location</label>
//           <p>{contract.supplierLocation}</p>
//         </div>
//         <button className="standard-button">Save Changes</button>
//         <button className="standard-button cancel-button" onClick={() => window.history.back()}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default EditContractPage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditContractPage.css';

const EditContractPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contract, setContract] = useState(null);

  // Fetch the contract details when the component mounts or `id` changes
  useEffect(() => {
    const fetchContract = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contracts/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setContract(response.data);
      } catch (error) {
        console.error('Error fetching contract:', error);
      }
    };

    fetchContract();
  }, [id]);

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContract(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission to update the contract
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/contracts/${id}`, contract, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/contracts');
    } catch (error) {
      console.error('Error updating contract:', error);
    }
  };

  if (!contract) return <div>Loading...</div>;

  return (
    <div className="edit-contract-page">
      <h2>Edit Contract Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Provider Name:</label>
          <input
            type="text"
            name="providerName"
            value={contract.providerName || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contract ID:</label>
          <input
            type="text"
            name="contractId"
            value={contract.contractId || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Clinic Code:</label>
          <input
            type="text"
            name="providerId"
            value={contract.providerId || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={contract.startDate || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={contract.endDate || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contract Number:</label>
          <input
            type="text"
            name="contractNumber"
            value={contract.contractNumber || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Physical Location:</label>
          <input
            type="text"
            name="providerLocation"
            value={contract.providerLocation || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group-btn">
          <button type="submit" className="standard-button">Save Changes</button>
          <button type="button" className="standard-button" onClick={() => navigate('/contracts')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditContractPage;
