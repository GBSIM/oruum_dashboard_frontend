import './default.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import LandingPage from './components/views/LandingPage/LandingPage';
import StockPage from './components/views/StockPage/StockPage';
import EconomyPage from './components/views/EconomyPage/EconomyPage';
import IndustryPage from './components/views/IndustryPage/IndustryPage';
import PortfolioPage from './components/views/PortfolioPage/PortfolioPage';
import SimulationPage from './components/views/SimulationPage/SimulationPage';

import { getCurrentPrice } from './_reducers/stock';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCurrentPrice('aapl'));
  },[]);

  return (
    <Router>
      <div>
        <Routes>  
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Stock" element={<StockPage />} />
          <Route exact path="/Economy" element={<EconomyPage />} />
          <Route exact path="/Industry" element={<IndustryPage />} />
          <Route exact path="/Portfolio" element={<PortfolioPage />} />
          <Route exact path="/Simulation" element={<SimulationPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
