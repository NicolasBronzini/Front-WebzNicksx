import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Peticiones from './pages/Peticiones/peticiones';
import Newdevs from './pages/NewDevs/newdevs';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/presenta-tu-proyecto" element={<Peticiones />} />
        <Route path="/trabaja-con-nosotros" element={<Newdevs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
