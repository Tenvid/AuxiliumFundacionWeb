import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.jsx';
import ProjectsPage from './pages/projects-page/ProjectsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
