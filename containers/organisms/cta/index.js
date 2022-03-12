import React from 'react';

const SectionCta = ({ id, children }) => {
  return (
    <div id={id} className="section-cta pt-30 pb-30 pb-sm-0 pb-xs-0">
      <div className="container">
        <h3>{ children }</h3>
      </div>
    </div>
  );
};

export default SectionCta;