import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import './styles.css';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

export function OrphanagesMap() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Campo Grande</strong>
          <span>Mato Grosso do Sul</span>
        </footer>
      </aside>

      <MapContainer
        center={[-20.4353613, -54.6204637]}
        zoom={15}
        style={{ width: '100%', height: '100%;' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
      </MapContainer>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  );
}
