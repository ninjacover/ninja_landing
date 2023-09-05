import { FaUserMd, FaBriefcaseMedical, FaHospital, FaUserShield,FaCheckCircle, FaTimesCircle, FaCapsules, FaTooth, FaEye, FaBabyCarriage, FaDownload, FaPills } from 'react-icons/fa';
  import DataTable from 'react-data-table-component';

  import React, { useState } from 'react';

  const InsuranceTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [oddRowBackground, setOddRowBackground] = useState(false);
    
  
    const handleDetailsClick = row => {
      setSelectedRow(row === selectedRow ? null : row);
    };
    const toggleOddRowBackground = () => {
      setOddRowBackground(!oddRowBackground);
    };

  const columns = [
      {
        name: 'Plan',
        selector: 'plan',
        sortable: true,
        
      },
      {
        name: <div>Group Premium</div>,
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
            discount:5000
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
              discount: 5000 {/* Replace with the appropriate discount value */}
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
        outPatient: false,
        chronicPreExistingDisease: true,
        medication: true,
        dental: false,
        optical: false,
        maternity: false,
        accompanyingFamily: 'Not Covered',
        physiotherapy: '10 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: '25,000 EGP',
      },
      {
        plan: 'Plan B',
        groupPremium: '$29000',
        inPatient: true,
        outPatient: true,
        chronicPreExistingDisease: false,
        medication: true,
        dental: false,
        optical: true,
        maternity: true,
        accompanyingFamily: 'Covered',
        physiotherapy: '12 Sessions',
        dentalNote: 'Covered for Basic Procedures',
        opticalNote: 'Covered for Eye Exams',
        maternityWaitingPeriod: '6 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered with conditions',
        groupLifeInsuranceCoverage: '30,000 EGP',
      },
      {
        plan: 'Plan C',
        groupPremium: '$30000',
        inPatient: false,
        outPatient: true,
        chronicPreExistingDisease: true,
        medication: true,
        dental: true,
        optical: false,
        maternity: false,
        accompanyingFamily: 'Not Covered',
        physiotherapy: '8 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: '20,000 EGP',
      },
      {
        plan: 'Plan D',
        groupPremium: '$45000',
        inPatient: true,
        outPatient: true,
        chronicPreExistingDisease: true,
        medication: true,
        dental: true,
        optical: true,
        maternity: true,
        accompanyingFamily: 'Covered',
        physiotherapy: '15 Sessions',
        dentalNote: 'Covered for Major Procedures',
        opticalNote: 'Covered for Glasses and Lenses',
        maternityWaitingPeriod: '3 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered without conditions',
        groupLifeInsuranceCoverage: '35,000 EGP',
      },
      {
        plan: 'Plan E',
        groupPremium: '$50000',
        inPatient: true,
        outPatient: true,
        chronicPreExistingDisease: true,
        medication: true,
        dental: false,
        optical: true,
        maternity: false,
        accompanyingFamily: 'Not Covered',
        physiotherapy: '10 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Covered for Eye Exams',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: '40,000 EGP',
      },
      {
        plan: 'Plan F',
        groupPremium: '$52000',
        inPatient: true,
        outPatient: true,
        chronicPreExistingDisease: true,
        medication: true,
        dental: false,
        optical: false,
        maternity: false,
        accompanyingFamily: 'Covered',
        physiotherapy: '20 Sessions',
        dentalNote: 'Not Covered',
        opticalNote: 'Not Covered',
        maternityWaitingPeriod: 'Not Covered',
        newBornBabyCoverage: 'Not Covered',
        maternityNote: 'Not Covered',
        groupLifeInsuranceCoverage: '45,000 EGP',
      },
      {
        plan: 'Plan G',
        groupPremium: '$100000',
        inPatient: true,
        outPatient: true,
        chronicPreExistingDisease: true,
        medication: true,
        dental: true,
        optical: true,
        maternity: true,
        accompanyingFamily: 'Covered',
        physiotherapy: '25 Sessions',
        dentalNote: 'Covered for All Procedures',
        opticalNote: 'Covered for Glasses and Lenses',
        maternityWaitingPeriod: '3 months waiting period',
        newBornBabyCoverage: 'Covered',
        maternityNote: 'Covered with conditions',
        groupLifeInsuranceCoverage: '50,000 EGP',
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