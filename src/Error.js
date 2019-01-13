import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="ui negative message">
      <i className="close icon" />
      <div className="header">Error</div>
      <p>{error}</p>
    </div>
  );
};

export default Error;
