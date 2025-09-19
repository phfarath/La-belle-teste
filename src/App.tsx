import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Treatments from './pages/Treatments';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
// import Blog from './pages/Blog';
import WhatsAppButton from './components/ui/WhatsAppButton';
import PromoAlert from './components/ui/PromoAlert';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import WhatsAppRedirect from './pages/WhatsAppRedirect';
import Lia from './pages/Lia';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';

function App() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show promo after 3 seconds
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePromo = () => {
    setShowPromo(false);
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            {showPromo && (
              <PromoAlert
                message="Conheça a Lia - Sua doutora virtual com IA! Clique aqui para saber mais."
                onClose={handleClosePromo}
              />
            )}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/whatsapp" element={<WhatsAppRedirect />} />
              <Route path="/lia" element={<Lia />} />
              {/* <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} /> */}
            </Routes>
            <WhatsAppButton />
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;