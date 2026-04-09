import styles from "./ProjectStyles.module.css"
const ProjectStyles = {
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
export default ProjectStyles