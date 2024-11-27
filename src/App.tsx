import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Dashboard from './routes/pages/Dashboard';
import PremiumCardProvider from './context/PremiumCardContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index path="/" element={<Dashboard />}></Route>
  )
);

function App() {
  return (
    <PremiumCardProvider>
      <RouterProvider router={router}></RouterProvider>
    </PremiumCardProvider>
  );
}

export default App;
