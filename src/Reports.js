import React, { useState } from 'react';
import './Reports.css';

const generateRandomContracts = (numContracts) => {
  const contracts = [];
  const providers = ['Provider A', 'Provider B', 'Provider C', 'Provider D', 'Provider E'];
  const statuses = ['Active', 'Expiring', 'Expired'];

  for (let i = 1; i <= numContracts; i++) {
    const provider = providers[Math.floor(Math.random() * providers.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const startDate = `2022-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`;
    const endDate = `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`;

    contracts.push({
      id: `C${String(i).padStart(3, '0')}`,
      provider,
      startDate,
      endDate,
      status,
    });
  }

  return contracts;
};

const ReportsPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contractType, setContractType] = useState('');
  const [status, setStatus] = useState('');
  const reportData = useState(generateRandomContracts(30))[0];

  const handleSearch = () => {
    // Add logic to filter reportData based on the selected filters
  };

  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <div className="reports-filters">
        <div className="reports-filter-group">
          <label>Contract Type:</label>
          <select value={contractType} onChange={(e) => setContractType(e.target.value)}>
            <option value="">Select type...</option>
            <option value="service">Service</option>
            <option value="supply">Supply</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <div className="reports-filter-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select status...</option>
            <option value="active">Active</option>
            <option value="expiring">Expiring</option>
            <option value="expired">Expired</option>
          </select>
        </div>
        <div className="reports-filter-group">
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="reports-filter-group">
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <button className="reports-search-button" onClick={handleSearch}>Search</button>
      </div>

      {/* Report Results Table */}
      <div className="report-results">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Provider Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.provider}</td>
                <td>{report.startDate}</td>
                <td>{report.endDate}</td>
                <td className={`status ${report.status.toLowerCase()}`}>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Download Button */}
        <div className="reports-download-section">
          <button className="reports-download-button">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
