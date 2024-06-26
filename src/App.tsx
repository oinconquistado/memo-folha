import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Employees from '@/pages/Employees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={'/'} element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
