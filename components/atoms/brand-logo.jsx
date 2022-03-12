import React from 'react';
import { BRAND_LOGO } from '../../config';
import PropTypes from 'prop-types'

const BrandLogo = ({ height, width, className }) => {
  return <img src={ BRAND_LOGO } className={ className } style={{ height, width }} alt="brand logo" />
};

export default BrandLogo;

BrandLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
}

BrandLogo.defaultProps = {
  height: '30px',
  width: 'auto',
  className: ''
}