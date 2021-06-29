import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chess from './pages/Chess';
import Language from './pages/Language';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
