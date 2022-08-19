import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { OrphanagesMap } from './pages/OrphanagesMap';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/orphanages' element={<OrphanagesMap />} />
    </Routes>
  );
}
