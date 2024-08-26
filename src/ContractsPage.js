import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './ContractsPage.css';
import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon

const contractData = [
  { id: 'C001', provider: 'Provider A', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
  { id: 'C002', provider: 'Provider B', startDate: '2022-02-01', endDate: '2023-02-01', status: 'Expiring' },
  { id: 'C003', provider: 'Provider C', startDate: '2021-01-01', endDate: '2022-01-01', status: 'Expired' },
  { id: 'C004', provider: 'Provider D', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
  { id: 'C005', provider: 'Provider E', startDate: '2022-02-01', endDate: '2023-02-01', status: 'Active' },
  { id: 'C006', provider: 'Provider F', startDate: '2021-01-01', endDate: '2022-01-01', status: 'Expired' },
  { id: 'C007', provider: 'Provider G', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
  // Add more contract data as needed
];

const ContractsPage = () => {
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [providerName, setProviderName] = useState('');
  const [contractId, setContractId] = useState('');
  const [providerId, setProviderId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [providerLocation, setProviderLocation] = useState('');
  const [uploadContract, setUploadContract] = useState(null);

  const toggleAddPanel = () => {
    setShowAddPanel(!showAddPanel);
  };

  const handleAddContract = (e) => {
    e.preventDefault();
    // Perform add contract logic here, e.g., send data to server
    console.log({
      providerName,
      contractId,
      providerId,
      startDate,
      endDate,
      contractNumber,
      providerLocation,
      uploadContract
    });
    // Reset form or close panel after adding contract
    setShowAddPanel(false);
  };

  return (
    <div className="contracts-page">
      <div className="header">
        <h1>Contracts</h1>
        <button className="add-contract-button" onClick={toggleAddPanel}>Add New Contract</button>
      </div>

      {showAddPanel && (
        <div className="overlay">
          <div className="add-contract-panel">
            <h2>Add New Contract</h2>
            <form onSubmit={handleAddContract}>
              <div className="form-group">
                <label>Provider Name:</label>
                <input type="text" value={providerName} onChange={(e) => setProviderName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Contract ID:</label>
                <input type="text" value={contractId} onChange={(e) => setContractId(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Clinic Code:</label>
                <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Contract Number:</label>
                <input type="text" value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Physical Location:</label>
                <input type="text" value={providerLocation} onChange={(e) => setProviderLocation(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Upload Contract:</label>
                <input type="file" onChange={(e) => setUploadContract(e.target.files[0])} required />
              </div>
              <div className="form-group-btn">
                <button type="submit" className="standard-button">Add Contract</button>
              </div>
              <div className="form-group-btn">
                <button type="button" className="standard-button" onClick={toggleAddPanel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="filter-search-bar">
        <div className="date-range-filter">
          <label>From:</label>
          <input type="date" />
          <label>To:</label>
          <input type="date" />
        </div>
        <div className="search-filter">
          <input type="text" placeholder="Search contracts..." />
          <button className="search-button">
              <FaSearch />
          </button>
        </div>
      </div>

      <div className="contracts-list">
        <table className="contracts-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Provider Name</th>
              <th>Contract Start Date</th>
              <th>Contract End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contractData.map((contract) => (
              <tr key={contract.id}>
                <td>{contract.id}</td>
                <td>{contract.provider}</td>
                <td>{contract.startDate}</td>
                <td>{contract.endDate}</td>
                <td className={`status ${contract.status.toLowerCase()}`}>{contract.status}</td>
                <td>
                  <button className="view-contract-button">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractsPage;
