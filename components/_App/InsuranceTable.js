import { FaUserMd,  FaHospital,FaCheckCircle, FaTimesCircle, FaCapsules, FaTooth, FaEye, FaBabyCarriage,FaPills } from 'react-icons/fa';
  import DataTable from 'react-data-table-component';
  import InsuranceCard from './InsuranceCard';
  import UserInfo from './UserInfo';

  import React, { useState, useEffect } from 'react';

  
  const InsuranceTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);

    const [windowWidth, setWindowWidth] = useState(null);

    // const [oddRowBackground, setOddRowBackground] = useState(false);
    

  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      const addResizeListener = () => {
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
          setWindowWidth(window.innerWidth);
        }
      };
  
      const removeResizeListener = () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
  
      addResizeListener();
  
      return removeResizeListener;
    }, []);
    const isMobile = windowWidth !== null && windowWidth <= 768; // Adjust the breakpoint as needed

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
      setIsPopupOpen(true);
      console.log(setIsPopupOpen);
    };
    
    const closePopup = () => {
      setIsPopupOpen(false);
    };
    


  const columns = [

    {
        
        name: <div className='plan-header'>Plan</div>,
        selector: 'plan',
        sortable: true,
        allowOverflow: true,
        width: '100px'
   
      },
      {
        name: <div className='group-premium-header'>Premium</div>,
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
          <div className="small-text" >
          {row.inPatient ? `${row.inPatientCoverage}` : 'Not Covered'}
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
            <div className="small-text">
            {row.outPatient ? `${row.outPatientCoverage} EGP` : 'Not Covered'}
            </div>
          </div>
        ),
      },
      {
        name: 'Diseases',
        selector: 'chronicPreExistingDisease',
        sortable: true,
        cell: row => (
          <div>   
            <div className="icon-text"> 
              <FaPills className="icon-row" />
              {row.chronicPreExistingDisease ? <FaCheckCircle className="tick-icon" /> : <FaTimesCircle className="cross-icon" />}
            </div>
            <div className="small-text">
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
            <div className="small-text">
            {row.medication ? `${row.medicationCoverage} EGP` : 'Not Covered'}

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
            <div className='small-text'>
            {row.dental ? `${row.dentalCoverage} EGP` : 'Not Covered'}
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
            <div className="small-text">
            {row.optical ? `${row.opticalCoverage} EGP` : 'Not Covered'}
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
            <div className='small-text'>
            {row.maternity ? `${row.maternityCoverage} EGP` : 'Not Covered'}

            </div>
          </div>
        ),
      },
      
      {
        name: 'Actions',
        cell: row => (
          <div className="action-buttons-container" >
<button className="select-button" onClick={openPopup.bind(this)}>Select</button>
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
        groupPremium: '24,000',
        inPatient: true,
        inPatientCoverage: '3,500 EGP',
        outPatient: false,
        outPatientCoverage: "Not Covered",
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '2,000',
        medication: true,
        medicationCoverage: '15,000',
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
        maternityNote: 'Intensive baby care limit 1K Caesarean limit 5K Natural birth limit 4K Legal miscarriage limit 3K',
     groupLifeInsuranceCoverage: 25000,
      },
      {
        plan: 'Plan B',
        groupPremium: '29,000',
        inPatient: true,
        inPatientCoverage: '2,500 EGP',
        outPatient: true,
        outPatientCoverage: '10,800',
        chronicPreExistingDisease: false,
        chronicPreExistingDiseaseCoverage: "Not Covered",
        medication: true,
        medicationCoverage: '2,000',
        dental: false,
        dentalCoverage: "Not Covered",
        optical: true,
        opticalCoverage: '2,800',
        maternity: true,
        maternityCoverage: '2,200',
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
        groupPremium: '30,000',
        inPatient: true,
        inPatientCoverage: '10,000 EGP',
        outPatient: true,
        outPatientCoverage: '20,220',
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '2,000',
        medication: true,
        medicationCoverage: '1,500',
        dental: true,
        dentalCoverage: '2,800',
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
        groupPremium: '45,000',
        inPatient: true,
        inPatientCoverage: '3,000 EGP',
        outPatient: true,
        outPatientCoverage: '20,500',
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '2,000',
        medication: true,
        medicationCoverage: '2,200',
        dental: true,
        dentalCoverage: '2,800',
        optical: true,
        opticalCoverage: '3,000',
        maternity: true,
        maternityCoverage: '2,500',
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
        groupPremium: '50,000',
        inPatient: true,
        inPatientCoverage: '2,800 EGP',
        outPatient: true,
        outPatientCoverage: '21,200',
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '1,800',
        medication: true,
        medicationCoverage: '2,000',
        dental: false,
        dentalCoverage: "Not Covered",
        optical: true,
        opticalCoverage: '2,500',
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
        groupPremium: '52,000',
        inPatient: true,
        inPatientCoverage: '3,000 EGP' ,
        outPatient: true,
        outPatientCoverage: '22,200',
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '1,500',
        medication: true,
        medicationCoverage: '1,880',
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
        groupPremium: '100,000',
        inPatient: true,
        inPatientCoverage: '35,000 EGP',
        outPatient: true,
        outPatientCoverage: '22,800',
        chronicPreExistingDisease: true,
        chronicPreExistingDiseaseCoverage: '2,220',
        medication: true,
        medicationCoverage: '2,500',
        dental: true,
        dentalCoverage: '3,000',
        optical: true,
        opticalCoverage: '2,200',
        maternity: true,
        maternityCoverage: '2,800',
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
    const dummyUser = {
      name: 'John Doe',
      averageAge: 32,
      company: 'ABC Insurance',
      employees: 100,
    };
    
    const renderDetails = (rowData) => {
      if (rowData) {
        
        console.log("not found")
      }
      ;
   
    
    
      return (
        

        <div className="details-container">
        <p><span className="details-label">Accompanying Family Members:</span> {data[0].accompanyingFamily}</p>
        <p><span className="details-label">Dental Note:</span> {data[0].dentalNote}</p>
        <p><span className="details-label">Optical Note:</span> {data[0].opticalNote}</p>
        <p><span className="details-label">Maternity Waiting Period:</span> {data[0].maternityWaitingPeriod}</p>
        <p><span className="details-label">New Born Baby Coverage:</span> {data[0].newBornBabyCoverage}</p>
        <p><span className="details-label">Maternity Note:</span> {data[0].maternityNote}</p>
        <p><span className="details-label">Group Life Insurance Coverage:</span> {data[0].groupLifeInsuranceCoverage}</p>
        {/* Render other details as needed */}
      </div>
      
      );
    };

  

    if (isMobile) {
      return (
        <div className="insurance-card-container">
         <UserInfo dummyUser/>
          {data.map((entry, index) => (
            <InsuranceCard key={index} data={entry} />
          ))}
        </div>
      );
    }
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
       // Expand the selected row
      />
{/* 
      {selectedRow && (
        <div className="selected-row-details">
          {renderDetails(selectedRow)}
        </div>
      )} */}
    </div>
  );
};

export default InsuranceTable;