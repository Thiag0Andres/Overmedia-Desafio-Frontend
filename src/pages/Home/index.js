import React, { useState } from 'react';

// Components
import Footer from '../../components/Footer';

// Icons
import Page1 from '../../assets/Page-1/Page-1.png';
import Avatar from '../../assets/Retângulo 110/Retângulo 110@2x.png';
import Grupo62 from '../../assets/Grupo 62.svg';
import Caminho394 from '../../assets/Caminho 394.svg';
import svg726532 from '../../assets/726532.svg';
import Caminho399 from '../../assets/Caminho 399.svg';
import Caminho395 from '../../assets/Caminho 395.svg';

// Styles
import './styles.css';

function Home() {
  const [active, setActive] = useState(true);

  return (
    <div id="home-container">
      <div className="header">
        <h1>Proposta</h1>
        <img src={Page1} alt="" />
      </div>
      <div className="content-avatar">
        <img src={Avatar} alt="" />
        <span>Bruna da Silva Santos</span>
      </div>
      <div className="content">
        <ul>
          <div className="first-list-items">
            <li>
              <div className="image-content">
                <img src={Grupo62} alt="" />
              </div>

              <div>
                <h2 className="title-info">Cargo</h2>
                <p className="text-info">Consultor de RH</p>
              </div>
            </li>
            <li>
              <div className="image-content">
                <img src={Caminho394} alt="" />
              </div>

              <div>
                <h2 className="title-info">Salário</h2>
                <p className="text-info">R$10.000,00</p>
              </div>
            </li>
          </div>

          <li>
            <div className="image-content">
              <img src={svg726532} alt="" />
            </div>
            <div>
              <h2 className="title-info">Bônus PPR</h2>
              <p className="text-info">2,4 salários por ano</p>
            </div>
          </li>

          <li>
            <div className="image-content">
              <img src={Caminho399} alt="" />
            </div>
            <div>
              <h2 className="title-info">Início</h2>
              <p className="text-info">12/05/2021</p>
            </div>
          </li>

          <li>
            <div className="image-content">
              <img src={Caminho395} alt="" />
            </div>
            <div>
              <h2 className="title-info">Localização</h2>
              <p className="text-info">Escritório VIVO São Paulo</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-footer">
        <Footer IconP={active} IconB={!active} />
      </div>
    </div>
  );
}

export default Home;
