import LandingPage from './pages/landing';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>

        <LandingPage/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
