// import React from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, AreaChart, Area, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon
// import './HomePage.css';

// const summaryData = {
//   totalContracts: 120,
//   activeContracts: 80,
//   lapsedContracts: 10,
//   draftContracts: 30,
// };

// const contractData = [
//   { id: 'C001', provider: 'Provider A', startDate: '2022-01-01', endDate: '2023-01-01', status: 'Active' },
//   { id: 'C002', provider: 'Provider B', startDate: '2022-02-01', endDate: '2023-02-01', status: 'Expiring' },
//   { id: 'C003', provider: 'Provider C', startDate: '2021-01-01', endDate: '2022-01-01', status: 'Expired' },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       <div className="summary-tiles">
//         <Tile title="Total Contracts" value={summaryData.totalContracts} />
//         <Tile title="Active Contracts" value={summaryData.activeContracts} />
//         <Tile title="Lapsed Contracts" value={summaryData.lapsedContracts} />
//         <Tile title="Draft Contracts" value={summaryData.draftContracts} />
//       </div>
//       <div className="charts">
//         <ChartContainer title="Contracts per Provider">
//           <BarChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="provider" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="active" fill="#8884d8" />
//           </BarChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Renewal Trends">
//           <LineChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="provider" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="active" stroke="#8884d8" />
//           </LineChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Status Distribution">
//           <PieChart width={400} height={400}>
//             <Pie data={contractData} dataKey="value" cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
//               {contractData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Values Over Time">
//           <AreaChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="provider" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
//           </AreaChart>
//         </ChartContainer>
//       </div>
//       <div className="contracts-list">
//         <div className="filter-search-bar">
//           <div className="date-range-filter">
//             <label>From:</label>
//             <input type="date" />
//             <label>To:</label>
//             <input type="date" />
//           </div>
//           <div className="search-filter">
//             <input type="text" placeholder="Search contracts..." />
//             <button className="search-button">
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <ContractsTable data={contractData} />
//       </div>
//     </div>
//   );
// };

// const Tile = ({ title, value }) => (
//   <div className="tile">
//     <h3>{title}</h3>
//     <p>{value}</p>
//   </div>
// );

// const ChartContainer = ({ title, children }) => (
//   <div className="chart-container">
//     <h3>{title}</h3>
//     {children}
//   </div>
// );

// const ContractsTable = ({ data }) => (
//   <table className="contracts-table">
//     <thead>
//       <tr>
//         <th>Contract ID</th>
//         <th>Provider Name</th>
//         <th>Contract Start Date</th>
//         <th>Contract End Date</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((contract) => (
//         <tr key={contract.id}>
//           <td>{contract.id}</td>
//           <td>{contract.provider}</td>
//           <td>{contract.startDate}</td>
//           <td>{contract.endDate}</td>
//           <td className={`status ${contract.status.toLowerCase()}`}>{contract.status}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, AreaChart, Area, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { FaSearch } from 'react-icons/fa';
// import axios from 'axios';
// import './HomePage.css';

// const HomePage = () => {
//   const [contractData, setContractData] = useState([]);

//   useEffect(() => {
//     const fetchContracts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/contracts', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setContractData(response.data || []);
//       } catch (error) {
//         console.error('Error fetching contracts:', error);
//       }
//     };

//     fetchContracts();
//   }, []);

//   // Safely extract contract status counts
//   const summaryData = {
//     totalContracts: contractData.length,
//     activeContracts: contractData.filter(contract => contract.status === 'Active').length,
//     lapsedContracts: contractData.filter(contract => contract.status === 'Expired').length,
//     draftContracts: contractData.filter(contract => contract.status === 'Draft').length,
//   };

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   return (
//     <div className="homepage">
//       <div className="summary-tiles">
//         <Tile title="Total Contracts" value={summaryData.totalContracts} />
//         <Tile title="Active Contracts" value={summaryData.activeContracts} />
//         <Tile title="Lapsed Contracts" value={summaryData.lapsedContracts} />
//         <Tile title="Draft Contracts" value={summaryData.draftContracts} />
//       </div>
//       <div className="charts">
//         <ChartContainer title="Contracts per Provider">
//           <BarChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="providerName" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="contractId" fill="#8884d8" />
//           </BarChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Renewal Trends">
//           <LineChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="providerName" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="contractId" stroke="#8884d8" />
//           </LineChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Status Distribution">
//           <PieChart width={400} height={400}>
//             <Pie data={contractData} dataKey="status" cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
//               {contractData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ChartContainer>
//         <ChartContainer title="Contract Values Over Time">
//           <AreaChart width={400} height={300} data={contractData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="providerName" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Area type="monotone" dataKey="contractNumber" stroke="#8884d8" fill="#8884d8" />
//           </AreaChart>
//         </ChartContainer>
//       </div>
//       <div className="contracts-list">
//         <div className="filter-search-bar">
//           <div className="date-range-filter">
//             <label>From:</label>
//             <input type="date" />
//             <label>To:</label>
//             <input type="date" />
//           </div>
//           <div className="search-filter">
//             <input type="text" placeholder="Search contracts..." />
//             <button className="search-button">
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <ContractsTable data={contractData} />
//       </div>
//     </div>
//   );
// };

// const Tile = ({ title, value }) => (
//   <div className="tile">
//     <h3>{title}</h3>
//     <p>{value}</p>
//   </div>
// );

// const ChartContainer = ({ title, children }) => (
//   <div className="chart-container">
//     <h3>{title}</h3>
//     {children}
//   </div>
// );

// const ContractsTable = ({ data }) => (
//   <table className="contracts-table">
//     <thead>
//       <tr>
//         <th>Contract ID</th>
//         <th>Provider Name</th>
//         <th>Contract Start Date</th>
//         <th>Contract End Date</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((contract) => (
//         <tr key={contract.contractId}>
//           <td>{contract.contractId}</td>
//           <td>{contract.providerName  || 'N/A'}</td>
//           <td>{contract.startDate || 'N/A'}</td>
//           <td>{contract.endDate || 'N/A'}</td>
//           <td className={`status ${(contract.status || 'Unknown').toLowerCase()}`}>{contract.status || 'Unknown'}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, AreaChart, Area, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [contractData, setContractData] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contracts', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        const contracts = response.data || [];
        // Process contracts to include status
        const processedContracts = contracts.map(contract => {
          const today = new Date();
          const endDate = new Date(contract.endDate);
          const startDate = new Date(contract.startDate);
          let status = 'Draft'; // Default status

          if (endDate < today) {
            status = 'Expired';
          } else if (endDate <= new Date(today.setMonth(today.getMonth() + 3))) {
            status = 'Due for Expiry';
          } else {
            status = 'Active';
          }

          return { ...contract, status, startDate: formatDate(contract.startDate), endDate: formatDate(contract.endDate) };
        });
        setContractData(processedContracts);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchContracts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  };

  // Safely extract contract status counts
  const summaryData = {
    totalContracts: contractData.length,
    activeContracts: contractData.filter(contract => contract.status === 'Active').length,
    lapsedContracts: contractData.filter(contract => contract.status === 'Expired').length,
    dueForExpiryContracts: contractData.filter(contract => contract.status === 'Due for Expiry').length,
    draftContracts: contractData.filter(contract => contract.status === 'Draft').length,
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="homepage">
      <div className="summary-tiles">
        <Tile title="Total Contracts" value={summaryData.totalContracts} />
        <Tile title="Active Contracts" value={summaryData.activeContracts} />
        <Tile title="Due for Expiry Contracts" value={summaryData.dueForExpiryContracts} />
        <Tile title="Lapsed Contracts" value={summaryData.lapsedContracts} />
        <Tile title="Draft Contracts" value={summaryData.draftContracts} />
      </div>
      <div className="charts">
        <ChartContainer title="Contracts per Provider">
          <BarChart width={400} height={300} data={contractData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="providerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="providerName" fill="#8884d8" />
          </BarChart>
        </ChartContainer>
        <ChartContainer title="Contract Renewal Trends">
          <LineChart width={400} height={300} data={contractData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="providerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="contractId" stroke="#8884d8" />
          </LineChart>
        </ChartContainer>
        <ChartContainer title="Contract Status Distribution">
          <PieChart width={400} height={400}>
            <Pie data={contractData} dataKey="Status" cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
              {contractData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ChartContainer>
        {/* <ChartContainer title="Contract Values Over Time">
          <AreaChart width={400} height={300} data={contractData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="providerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="contractNumber" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ChartContainer> */}
      </div>
      <div className="contracts-list">
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
        <ContractsTable data={contractData} />
      </div>
    </div>
  );
};

const Tile = ({ title, value }) => (
  <div className="tile">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const ChartContainer = ({ title, children }) => (
  <div className="chart-container">
    <h3>{title}</h3>
    {children}
  </div>
);

const ContractsTable = ({ data }) => (
  <table className="contracts-table">
    <thead>
      <tr>
        <th>Contract ID</th>
        <th>Provider Name</th>
        <th>Contract Start Date</th>
        <th>Contract End Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((contract) => (
        <tr key={contract.contractId}>
          <td>{contract.contractId}</td>
          <td>{contract.providerName || 'N/A'}</td>
          <td>{contract.startDate || 'N/A'}</td>
          <td>{contract.endDate || 'N/A'}</td>
          <td className={`status ${(contract.status || 'Unknown').toLowerCase()}`}>{contract.status || 'Unknown'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default HomePage;
