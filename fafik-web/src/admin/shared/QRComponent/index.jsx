import React from 'react';
import QRCode from 'qrcode.react';

const QRComponent = props => {
  return <QRCode value={props.value} />;
};

export default QRComponent;
