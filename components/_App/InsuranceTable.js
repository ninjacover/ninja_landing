import React from 'react';
import { FaUserMd, FaBriefcaseMedical, FaHospital, FaUserShield, FaCheck, FaTimes, FaCapsules, FaTooth, FaEye, FaBabyCarriage, FaDownload, FaPills } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import { GiCapsule } from 'react-icons/gi';



const columns = [
    {
      name: 'Plan',
      selector: 'plan',
      sortable: true,
    },
    {
      name: 'Group Premium',
      selector: 'groupPremium',
      sortable: true,
    },
    {
      name: 'In-Patient',
      selector: 'inPatient',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaHospital className="icon-row" />
          {row.inPatient ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Out-Patient',
      selector: 'outPatient',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaUserMd className="icon-row" />
          {row.outPatient ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Chronic & Pre-existing',
      selector: 'chronicPreExistingDisease',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaPills className="icon-row" />
          {row.chronicPreExistingDisease ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Medication',
      selector: 'medication',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaCapsules className="icon-row" />
          {row.medication ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Dental',
      selector: 'dental',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaTooth className="icon-row" />
          {row.dental ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Optical',
      selector: 'optical',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaEye className="icon-row" />
          {row.optical ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Maternity',
      selector: 'maternity',
      sortable: true,
      cell: row => (
        <div className="icon-text">
          <FaBabyCarriage className="icon-row" />
          {row.maternity ? <FaCheck className="tick-icon" /> : <FaTimes className="cross-icon" />}
        </div>
      ),
    },
    {
      name: 'Actions',
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
    <div className="table-container">
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
    </div>
  );
};

export default InsuranceTable;
