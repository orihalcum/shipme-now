import React from 'react';
import { Row, Col, Steps, Tabs, Modal } from 'antd';
import { isProduction } from '@/utils/misc';
import FormShippingConfirmation from '@/containers/organisms/form-shipping-confirmation';
import FormShippingShipment from '@/containers/organisms/form-shipping-shipment';
import FormShippingAddress from '@/containers/organisms/form-shipping-address';

const { Step } = Steps;
const { TabPane } = Tabs;

const SectionFormShipping = (props) => {

  let {
    form, data, onFinish, loading,
    onChangeStep, currentStep, formRef, closeModal, visibleModal,
    senderCountry, receiverCountry
  } = props

  const SHIPPING_STEPS = [
    {
      title: 'Pengirim',
      components: [
        {
          title: 'Pengirim',
          component: <FormShippingAddress {...props} fname="sender" country={senderCountry} />
        }
      ]
    },
    {
      title: 'Penerima',
      components: [
        {
          title: 'Penerima',
          component: <FormShippingAddress {...props} fname="receiver" country={receiverCountry} />
        }
      ]
    },
    {
      title: 'Muatan',
      components: [
        {
          title: 'Muatan',
          component: <FormShippingShipment {...props} />
        },
      ]
    },
  ]

  return (
    <div className="form-shipping" ref={formRef}>
      <Row gutter={60}>
        <Col lg={{ span: 16, offset: 4 }} md={{ span: 16, offset: 4 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Steps
            current={currentStep}
            onChange={(process.env.NEXT_STEP_SHIPPING_DEBUG && !isProduction()) && onChangeStep}
            size="large"
            direction="horizontal"
            labelPlacement="horizontal"
          >
            {
              SHIPPING_STEPS.map(({ title }, k) => (
                <Step title={title} key={k} />
              ))
            }
          </Steps>
        </Col>
        <Col span={24} className="mt-60 mt-sm-30 mt-xs-0">
          <Tabs
            defaultActiveKey="0"
            onChange={() => { }}
            centered
            size="large"
          >
            {
              currentStep < SHIPPING_STEPS.length &&
              SHIPPING_STEPS[currentStep].components.map(({ title, component }, k) => (
                <TabPane tab={<h5>{title}</h5>} key={k}>
                  <Row>
                    <Col className="mt-30 mb-30" lg={{ span: 16, offset: 4 }} md={{ span: 16, offset: 4 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                      {component}
                    </Col>
                  </Row>
                </TabPane>
              ))
            }
          </Tabs>
        </Col>
      </Row>

      {/* Modal Shipping Confirmation */}
      <Modal
        visible={visibleModal}
        onCancel={closeModal}
        width={1000}
        footer={null}
        centered
      >
        {
          visibleModal &&
          <FormShippingConfirmation
            form={form}
            data={data}
            onFinish={onFinish}
            loading={loading}
            closeModal={closeModal}
          />
        }
      </Modal>

    </div>
  );
};

export default SectionFormShipping;