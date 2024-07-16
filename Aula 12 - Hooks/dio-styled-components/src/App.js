import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from "./pages/feed"
import { Teste } from "./pages/"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
        <Route path="teste" element={<Teste/>}>Alterar</Route>
      </Routes>
    </Router>
  );
}

export default App;
