import React from 'react';
import { history } from '../../helpers';

const HomeComponent = () => {
  return (<div style={{fontSize: '70px'}}>
    MIŁOŚĆ WIERNOŚĆ W ZAKOPANEM
    <button onClick={() => history.push('/oferta')}>KUP SOBIE STRONE</button>
  </div>
  );
};
export default HomeComponent;
