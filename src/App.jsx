import { Routes, Route } from 'react-router-dom';
import Work from './assets/Pages/Work.jsx';
import About from './assets/Pages/About.jsx';
import PortfolioNavbar from './assets/Components/PortfolioNavbar.jsx';
import PortfolioFooter from './assets/Components/PortfolioFooter.jsx';

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <PortfolioFooter />
    </>
  );
}

export default App;
