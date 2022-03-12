import { Button } from 'antd';
import React from 'react';

const Handler404 = () => {

  const goToHome = () => {
    location.replace('/')
  }

  const goBack = () => {
    window.history.go(-1)
  }

  return (
    <div className="flex flex-centers" style={{ height: '100vh', flexDirection: 'column' }}>
      <div>
        <img src="/images/page-not-found.png" alt="404" style={{ width: 500, maxWidth: '80vh' }} />
      </div>
      <div className="mt-30 mb-30">
        <Button onClick={ e => { goBack() } } className="mr-15">Kembali</Button> 
        <Button onClick={ e => { goToHome() } }>Home</Button>
      </div>
    </div>
  );
};

export default Handler404;