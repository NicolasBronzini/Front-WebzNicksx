import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import NotFound from "./pages/NotFound/NotFound"

import Newdevs from './pages/NewDevs/newdevs';
import Peticiones from './pages/Peticiones/peticiones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/presenta-tu-proyecto" element={<Peticiones />} />
        <Route path="/trabaja-con-nosotros" element={<Peticiones />} />
      </Routes>
    </Router>
  )
}

export default App
