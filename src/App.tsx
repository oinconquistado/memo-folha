import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Employees from '@/pages/Employees';
import APIContextProvider from '@/context/APIContext';

function App() {
  return (
    <APIContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={'/'} element={<Employees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </APIContextProvider>
  );
}

export default App;
