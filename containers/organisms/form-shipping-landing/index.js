import { Button, Form, Select } from 'antd';
import { PropTypes } from 'prop-types';
import React from 'react';

const FormShippingLanding = ({ form, onFinish, loading }) => {
  return (
    <div className="form-shipping-landing">
      <h1 className="form-shipping-landing__title color-primary mb-30">SHIPME.NOW</h1>
      <Form
        form={form}
        onFinish={onFinish}
        name="receiver"
      >
        <div style={{ position: 'relative' }}>
          <Form.Item
            name="source"
            rules={[
              { required: true, message: 'Mohon isi Negara Asal' },
            ]}
          >
            <Select showSearch placeholder="Negara Asal">
              <Select.Option value="id">Indonesia</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div style={{ position: 'relative' }}>
          <Form.Item
            name="destination"
            rules={[
              { required: true, message: 'Mohon isi Negara Tujuan' },
            ]}
          >
            <Select showSearch placeholder="Negara Tujuan">
              <Select.Option value="my">Malaysia</Select.Option>
              <Select.Option value="sg">Singapura</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit" size="large" loading={loading}>Kirim Sekarang!</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormShippingLanding;

FormShippingLanding.propTypes = {
  onFinish: PropTypes.func,
  loading: PropTypes.bool
}

FormShippingLanding.defaultProps = {
  onFinish: () => {},
  loading: false
}