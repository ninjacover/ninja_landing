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
    <div className="your-details">
      <div className="detail-row">
        <div className="detail-label">Name:</div>
        <div className="detail-value">{data?.name || dummyUser.name}</div>
      </div>
      <div className="detail-row">
        <div className="detail-label">Average Age:</div>
        <div className="detail-value">{data?.averageAge || dummyUser.averageAge}</div>
      </div>
      <div className="detail-row">
        <div className="detail-label">Company:</div>
        <div className="detail-value">{data?.company || dummyUser.company}</div>
      </div>
      <div className="detail-row">
        <div className="detail-label">Employees:</div>
        <div className="detail-value">{data?.employees || dummyUser.employees}</div>
      </div>
    </div>
  );
};

export default UserInfo;
