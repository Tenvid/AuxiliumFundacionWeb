import { useState } from 'react';
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

const projectsData = await fetch('http://localhost:8000/projects').then(
  (response) => response.json()
);

console.log(projectsData);

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
  const [projects, _] = useState(projectsData);

  return (
    <div className={styles.ProjectsPageContainer}>
      <MainNav />
      <HeaderImage image={main_image}>Proyectos</HeaderImage>
      <DisplayProject
        title={projects[0].title}
        style={ProjectStyle.ONE}
        text1={projects[0].paragraph_list[0]}
        text2={projects[0].paragraph_list[1]}
        image1={projects[0].image_list[0]}
        image2={projects[0].image_list[1]}
      />
      <DisplayProject
        title={projects[1].title}
        style={ProjectStyle.THREE}
        text1={projects[1].paragraph_list[0]}
        text2={projects[1].paragraph_list[1]}
        image1={projects[1].image_list[0]}
        image2={projects[1].image_list[1]}
      />
      <DisplayProject
        title={projects[2].title}
        style={ProjectStyle.FOUR}
        text1={projects[2].paragraph_list[0]}
        text2={projects[2].paragraph_list[1]}
        image1={projects[2].image_list[0]}
        image2={projects[2].image_list[1]}
      />

      <Footer />
    </div>
  );
}

export default ProjectsPage;
