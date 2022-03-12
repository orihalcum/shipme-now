import { Col, Form, Row } from 'antd';
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import { BG_HERO_LANDING, BG_LANDING_PAGE_FRONT } from '../../../config';
import FormShippingLanding from '../../organisms/form-shipping-landing';

const HeroLanding = () => {

  const [form] = Form.useForm()

  const handleSubmit = (values) => {}
  
  useEffect(() => {
    new Rellax('.rellax');
  }, [])

  return (
    <div className="hero-landing">
      <img src={BG_LANDING_PAGE_FRONT} className="hero-landing__bg-front-1 rellax" alt="..." data-rellax-speed="-3" />
      <div className="container">
        <Row gutter={[60]}>
          <Col lg={{ span: 14 }}>
            <img src={BG_HERO_LANDING} className="hero-landing__world-image" alt="..." />
            <div className="hero-landing__description mt-45">
              <h4 className="mb-10">Mulailah perjalanan kirim barangmu</h4>
              <p>Seberapapun banyak paket yang akan kamu kirimkan, <b className="color-primary">SHIPME.NOW</b> siap untuk menemani kiriman paketmu. Kembangkanlah usaha expor dan impor mu bersama <b className="color-primary">SHIPME.NOW</b></p>
            </div>
          </Col>
          <Col lg={{ span: 10 }} className="mb-sm-30 mb-xs-30 w-full">
            <FormShippingLanding
              form={form}
              onFinish={handleSubmit}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroLanding;