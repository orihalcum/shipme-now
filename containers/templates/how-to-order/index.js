import React, { useState } from 'react';
import { Row, Col, List, Avatar } from 'antd';
import SectionTitle from '../../../components/atoms/section-title';
import { IMG_ORDER } from '../../../config'

const HowToOrder = ({ id }) => {

  const [list, setList] = useState([
    { id: 1, title: 'Masukan alamat Asal dan Tujuan', description: 'Dan jangan lupa, klik Kirim Sekarang!', active: true },
    { id: 2, title: 'Isi detail barang yang akan dikirim', description: 'Pastikan terisi semua ya!', active: false },
    { id: 3, title: 'Dapatkan penawaran harga instant', description: 'Liat dikolom harga ya!', active: false },
    { id: 4, title: 'Lakukan pembayaran', description: 'Cek emaail kamu karena kami telah mengirimkan airwaybill untuk melakukan langkah pembayaran', active: false },
    { id: 5, title: 'Tunggu barang kamu untuk dipick up!', description: '', active: false },
  ])

  const handleClick = (index) => {
    let _list = list
    _list = _list.map((v, k) => {
      v.active = k === index
      return v
    })
    setList(_list)
  }

  return (
    <div id={id || 'cara-memesan'} className="how-to-order">
      <div className="container pt-90 pb-lg-90 pb-md-60 pt-xs-0 pt-sm-0">
        <div className="how-to-order__title text-center pt-60 pb-60 pt-sm-60 pb-sm-30 pt-xs-60 pb-xs-30">
          <SectionTitle title="Cara Memesan" />
        </div>
        <div className="how-to-order__content">
          <Row gutter={60}>
            <Col lg={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }} >
              <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, k) => (
                  <List.Item
                    className={item.active ? 'active' : ''}
                    onClick={() => handleClick(k)}
                  >
                    <List.Item.Meta
                      avatar={<Avatar>{item.id}</Avatar>}
                      title={<span style={{ fontSize: '1.1rem' }}>{item.title}</span>}
                      description={<p className="mb-0">{item.description}</p>}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col lg={{ span: 12 }}>
              <img src={IMG_ORDER} className="mt-sm-30 mt-xs-30" style={{ height: 'auto', width: '100%' }} alt="..." />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;