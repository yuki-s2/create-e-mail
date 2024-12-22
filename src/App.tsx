import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Input from './pages/Input';
import Assembly from './pages/Assembly';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Input />}
        />
        <Route
          path="/Assembly"
          element={<Assembly />}
        />
      </Routes>
    </Router>
  );
};

export default App; 