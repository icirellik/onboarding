import React from 'react';
import { Link } from 'react-router-dom';

const MarketingInfo = () => {
  return (
    <div>
      <h3>Employee Onboarding</h3>
      <span>
        Welcome to the new hire onboarding portal,Please log in to cotinue.
      </span>
      <Link to="/login">Login</Link>
    </div>
  )
};

export default MarketingInfo;
