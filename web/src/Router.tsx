import { Routes, Route } from 'react-router-dom';
import { CreateOrphanage } from './pages/CreateOrphanage';
import { Landing } from './pages/Landing';
import { Orphanage } from './pages/Orphanage';
import { OrphanagesMap } from './pages/OrphanagesMap';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />

      <Route path='/orphanages' element={<OrphanagesMap />} />
      <Route path='/orphanages/create' element={<CreateOrphanage />} />
      <Route path='/orphanages/:id' element={<Orphanage />} />
    </Routes>
  );
}
