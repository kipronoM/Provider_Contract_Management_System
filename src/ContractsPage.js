// import React, { useState } from 'react';
// //import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import './ContractsPage.css';
// import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon

// const contractData = [
//   { id: 'C001', provider: 'Provider A', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
//   { id: 'C002', provider: 'Provider B', startDate: '2022-02-01', endDate: '2023-02-01', status: 'Expiring' },
//   { id: 'C003', provider: 'Provider C', startDate: '2021-01-01', endDate: '2022-01-01', status: 'Expired' },
//   { id: 'C004', provider: 'Provider D', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
//   { id: 'C005', provider: 'Provider E', startDate: '2022-02-01', endDate: '2023-02-01', status: 'Active' },
//   { id: 'C006', provider: 'Provider F', startDate: '2021-01-01', endDate: '2022-01-01', status: 'Expired' },
//   { id: 'C007', provider: 'Provider G', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
//   // Add more contract data as needed
// ];

// const ContractsPage = () => {
//   const [showAddPanel, setShowAddPanel] = useState(false);
//   const [providerName, setProviderName] = useState('');
//   const [contractId, setContractId] = useState('');
//   const [providerId, setProviderId] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [contractNumber, setContractNumber] = useState('');
//   const [providerLocation, setProviderLocation] = useState('');
//   const [uploadContract, setUploadContract] = useState(null);

//   const toggleAddPanel = () => {
//     setShowAddPanel(!showAddPanel);
//   };

//   const handleAddContract = (e) => {
//     e.preventDefault();
//     // Perform add contract logic here, e.g., send data to server
//     console.log({
//       providerName,
//       contractId,
//       providerId,
//       startDate,
//       endDate,
//       contractNumber,
//       providerLocation,
//       uploadContract
//     });
//     // Reset form or close panel after adding contract
//     setShowAddPanel(false);
//   };

//   return (
//     <div className="contracts-page">
//       <div className="header">
//         <h1>Contracts</h1>
//         <button className="add-contract-button" onClick={toggleAddPanel}>Add New Contract</button>
//       </div>

//       {showAddPanel && (
//         <div className="overlay">
//           <div className="add-contract-panel">
//             <h2>Add New Contract</h2>
//             <form onSubmit={handleAddContract}>
//               <div className="form-group">
//                 <label>Provider Name:</label>
//                 <input type="text" value={providerName} onChange={(e) => setProviderName(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Contract ID:</label>
//                 <input type="text" value={contractId} onChange={(e) => setContractId(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Clinic Code:</label>
//                 <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Start Date:</label>
//                 <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>End Date:</label>
//                 <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Contract Number:</label>
//                 <input type="text" value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Physical Location:</label>
//                 <input type="text" value={providerLocation} onChange={(e) => setProviderLocation(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label>Upload Contract:</label>
//                 <input type="file" onChange={(e) => setUploadContract(e.target.files[0])} required />
//               </div>
//               <div className="form-group-btn">
//                 <button type="submit" className="standard-button">Add Contract</button>
//               </div>
//               <div className="form-group-btn">
//                 <button type="button" className="standard-button" onClick={toggleAddPanel}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="filter-search-bar">
//         <div className="date-range-filter">
//           <label>From:</label>
//           <input type="date" />
//           <label>To:</label>
//           <input type="date" />
//         </div>
//         <div className="search-filter">
//           <input type="text" placeholder="Search contracts..." />
//           <button className="search-button">
//               <FaSearch />
//           </button>
//         </div>
//       </div>

//       <div className="contracts-list">
//         <table className="contracts-table">
//           <thead>
//             <tr>
//               <th>Contract ID</th>
//               <th>Provider Name</th>
//               <th>Contract Start Date</th>
//               <th>Contract End Date</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contractData.map((contract) => (
//               <tr key={contract.id}>
//                 <td>{contract.id}</td>
//                 <td>{contract.provider}</td>
//                 <td>{contract.startDate}</td>
//                 <td>{contract.endDate}</td>
//                 <td className={`status ${contract.status.toLowerCase()}`}>{contract.status}</td>
//                 <td>
//                   <button className="view-contract-button">
//                     <FontAwesomeIcon icon={faEye} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContractsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from 'react-icons/fa';
import './ContractsPage.css';

const ContractsPage = () => {
  const [contracts, setContracts] = useState([]);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [newContract, setNewContract] = useState({
    providerName: '',
    contractId: '',
    clinicCode: '',
    startDate: '',
    endDate: '',
    contractNumber: '',
    physicalLocation: '',
    contract: null
  });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [dateFilter, setDateFilter] = useState({ from: '', to: '' });

  useEffect(() => {
    fetchContracts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredContracts(contracts.filter(contract =>
        contract.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contract.contractId.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredContracts(contracts);
    }
  }, [searchQuery, contracts, dateFilter]);

  const fetchContracts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No auth token found');
      }
      const response = await axios.get('http://localhost:5000/api/contracts', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setContracts(response.data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
      if (error.message === 'No auth token found') {
        // Handle missing token (e.g., redirect to login page)
      }
    } finally {
      setLoading(false);
    }
  };
  
  const filterContracts = () => {
    let filtered = contracts;

    if (searchQuery) {
      filtered = filtered.filter(contract =>
        contract.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contract.contractId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (dateFilter.from && dateFilter.to) {
      filtered = filtered.filter(contract => {
        const contractStart = new Date(contract.startDate);
        const contractEnd = new Date(contract.endDate);
        const filterFrom = new Date(dateFilter.from);
        const filterTo = new Date(dateFilter.to);
        return contractStart >= filterFrom && contractEnd <= filterTo;
      });
    }

    setFilteredContracts(filtered);
  };
  // Calculate the status based on contract dates
  const calculateStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return 'Not Started';
    if (now > end) return 'Expired';
    if (now >= start && now <= end) return 'Active';
    return 'Unknown';
  };


  // Handle adding a new contract
  const handleAddContract = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(newContract).forEach(key => {
        formData.append(key, newContract[key]);
      });

      await axios.post('http://localhost:5000/api/contracts/create', formData, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchContracts();
      setShowAddPanel(false);
      setNewContract({
        providerName: '',
        contractId: '',
        clinicCode: '',
        startDate: '',
        endDate: '',
        contractNumber: '',
        physicalLocation: '',
        contract: null
      });
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  // Toggle add panel visibility
  const toggleAddPanel = () => {
    setShowAddPanel(!showAddPanel);
  };

  // Update newContract state when form inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContract({ ...newContract, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewContract({ ...newContract, contract: e.target.files[0] });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewContract = async (contractId) => {
    if (contractId) {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Authentication token not found. Please log in again.');
        return;
      }
      const fileUrl = `http://localhost:5000/api/contracts/file/${contractId}`;
      try {
        const response = await fetch(fileUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch contract');
        }
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      } catch (error) {
        console.error('Error fetching contract:', error);
        alert(`Error opening contract: ${error.message}`);
      }
    } else {
      alert('Contract file not available');
    }
  };
  const handleDateFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter(prev => ({ ...prev, [name]: value }));
  };

  const applyDateFilter = () => {
    filterContracts();
  };

  // Function to format date (YYYY-MM-DD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
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
                <input type="text" name="providerName" value={newContract.providerName} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Contract ID:</label>
                <input type="text" name="contractId" value={newContract.contractId} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Clinic Code:</label>
                <input type="text" name="clinicCode" value={newContract.clinicCode} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Start Date:</label>
                <input type="date" name="startDate" value={newContract.startDate} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>End Date:</label>
                <input type="date" name="endDate" value={newContract.endDate} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Contract Number:</label>
                <input type="text" name="contractNumber" value={newContract.contractNumber} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Physical Location:</label>
                <input type="text" name="physicalLocation" value={newContract.physicalLocation} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Upload Contract:</label>
                <input type="file" name="contract" onChange={handleFileChange} required />
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
          <input
            type="date"
            name="from"
            value={dateFilter.from}
            onChange={handleDateFilterChange}
          />
          <label>To:</label>
          <input
            type="date"
            name="to"
            value={dateFilter.to}
            onChange={handleDateFilterChange}
          />
          <button onClick={applyDateFilter} className="apply-filter-button">Apply Filter</button>
        </div>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search contracts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="contracts-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
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
              {filteredContracts.map((contract) => (
                <tr key={contract.contractId}>
                  <td>{contract.contractId}</td>
                  <td>{contract.providerName}</td>
                  <td>{formatDate(contract.startDate)}</td>
                  <td>{formatDate(contract.endDate)}</td>
                  <td className={`status ${calculateStatus(contract.startDate, contract.endDate).toLowerCase()}`}>
                    {calculateStatus(contract.startDate, contract.endDate)}
                  </td>
                  <td>
                    <button className="view-contract-button" onClick={() => handleViewContract(contract.contractId)}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContractsPage;

