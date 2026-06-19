import React, { useState, useEffect } from 'react';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import styles from './ProjectsPage.module.css';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import ProjectStyles from '../../components/ProjectStyles/ProjectStyles';

import Footer from '../../components/Footer/Footer/Footer.jsx';
const ProjectStyle = {
  ONE: 'styleOne',
  TWO: 'styleTwo',
  THREE: 'styleThree',
  FOUR: 'styleFour',
};

const STYLES_ARRAY = ['styleOne', 'styleThree', 'styleFour'];

function DisplayProject({
  title = '',
  style = '',
  text1 = '',
  text2 = '',
  image1 = '',
  image2 = '',
}) {
  const tileElement = <div className={styles.ProjectHeader}>{title}</div>;

  /*INFO: This constant must be in PascalCase because is a React component*/
  const ProjectComponent = ProjectStyles[style];

  return ProjectComponent ? (
    <>
      {tileElement}
      <ProjectComponent
        text1={text1}
        text2={text2}
        image1={image1}
        image2={image2}
      />
    </>
  ) : null;
}

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `/api/projects/`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Datos recibidos de la API:", data);
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando proyectos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!projects || projects.length === 0) return <div>No hay proyectos disponibles</div>;

  return (
    <div className={styles.ProjectsPageContainer}>
      <MainNav />
      <HeaderImage image={main_image}>Proyectos</HeaderImage>
      {projects.map((project, index) => {
        const style = STYLES_ARRAY[index % STYLES_ARRAY.length];
        const text1 = project.paragraph_list?.[0] || '';
        const text2 = project.paragraph_list?.[1] || '';
        const image1 = project.image_list?.[0] || '';
        const image2 = project.image_list?.[1] || '';

        return (
          <DisplayProject
            key={index}
            title={project.title}
            style={style}
            text1={text1}
            text2={text2}
            image1={image1}
            image2={image2}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default ProjectsPage;
