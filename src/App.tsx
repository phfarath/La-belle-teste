import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Treatments from './pages/Treatments';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';
import PromoAlert from './components/ui/PromoAlert';

function App() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show promo after 3 seconds
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          {showPromo && (
            <PromoAlert 
              message="Botox Promo until May 30 — 20% off your first session" 
              onClose={() => setShowPromo(false)} 
            />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <WhatsAppButton />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;