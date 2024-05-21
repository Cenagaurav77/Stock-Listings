import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockOverview } from "./pages/StockOverviewPage";
import { StockDetail } from "./pages/StockDetailPage";
import { pageHeader } from "./components/Header";
import { pageFooter } from "./components/Footer";

function App() {
  return (
    <div className="container">
      {/* <pageHeader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverview />} />
          <Route path="/detail/:symbol" element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
      {/* <pageFooter /> */}
    </div>
  );
}

export default App;
