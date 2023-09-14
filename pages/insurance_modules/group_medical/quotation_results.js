import React from 'react';
import InsuranceTable from '../../../components/Common/medical-insurance/group/InsuranceTable.js';
import Navbar from '../../../components/_App/Navbar.js';
import GroupUserInfo from '../../../components/Common/medical-insurance/group/GroupUserInfo.js';

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
       {/* <GroupUserInfo user={DummyUser} /> */}
      <InsuranceTable />
    </div>
  );
};

export default QuotationResults;
