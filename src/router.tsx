import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomeView from './views/HomeView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeView />} />
    </>
  )
);

export default router;
