import Work from './assets/Pages/Work.jsx';
import PortfolioNavbar from './assets/Components/PortfolioNavbar.jsx';
import PortfolioFooter from './assets/Components/PortfolioFooter.jsx';
import ScrollTopButton from './assets/Components/ScrollTopButton.jsx';
import './assets/Css/app.css';

function App() {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <Work />
      </main>
      <PortfolioFooter />
      <ScrollTopButton />
    </>
  );
}

export default App;
