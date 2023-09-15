import React from 'react';
import InsuranceTable from '../../../components/Common/motor-insurance/individual/InsuranceTable.js';
import Navbar from '../../../components/_App/Navbar.js';
import SpecsBar from '../../../components/Common/motor-insurance/group/SpecsBar.js';


const QuotationResults = () => {
 
 
 
  return (
    <div>
     
      <Navbar /> {/* Render the Navbar component */}
   
      <SpecsBar data={{ numQuotes: 13, carModel: "Alfa Romeo GIULIETTA 2022", price: "1,900,000" }} />

      <InsuranceTable />
    </div>
  );
};

export default QuotationResults;
