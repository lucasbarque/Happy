import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../../assets/map-marker.svg';

import './styles.css';

export function Sidebar() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/');
  }

  return (
    <aside className='app-sidebar'>
      <img src={mapMarkerImg} alt='Happy' />

      <footer>
        <button type='button' onClick={handleNavigate}>
          <FiArrowLeft size={24} color='#fff' />
        </button>
      </footer>
    </aside>
  );
}
