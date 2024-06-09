import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PrideLendingGraphs from "./components/PrideLendingGraphs.jsx";
import ConfettiPage from "./pages/ConfettiPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/pride-lending-graphs" element={<PrideLendingGraphs />} />
        <Route path="/confetti" element={<ConfettiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
