import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Peticiones from './pages/Peticiones/peticiones';
import Newdevs from './pages/NewDevs/newdevs';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/presenta-tu-proyecto" element={<Peticiones />} />
        <Route path="/trabaja-con-nosotros" element={<Newdevs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
