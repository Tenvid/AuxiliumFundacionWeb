import { useState, useEffect } from 'react'
import { MainNav } from '../../components/MainNav/MainNav'
import {HeaderImage} from '../../components/HeaderImage/HeaderImage'
import logo_dark from "../../assets/LogoAuxiliumVector--dark.svg"
import styles from './ProjectsPage.module.css'
import projectsData from '../../../mocked_results/mocked_projects.json'
import main_image from "../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"


const ProjectStyleComponents = {
    styleOne: ({ text1, text2, image1, image2 }) => (
        <div className='Project1'>
            <div className={styles.ProjectType1}>
                <div className={styles.ProjectOneWrapperOne}>
                    <p>
                        {text1}
                    </p>
                    <img src={image1} alt=""/>
                </div>
                <div className={styles.ProjectOneWrapperTwo}>
                    <img src={image2} alt=""/>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    ),
    styleTwo: ({ text1, text2, image1 }) => (
        <div className='Project2'>
            <div className={styles.ProjectType2}>
                <div className={styles.ProjectTwoWrapper}>
                    <p>{text1}</p>
                    <img src={image1} alt=""/>
                </div>
                <p className={styles.ProjectTwoButtomText}>{text2}</p>
            </div>
        </div>
    ),
    styleThree: ({ text1, image1, image2 }) => (
        <div className='Project3'>
            <div className={styles.ProjectThreeWrapper}>
                <p className={styles.ProjectThreeText}>
                    {text1}
                    </p>
                <div className={styles.ProjectThreePhotoWrapper}>
                    <img src={image1} alt=""/>
                    <img src={image2} alt=""/>
                </div>
            </div>
        </div>
    ),
    styleFour: ({ text1, text2, image1 }) => (
        <div className='Project4'>
            <div className={styles.ProjectFourWrapper}>
                <p>{text1}</p>
                <img src={image1} className={styles.ProjectFourImage} alt=""/>
                <p>{text2}</p>
            </div>
        </div>
    )
}

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
    
    const Component = styleKey ? ProjectStyleComponents[styleKey] : null
    
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