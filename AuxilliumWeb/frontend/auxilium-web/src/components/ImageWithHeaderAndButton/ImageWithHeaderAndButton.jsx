import styles from './ImageWithHeaderAndButton.module.css';
import { Link } from 'react-router-dom';

export function ImageWithHeaderAndButton({
  header,
  text,
  buttonText,
  buttonHref,
  image,
  imageAlt = null,
}) {
  return (
    <section className={styles.imageWithHeaderAndButtonWrapper}>
      <img
        src={image}
        alt={imageAlt ? imageAlt : ''}
        className={styles.imageWithHeaderAndButtonImage}
      />
      <div className={styles.imageWithHeaderAndButtonContent}>
        <h4 className={styles.imageWithHeaderAndButtonHeader}>{header}</h4>
        <p className={styles.imageWithHeaderAndButtonText}>{text}</p>
        <Link to={buttonHref} className={styles.imageWithHeaderAndButtonButton}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
export default ImageWithHeaderAndButton;
