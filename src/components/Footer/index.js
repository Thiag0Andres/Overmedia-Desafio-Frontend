import React from 'react';

// Icons
import Grupo20 from '../../assets/Grupo 20.svg';
import svg768049 from '../../assets/768049.svg';
import svg215654 from '../../assets/215654.svg';

// Styles
import './styles.css';

function Footer() {
  return (
    <div id="Footer">
      <div>
        <span>
          <img src={svg768049} alt="" />
        </span>
        <span>
          <img src={Grupo20} alt="" />
        </span>
      </div>
      <div className="content-hands">
        <img src={svg215654} alt="" />
      </div>
    </div>
  );
}

export default Footer;
