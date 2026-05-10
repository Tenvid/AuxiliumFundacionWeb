import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.jsx';
import ProjectsPage from './pages/projects-page/ProjectsPage.jsx';
import ContactPage from './pages/contact-page/ContactPage.jsx';
import TransparencyPage from './pages/transparency-page/TransparencyPage.jsx';
import NewsPage from './pages/news-page/NewsPage.jsx';
import NewInPage from './pages/new-in-page/NewInPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/transparency" element={<TransparencyPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:slug" element={<NewInPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
