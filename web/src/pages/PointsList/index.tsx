import React, { useState, useEffect } from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function PointsList() {
  const [points, setPoints] = useState([]);


  useEffect(() => {
    api.get('points/list', {
    }).then(response => {
      setPoints(response.data);
    })
  }, []);

  return (
    <div id="profile-container">

      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowDownLeft />
          Voltar para home
        </Link>
      </header>


      <h1>Encontre pontos de coleta em sua cidade:</h1>
      <ul>

        {points.map((point: any) => (


          <li key={point.id}>
            <strong>Ponto:</strong>
            <p>{point.name}</p>

            <strong>E-mail:</strong>
            <p>{point.email}</p>

            <strong>Whatsapp:</strong>
            <p>{point.whatsapp}</p>

            <strong>Cidade, estado:</strong>
            <p>{point.city}, {point.uf} </p>


            <strong>Itens coletados:</strong>
            <div className='items-grid'>

            {point.items.map((items: any) => (
                <li>
                <span>{items.title}</span>
                <img key={items.id} src={items.image_url} alt={items.title} />
                </li>
            ))}
            
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
