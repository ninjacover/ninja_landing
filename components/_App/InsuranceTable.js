import { FaUserMd,  FaHospital,FaCheckCircle, FaTimesCircle, FaCapsules, FaTooth, FaEye, FaBabyCarriage,FaPills } from 'react-icons/fa';
  import DataTable from 'react-data-table-component';

  import React, { useState } from 'react';

  const InsuranceTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    // const [oddRowBackground, setOddRowBackground] = useState(false);
    
  
    // const handleDetailsClick = row => {
    //   setSelectedRow(row === selectedRow ? null : row);
    // };
    // const toggleOddRowBackground = () => {
    //   setOddRowBackground(!oddRowBackground);
    // };

  const columns = [

    {
        
        name: <div className='plan-header'>Plan</div>,
        selector: 'plan',
        sortable: true,
        allowOverflow: true,
        width: '100px'
   
      },
      {
        name: <div className='group-premium-header'>Group Premium</div>,
        selector: 'groupPremium',
        sortable: true,
        
        cell: row => (
          <div className="group-premium-cell">
            <div className="big-text">{row.groupPremium}</div>
            <div className="small-text">Avg/Person: 24,960</div>
            
          </div>
        ),
        
      },
      {
        name: 'In-Patient',
        selector: 'inPatient',
        sortable: true,
        cell: row => (
          <div >   
          <div className= "icon-text"> 
          <FaHospital className="icon-row" />
          {row.inPatient ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
          </div>
          <div>
          {row.inPatient ? `Amount covered:${row.inPatientCoverage}$` : 'Not Covered'}
          </div>
        </div>
        
        ),
      },
      {
        name: 'Out-Patient',
        selector: 'outPatient',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaUserMd className="icon-row" />
              {row.outPatient ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.outPatient ? `Amount covered:${row.outPatientCoverage}$` : 'Not Covered'}
            </div>
          </div>
        ),
      },
      {
        name: <div>Chronic & Pre-existing</div>,
        selector: 'chronicPreExistingDisease',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaPills className="icon-row" />
              {row.chronicPreExistingDisease ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.chronicPreExistingDisease ? `Covered` : 'Not Covered'}
            </div>
          </div>
        ),
      },
      {
        name: 'Medication',
        selector: 'medication',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaCapsules className="icon-row" />
              {row.medication ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.medication ? `Amount covered:${row.medicationCoverage}$` : 'Not Covered'}

            </div>
          </div>
        ),
      },
      {
        name: 'Dental',
        selector: 'dental',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaTooth className="icon-row" />
              {row.dental ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.dental ? `Amount covered:${row.dentalCoverage}$` : 'Not Covered'}
            </div>
          </div>
        ),
      },
      {
        name: 'Optical',
        selector: 'optical',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaEye className="icon-row" />
              {row.optical ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.optical ? `Amount covered:${row.opticalCoverage}$` : 'Not Covered'}
            </div>
          </div>
        ),
      },
      {
        name: 'Maternity',
        selector: 'maternity',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaBabyCarriage className="icon-row" />
              {row.maternity ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div>
            {row.maternity ? `Amount covered:${row.maternityCoverage}$` : 'Not Covered'}

            </div>
          </div>
        ),
      },
      
      {
        name: 'Actions',
        cell: row => (
          <div className="action-buttons-container">
            {/* <button className="details-button"  onClick={() => handleDetailsClick(row)}>Details</button> */}
            <button className="select-button" onClick={() => handleDownload(row)}>Select</button>
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
        groupPremium: '$24000',
        inPatient: true,
        inPatientCoverage: 350,
        outPatient: false,
        outPatientCoverage: "Not Covered",
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 200,
        medication: true,
        medicationCoverage: 150,
        dental: false,
        dentalCoverage: "Not Covered",
        optical: false,
        opticalCoverage: "Not Covered",
        maternity: false,
        maternityCoverage: "Not Covered",
        accompanyingFamily: 'Not Covered',
        physiotherapy: '10 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: 25000,
      },
      {
        plan: 'Plan B',
        groupPremium: '$29000',
        inPatient: true,
        inPatientCoverage: 250,
        outPatient: true,
        outPatientCoverage: 180,
        chronicPreExistingDisease: false,
        chronicPreExistingDiseaseCoverage: "Not Covered",
        medication: true,
        medicationCoverage: 200,
        dental: false,
        dentalCoverage: "Not Covered",
        optical: true,
        opticalCoverage: 280,
        maternity: true,
        maternityCoverage: 220,
        accompanyingFamily: 'Covered',
        physiotherapy: '12 Sessions',
        dentalNote: 'Covered for Basic Procedures',
        opticalNote: 'Covered for Eye Exams',
        maternityWaitingPeriod: '6 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered with conditions',
        groupLifeInsuranceCoverage: 30000,
      },
      {
        plan: 'Plan C',
        groupPremium: '$30000',
        inPatient: false,
        inPatientCoverage: "Not Covered",
        outPatient: true,
        outPatientCoverage: 220,
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 200,
        medication: true,
        medicationCoverage: 150,
        dental: true,
        dentalCoverage: 280,
        optical: false,
        opticalCoverage: "Not Covered",
        maternity: false,
        maternityCoverage: "Not Covered",
        accompanyingFamily: 'Not Covered',
        physiotherapy: '8 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: 20000,
      },
      {
        plan: 'Plan D',
        groupPremium: '$45000',
        inPatient: true,
        inPatientCoverage: 300,
        outPatient: true,
        outPatientCoverage: 250,
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 200,
        medication: true,
        medicationCoverage: 220,
        dental: true,
        dentalCoverage: 280,
        optical: true,
        opticalCoverage: 300,
        maternity: true,
        maternityCoverage: 250,
        accompanyingFamily: 'Covered',
        physiotherapy: '15 Sessions',
        dentalNote: 'Covered for Major Procedures',
        opticalNote: 'Covered for Glasses and Lenses',
        maternityWaitingPeriod: '3 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered without conditions',
        groupLifeInsuranceCoverage: 35000,
      },
      {
        plan: 'Plan E',
        groupPremium: '$50000',
        inPatient: true,
        inPatientCoverage: 280,
        outPatient: true,
        outPatientCoverage: 220,
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 180,
        medication: true,
        medicationCoverage: 200,
        dental: false,
        dentalCoverage: "Not Covered",
        optical: true,
        opticalCoverage: 250,
        maternity: false,
        maternityCoverage: "Not Covered",
        accompanyingFamily: 'Not Covered',
        physiotherapy: '10 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Covered for Eye Exams',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: 40000,
      },
      {
        plan: 'Plan F',
        groupPremium: '$52000',
        inPatient: true,
        inPatientCoverage: 300,
        outPatient: true,
        outPatientCoverage: 220,
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 150,
        medication: true,
        medicationCoverage: 180,
        dental: false,
        dentalCoverage: "Not Covered",
        optical: false,
        opticalCoverage: "Not Covered",
        maternity: false,
        maternityCoverage: "Not Covered",
        accompanyingFamily: 'Covered',
        physiotherapy: '20 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: 45000,
      },
      {
        plan: 'Plan G',
        groupPremium: '$100000',
        inPatient: true,
        inPatientCoverage: 350,
        outPatient: true,
        outPatientCoverage: 280,
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: 220,
        medication: true,
        medicationCoverage: 250,
        dental: true,
        dentalCoverage: 300,
        optical: true,
        opticalCoverage: 220,
        maternity: true,
        maternityCoverage: 280,
        accompanyingFamily: 'Covered',
        physiotherapy: '25 Sessions',
        dentalNote: 'Covered for All Procedures',
        opticalNote: 'Covered for Glasses and Lenses',
        maternityWaitingPeriod: '3 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered with conditions',
        groupLifeInsuranceCoverage: 50000,
      },
    ];
    

      
  
      
    
    
    

  
    const renderDetails = (rowData) => {
      if (rowData) {
        
        console.log("not found")
      }
      ;
   
    
    
      return (
        

        <div className="details-container">
          <p>Accompanying Family Members: {` ${data[0].accompanyingFamily}`}</p>
          <p>Dental Note: {` ${data[0].dental}`}</p>
          <p>Optical Note: {` ${data[0].optical}`}</p>
          <p>Maternity Waiting Period: {` ${data[0].maternity}`}</p>
          <p>New Born Baby Coverage:{` ${data[0].newBornBabyCoverage}`}</p>
          <p>Maternity Note: {` ${data[0].maternity}`}</p>
          <p>Group Life Insurance Coverage: {` ${data[0].groupLifeInsuranceCoverage}`}</p>
          {/* Render other details as needed */}
        </div>
      );
    };

  

  
  return (
    <div className="table-container table-container-sm">
      <DataTable
        columns={columns}
        data={data}
        noHeader
        highlightOnHover
        expandableRows // Enable row expansion
        expandableRowsComponent={renderDetails} // Use renderDetails function as the component
        expandOnRowClicked={false} // Disable row expansion on row click
        expandableRowExpanded={selectedRow !== null} // Expand the selected row
      />

      {selectedRow && (
        <div className="selected-row-details">
          {renderDetails(selectedRow)}
        </div>
      )}
    </div>
  );
};

export default InsuranceTable;