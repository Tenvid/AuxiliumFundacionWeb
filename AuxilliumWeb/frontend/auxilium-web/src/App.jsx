import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.jsx';
import ProjectsPage from './pages/projects-page/ProjectsPage.jsx';
import ContactPage from './pages/contact-page/ContactPage.jsx';
import TransparencyPage from './pages/transparency-page/TransparencyPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/transparency" element={<TransparencyPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
