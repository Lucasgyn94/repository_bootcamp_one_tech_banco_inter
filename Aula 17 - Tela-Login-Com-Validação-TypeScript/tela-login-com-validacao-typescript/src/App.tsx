import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/Login/index';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
      </Routes>
  </Router>
  );
}

export default App;
