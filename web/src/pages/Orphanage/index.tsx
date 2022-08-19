import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { Sidebar } from '../../components/Sidebar';

// import PrimaryButton from "../../components/PrimaryButton";
// import Sidebar from "../../components/Sidebar";
// import Map from "../../components/Map";

import './styles.css';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

interface Orphanage {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    url: string;
    id: number;
  }>;
}

export function Orphanage() {
  const { id } = useParams();
  const [orphanage, setOrphanage] = useState<Orphanage>({} as Orphanage);

  useEffect(() => {
    api.get(`orphanages/${id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [id]);

  console.log(orphanage);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <div id='page-orphanage'>
      <Sidebar />

      <main>
        <div className='orphanage-details'>
          {orphanage.images && (
            <img src={orphanage?.images[0].url} alt={orphanage.name} />
          )}

          <div className='images'>
            {/*={orphanage.images.map((image) => {
              return (
                <button className='active' type='button'>
                  <img key={image.id} src={image.url} alt={orphanage.name} />
                </button>
              );
            })} */}
          </div>

          <div className='orphanage-details-content'>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className='map-container'>
              {/* <Map
                interactive={false}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>  */}

              <footer>
                <a href=''>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className='open-details'>
              <div className='hour'>
                <FiClock size={32} color='#15B6D6' />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className='open-on-weekends'>
                  <FiInfo size={32} color='#39CC83' />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className='open-on-weekends dont-open'>
                  <FiInfo size={32} color='#ff669d' />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            {/* <PrimaryButton type='button'>
              <FaWhatsapp size={20} color='#FFF' />
              Entrar em contato
            </PrimaryButton> */}
          </div>
        </div>
      </main>
    </div>
  );
}
