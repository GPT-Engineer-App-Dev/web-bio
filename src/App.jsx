import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PrideLendingGraphs from "./components/PrideLendingGraphs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/pride-lending-graphs" element={<PrideLendingGraphs />} />
      </Routes>
    </Router>
  );
}

export default App;
