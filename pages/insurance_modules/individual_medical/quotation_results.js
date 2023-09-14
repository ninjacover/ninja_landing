
import React from 'react';
import InsuranceTable from '../../../components/Common/medical-insurance/individual/InsuranceTable.js';
import Navbar from '../../../components/_App/Navbar.js';
import UserInfo from '../../../components/Common/medical-insurance/individual/UserInfo.js';
import SpecsBar from '../../../components/Common/medical-insurance/group/SpecsBar.js';

const QuotationResults = () => {
 
  const DummyUser = {
    name: 'John Doe',
    company: 'ABC Insurance Co.',
    averageAge: 35,
    employees: 250,
  };
 
  return (
    <div>
     
      <Navbar /> {/* Render the Navbar component */}
      <UserInfo user={DummyUser} />
      <SpecsBar/>
      <InsuranceTable />
    </div>
  );
};

export default QuotationResults;
