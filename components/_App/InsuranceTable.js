import React from 'react';
import { FaMoneyBill, FaUserMd, FaHospital, FaUserShield, FaCheck, FaTimes, FaCapsules, FaTooth, FaEye, FaBabyCarriage, FaDownload } from 'react-icons/fa';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: <div><FaMoneyBill /><br />Plan</div>,
    selector: 'plan',
    sortable: true,
  },
  {
    name: <div><FaUserMd /><br />Group Premium</div>,
    selector: 'groupPremium',
    sortable: true,
  },
  {
    name: (
      <div className="icon-container">
        <FaHospital className="icon" />
        <div className="icon-text">In-Patient</div>
      </div>
    ),
    selector: 'inPatient',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.inPatient ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaHospital className="icon" />
        <div className="icon-text">Out-Patient</div>
      </div>
    ),
    selector: 'outPatient',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.outPatient ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaUserShield className="icon" />
        <div className="icon-text">Chronic & Pre-existing</div>
      </div>
    ),
    selector: 'chronicPreExistingDisease',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.chronicPreExistingDisease ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaCapsules className="icon" />
        <div className="icon-text">Medication</div>
      </div>
    ),
    selector: 'medication',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.medication ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaTooth className="icon" />
        <div className="icon-text">Dental</div>
      </div>
    ),
    selector: 'dental',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.dental ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaEye className="icon" />
        <div className="icon-text">Optical</div>
      </div>
    ),
    selector: 'optical',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.optical ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaBabyCarriage className="icon" />
        <div className="icon-text">Maternity</div>
      </div>
    ),
    selector: 'maternity',
    sortable: true,
    cell: row => (
      <div className="icon-text">
        {row.maternity ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
      </div>
    ),
  },
  {
    name: (
      <div className="icon-container">
        <FaDownload className="icon" />
        <div className="icon-text">Actions</div>
      </div>
    ),
    cell: row => (
      <div className="icon action-buttons-container">
        <button className="icon button" onClick={() => handleSelect(row)}>Select</button>
        <button className="icon button" onClick={() => handleDownload(row)}>Download</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    plan: 'Plan A',
    groupPremium: '$100',
    inPatient: true,
    outPatient: false,
    chronicPreExistingDisease: true,
    medication: true,
    dental: true,
    optical: false,
    maternity: true,
  },
  {
    plan: 'Plan B',
    groupPremium: '$150',
    inPatient: true,
    outPatient: true,
    chronicPreExistingDisease: false,
    medication: true,
    dental: false,
    optical: true,
    maternity: false,
  },
  // Add more data rows as needed
];

const InsuranceTable = () => {
  const handleFilter = (column, filterValue) => {
    // Implement your custom filtering logic here
  };

  const handleSort = (column, sortDirection) => {
    // Implement your custom sorting logic here
  };

  const handleSelect = row => {
    // Implement your logic for handling the "Select" action
  };

  const handleDownload = row => {
    // Implement your logic for handling the "Download" action
  };

  return (
    <DataTable
      columns={columns.map(col => ({
        ...col,
        filter: true,
        filterFunction: (rows, filterValue) => handleFilter(col.selector, filterValue),
      }))}
      data={data}
      onSort={handleSort}
      noHeader
      paginationPerPage={data.length}
      pagination={data.length > 10}
      highlightOnHover
    />
  );
};

export default InsuranceTable;
