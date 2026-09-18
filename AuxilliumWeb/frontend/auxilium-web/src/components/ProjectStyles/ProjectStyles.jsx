import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ProjectStyles.module.css';

function MarkdownText({ children, className }) {
  if (typeof children !== 'string' || !children.trim()) {
    return null;
  }

  return (
    <div className={`${styles.ProjectMarkdownText} ${className || ''}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}

const ProjectStyles = {
  styleOne: ({ text1, text2, image1, image2 }) => (
    <div className="Project1">
      <div className={styles.ProjectType1}>
        <div className={styles.ProjectOneWrapperOne}>
          <MarkdownText className={styles.ProjectOneText}>{text1}</MarkdownText>
          <img src={image1} alt="" />
        </div>
        <div className={styles.ProjectOneWrapperTwo}>
          <img src={image2} alt="" />
          <MarkdownText className={styles.ProjectOneText}>{text2}</MarkdownText>
        </div>
      </div>
    </div>
  ),
  styleTwo: ({ text1, text2, image1 }) => (
    <div className="Project2">
      <div className={styles.ProjectType2}>
        <div className={styles.ProjectTwoWrapper}>
          <MarkdownText className={styles.ProjectTwoText}>{text1}</MarkdownText>
          <img src={image1} alt="" />
          <MarkdownText className={styles.ProjectTwoButtomText}>
            {text2}
          </MarkdownText>
        </div>
      </div>
    </div>
  ),
  styleThree: ({ text1, image1, image2 }) => (
    <div className="Project3">
      <div className={styles.ProjectThreeWrapper}>
        <MarkdownText className={styles.ProjectThreeText}>{text1}</MarkdownText>
        <div className={styles.ProjectThreePhotoWrapper}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  ),
};
export default ProjectStyles;
