import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./pages/Input";
import Assembly from "./pages/Assembly";
import { PartsProvider } from "./pages/PartsContext";

const App = () => {
  return (
    <PartsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/Assembly" element={<Assembly />} />
        </Routes>
      </Router>
    </PartsProvider>
  );
};

export default App;
