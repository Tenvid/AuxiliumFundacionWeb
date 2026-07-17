// import styles
import styles from './ImageWithHeaderAndButton.module.css';

/**
 * ImageWithHeaderAndButton
 *
 * Presentational hero/cta component that places a background image with a
 * header, descriptive text and a call-to-action button. Intended for the
 * main page (e.g. the "Colabora" section) but generic enough for reuse.
 *
 * @param {Object} props
 * @param {string} props.header Heading text displayed above the paragraph.
 * @param {string} props.text Paragraph or supporting text under the header.
 * @param {string} props.buttonText Text displayed inside the CTA button/link.
 * @param {string} props.buttonHref Href/URL used for the CTA link.
 * @param {string} props.image Image source used as the visual background.
 * @param {string} [props.imageAlt] Optional alt text for the image (defaults to empty string).
 * @returns {JSX.Element}
 *
 * Example:
 * <ImageWithHeaderAndButton
 *   header="Help us"
 *   text="Support our programs"
 *   buttonText="Donate"
 *   buttonHref="/donate"
 *   image="/assets/donate.jpg"
 * />
 */
export function ImageWithHeaderAndButton({
  header,
  text,
  buttonText,
  buttonHref,
  image,
  imageAlt = '',
}) {
  return (
    <section className={styles.imageWithHeaderAndButtonWrapper}>
      <img
        src={image}
        alt={imageAlt}
        className={styles.imageWithHeaderAndButtonImage}
      />
      <div className={styles.imageWithHeaderAndButtonContent}>
        <h4 className={styles.imageWithHeaderAndButtonHeader}>{header}</h4>
        <p className={styles.imageWithHeaderAndButtonText}>{text}</p>
        <a href={buttonHref} className={styles.imageWithHeaderAndButtonButton}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
export default ImageWithHeaderAndButton;
