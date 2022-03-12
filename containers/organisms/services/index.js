import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'antd'
import SectionTitle from '../../../components/atoms/section-title';
import SectionSubTitle from '../../../components/atoms/section-subtitle';
import ScrollAnimation from 'react-animate-on-scroll';


/**
 * 
 * Service Section divided into 2 styles :
 * 'ImageLeft' Image in Left Column and Title-Description in Right Column
 * 'ImageRight' The opposite
 */

const ServiceSection = ({ title, description, image, formType }) => {

  const [section] = useState({
    image: (
      <Col lg={{ span: 14 }}>
        <div className="w-full text-center">
          <img
            src={image}
            alt={title}
            style={{ height: 'auto', width: '100%' }}
            className="service-section__image pb-sm-30 pb-xs-30 pt-sm-30 pt-xs-30"
          />
        </div>
      </Col>
    ),
    description: (
      <Col lg={{ span: 10 }}>
        <div className="flex" style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <SectionTitle title={title} />
          <SectionSubTitle text={description} />
        </div>
      </Col>
    )
  })

  const [content] = useState(
    formType && formType === 'ImageRight'
      ? <>
        { section.description}
        { section.image}
      </>
      : <>
        { section.image}
        { section.description}
      </>
  )

  // Mobile View
  const [contentMobile] = useState(
    <>
      { section.image}
      { section.description}
    </>
  )

  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      duration={2}
      animateOnce={true}
    >
      <div className="service-section">
        <div className="container pt-0 pb-0">
          <Row gutter={60} className="hidden-xs hidden-sm">
            {content}
          </Row>
          <Row gutter={60} className="hidden-lg hidden-md">
            {contentMobile}
          </Row>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ServiceSection;

ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  formType: PropTypes.string
}

ServiceSection.defaultProps = {
  title: '',
  description: '',
  image: '',
  formType: 'ImageLeft',
}