import React from 'react';

const UserInfoMobile = ({ data }) => {
  // Create a dummy user object
  const dummyUser = {
    name: 'John Doe',
    averageAge: 32,
    company: 'ABC Insurance',
    employees: 100,
  };

  return (
    <div className="your-detail-mobile">
      <header className="your-info-title">Your Information</header>
      <div className="detail-row-mobile">
        <div className="detail-label-mobile">Name:</div>
        <div className="detail-value-mobile">{data?.name || dummyUser.name}</div>
      </div>
      <div className="detail-row-mobile">
        <div className="detail-label-mobile">Average Age:</div>
        <div className="detail-value-mobile">{data?.averageAge || dummyUser.averageAge}</div>
      </div>
      <div className="detail-row-mobile">
        <div className="detail-label-mobile">Company:</div>
        <div className="detail-value-mobile">{data?.company || dummyUser.company}</div>
      </div>
      <div className="detail-row-mobile">
        <div className="detail-label-mobile">Employees:</div>
        <div className="detail-value-mobile">{data?.employees || dummyUser.employees}</div>
      </div>
    </div>
  );
};

export default UserInfoMobile;
