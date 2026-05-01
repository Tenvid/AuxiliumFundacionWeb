import { useState } from 'react';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import styles from './ProjectsPage.module.css';
import projectsData from '../../../mocked_results/mocked_projects.json';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import ProjectStyles from '../../components/ProjectStyles/ProjectStyles';

const ProjectStyle = {
  ONE: 'styleOne',
  TWO: 'styleTwo',
  THREE: 'styleThree',
  FOUR: 'styleFour',
};

function GenerateProject(
  title = '',
  style = ProjectStyle.ONE,
  { text1 = '', text2 = '', image1 = '', image2 = '' } = {}
) {
  const tileElement = <div className={styles.ProjectHeader}>{title}</div>;

  /*INFO: This constant must be in PascalCase because is a React component*/
  const ProjectComponent = ProjectStyles[style];

function DisplayProject({ title = "", style = ProjectStyle.ONE, text1 = "", text2 = "", image1 = "", image2 = "" }) {
    const tileElement = <div className={styles.ProjectHeader}>{title}</div>
        
    /*INFO: This constant must be in PascalCase because is a React component*/
    const ProjectComponent = ProjectStyles[style]
    
    return ProjectComponent ? (
        <>
            {tileElement}
            <ProjectComponent text1={text1} text2={text2} image1={image1} image2={image2} />
        </>
    ) : null
}

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);

    return (
        <div className={styles.ProjectsPageContainer}>
            <MainNav/>
            <HeaderImage image={main_image}>
                Proyectos
            </HeaderImage>
            <DisplayProject title={projects.Project1.Title} style={ProjectStyle.ONE} text1={projects.Project1.Text1} text2={projects.Project1.Text2} image1={projects.Project1.Image1} image2={projects.Project1.Image2} />
            <DisplayProject title={projects.Project2.Title} style={ProjectStyle.THREE} text1={projects.Project2.Text1} text2="" image1={projects.Project2.Image1} image2={projects.Project2.Image2} />
            <DisplayProject title={projects.Project3.Title} style={ProjectStyle.FOUR} text1={projects.Project3.Text1} text2={projects.Project3.Text2} image1={projects.Project3.Image1} image2="" />
            <footer className={styles.footerWrapper}>
                <img src={logo_dark} alt="" />
            </footer>
        </div>
    )
}

export default ProjectsPage;
