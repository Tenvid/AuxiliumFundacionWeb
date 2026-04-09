import { useState, useEffect } from 'react'
import { MainNav } from '../../components/MainNav/MainNav'
import {HeaderImage} from '../../components/HeaderImage/HeaderImage'
import logo_dark from "../../assets/LogoAuxiliumVector--dark.svg"
import styles from './ProjectsPage.module.css'
import projectsData from '../../../mocked_results/mocked_projects.json'
import main_image from "../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
import ProjectStyles from '../../components/ProjectStyles/ProjectStyles'

function GenerateProject(title = "", text1 = "", text2 = "", image1 = "", image2 = "", stylefour = false) {
    const tileElement = <div className={styles.ProjectHeader}>{title}</div>
    
    let styleKey = null
    
    if (stylefour) {
        styleKey = 'styleFour'
    } else if (text1 && text2 && image1 && image2) {
        styleKey = 'styleOne'
    } else if (text1 && text2 && image1) {
        styleKey = 'styleTwo'
    } else if (text1 && image1 && image2) {
        styleKey = 'styleThree'
    }
    
    const Component = styleKey ? ProjectStyles[styleKey] : null
    
    return Component ? (
        <>
            {tileElement}
            <Component text1={text1} text2={text2} image1={image1} image2={image2} />
        </>
    ) : null
}

function ProjectsPage() {
    const [projects, setProjects] = useState(projectsData)
    
    useEffect(() => {
        console.log(projects)
    }, [])

    return (
        <div className={styles.ProjectsPageContainer}>
            <MainNav/>
            <HeaderImage image={main_image}>
                Proyectos
            </HeaderImage>
            {GenerateProject(projects.Project1.Title, projects.Project1.Text1, projects.Project1.Text2, projects.Project1.Image1, projects.Project1.Image2)}
            {GenerateProject(projects.Project2.Title,projects.Project2.Text1,"",projects.Project2.Image1, projects.Project2.Image2)}
            {GenerateProject(projects.Project3.Title,projects.Project3.Text1,projects.Project3.Text2,projects.Project3.Image1,"", true)}
            <footer className={styles.footerWrapper}>
                <img src={logo_dark} alt="" />
            </footer>
        </div>
    )
}

export default ProjectsPage