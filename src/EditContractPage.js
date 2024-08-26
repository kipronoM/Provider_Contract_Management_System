import React from 'react';
import { useLocation } from 'react-router-dom';
import './EditContractPage.css';

const EditContractPage = () => {
  const location = useLocation();
  const { contract } = location.state;

  return (
    <div className="edit-contract-page">
      <h2>Edit Contract Details</h2>
      <div className="contract-details">
        <div className="detail-group">
          <label>Contract ID</label>
          <p>{contract.contractID}</p>
        </div>
        <div className="detail-group">
          <label>Supplier ID</label>
          <p>{contract.supplierID}</p>
        </div>
        <div className="detail-group">
          <label>Start Date</label>
          <p>{contract.startDate}</p>
        </div>
        <div className="detail-group">
          <label>End Date</label>
          <p>{contract.endDate}</p>
        </div>
        <div className="detail-group">
          <label>Contract No</label>
          <p>{contract.contractNo}</p>
        </div>
        <div className="detail-group">
          <label>Supplier Location</label>
          <p>{contract.supplierLocation}</p>
        </div>
        <button className="standard-button">Save Changes</button>
        <button className="standard-button cancel-button" onClick={() => window.history.back()}>Cancel</button>
      </div>
    </div>
  );
};

export default EditContractPage;
