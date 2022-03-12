import React from 'react';
import BrandLogo from '../../../components/atoms/brand-logo';
import { PhoneOutlined, InstagramOutlined } from '@ant-design/icons'

let d = new Date()

const MainFooter = () => {
  return (
    <div id="hubungi-kami" className="main-footer">
      <div className="container pt-30 pb-30">
        <div className="main-footer__contact-us ts-sm-center">
          <h5 className="mb-10 mb-sm-5 mb-xs-5">Hubungi Kami</h5>
          <div className="main-footer__contact-us__wrapper">
            <div className="main-footer__contact-us__phone mr-sm-15 mr-xs-15"><a href="tel:081234567891"><PhoneOutlined /> 0812-3456-7891</a></div>
            <div className="main-footer__contact-us__instagram"><a href="#" target="_blank"><InstagramOutlined /> SHIPME.NOW</a></div>
          </div>
        </div>
        <div className="main-footer__copyright text-right">
          <BrandLogo height="auto" className="hidden-xs" />
          <div className="main-footer__copyright__text mt-15 mt-xs-0">&copy; { d.getFullYear() } SHIPME.NOW - All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;