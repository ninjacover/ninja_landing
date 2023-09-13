import React from 'react';
import InsuranceTable from '../../../components/Common/medical-insurance/group/InsuranceTable.js';
import Navbar from '../../../components/_App/Navbar.js';

const QuotationResults = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <InsuranceTable />
    </div>
  );
};

export default QuotationResults;
