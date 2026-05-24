import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.jsx';
import ProjectsPage from './pages/projects-page/ProjectsPage.jsx';
import ContactPage from './pages/contact-page/ContactPage.jsx';
import TransparencyPage from './pages/transparency-page/TransparencyPage.jsx';
import AboutUs from './pages/about-us/AboutUs.jsx';
import Impact from './pages/impact-page/ImpactPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/transparency" element={<TransparencyPage />}></Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </Router>
  );
}

export default App;
