import styles from './ProjectStyles.module.css';

/**
 * ProjectStyles
 *
 * Collection of presentational render helpers that return JSX for different
 * project layout variations used across the site. Each property is a function
 * that accepts a props object and returns a JSX element ready to be rendered.
 *
 * Available styles:
 * - styleOne({ text1, text2, image1, image2 })
 * - styleTwo({ text1, text2, image1 })
 * - styleThree({ text1, image1, image2 })
 * - styleFour({ text1, text2, image1 })
 *
 * Usage example:
 * import ProjectStyles from './ProjectStyles';
 * const element = ProjectStyles.styleOne({ text1: 'A', text2: 'B', image1: '/a.jpg', image2: '/b.jpg' });
 *
 * Note: these helpers are purely presentational. They expect image sources as
 * strings (src paths or URLs) and text values as strings. Caller is responsible
 * for providing valid values and handling accessibility concerns (e.g. alt text).
 */
const ProjectStyles = {
  /**
   * styleOne
   * Two-column layout where each column contains an image and a paragraph.
   * @param {Object} props
   * @param {string} props.text1 Left column text
   * @param {string} props.text2 Right column text
   * @param {string} props.image1 Left column image src
   * @param {string} props.image2 Right column image src
   * @returns {JSX.Element}
   */
  styleOne: ({ text1, text2, image1, image2 }) => (
    <div className="Project1">
      <div className={styles.ProjectType1}>
        <div className={styles.ProjectOneWrapperOne}>
          <p>{text1}</p>
          <img src={image1} alt="" />
        </div>
        <div className={styles.ProjectOneWrapperTwo}>
          <img src={image2} alt="" />
          <p>{text2}</p>
        </div>
      </div>
    </div>
  ),
  /**
   * styleTwo
   * Single-column layout with an image and supporting bottom text.
   * @param {Object} props
   * @param {string} props.text1 Main text shown next to the image
   * @param {string} props.text2 Bottom supporting text
   * @param {string} props.image1 Image src displayed in the main area
   * @returns {JSX.Element}
   */
  styleTwo: ({ text1, text2, image1 }) => (
    <div className="Project2">
      <div className={styles.ProjectType2}>
        <div className={styles.ProjectTwoWrapper}>
          <p>{text1}</p>
          <img src={image1} alt="" />
        </div>
        <p className={styles.ProjectTwoButtomText}>{text2}</p>
      </div>
    </div>
  ),
  /**
   * styleThree
   * Text block with two side-by-side photos.
   * @param {Object} props
   * @param {string} props.text1 Text displayed above the photos
   * @param {string} props.image1 First photo src
   * @param {string} props.image2 Second photo src
   * @returns {JSX.Element}
   */
  styleThree: ({ text1, image1, image2 }) => (
    <div className="Project3">
      <div className={styles.ProjectThreeWrapper}>
        <p className={styles.ProjectThreeText}>{text1}</p>
        <div className={styles.ProjectThreePhotoWrapper}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  ),
  /**
   * styleFour
   * Vertical layout with main text, a large image and secondary text.
   * @param {Object} props
   * @param {string} props.text1 Primary text
   * @param {string} props.text2 Secondary text shown below the image
   * @param {string} props.image1 Image src used in the middle of the layout
   * @returns {JSX.Element}
   */
  styleFour: ({ text1, text2, image1 }) => (
    <div className="Project4">
      <div className={styles.ProjectFourWrapper}>
        <p>{text1}</p>
        <img src={image1} className={styles.ProjectFourImage} alt="" />
        <p>{text2}</p>
      </div>
    </div>
  ),
};
export default ProjectStyles;
