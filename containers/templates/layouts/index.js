import React from 'react';
import MainFooter from '../../organisms/footer';
import MainHeader from '../../organisms/header';
import MainHead from '../../organisms/head';
import { PropTypes } from 'prop-types'

const MainLayout = ({ children, metadata, transparentHeader, hideNavMenu }) => {
  return (
    <React.Fragment>
      <MainHead metadata={metadata} />
      <MainHeader 
        transparent={transparentHeader}
        hideNavMenu={hideNavMenu}
      />
      { children}
      <MainFooter />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  transparentHeader: PropTypes.bool,
}

MainLayout.defaultProps = {
  transparentHeader: false,
  children: ''
}