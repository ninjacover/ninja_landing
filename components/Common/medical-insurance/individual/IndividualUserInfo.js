import React from 'react';

const UserInfo = ({ data }) => {
  // Create a dummy user object
  const dummyUser = {
    name: 'John Doe',
    averageAge: 32,
    company: 'ABC Insurance',
    employees: 100,
  };

  return (
    <div className="card text-center" style={{ marginTop: '9px', marginBottom: '20px' }}>
      <div className="card-header" style={{ backgroundColor: '#0c1c40', color: 'black', whiteSpace: 'nowrap' }}>
        <div className="container compare" style={{ textAlign: 'left' }}>
          <h2 className="text-center ystitle d-xs-block d-sm-block d-md-none">Your Information</h2>
          <div className="row">
            <div className="col-sm col-xs-6">
              <i className="fas fa-user"></i> Name: {data?.name || dummyUser.name}
            </div>
            <div className="col-sm col-xs-6">
              <i className="fas fa-building"></i> Company: {data?.company || dummyUser.company}
            </div>
            <div className="col-sm col-xs-6">
              <i className="fas fa-sort-numeric-down"></i> Average Age: {data?.averageAge || dummyUser.averageAge}
            </div>
            <div className="col-sm col-xs-6">
              <i className="fas fa-users"></i> Employees: {data?.employees || dummyUser.employees}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
