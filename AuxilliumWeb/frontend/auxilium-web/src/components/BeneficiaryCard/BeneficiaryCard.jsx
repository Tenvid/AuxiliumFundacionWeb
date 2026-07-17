//import shared data (Alignment)
import { CardAlignment } from '../../shared/CardAlignment';

//import styles
import styles from './BeneficiaryCard.module.css';

/**
 * BeneficiaryCard
 *
 * Presentational component that displays a beneficiary image and an associated
 * testimonial text. The image and text can be rendered with the image on the
 * left or right depending on the `imageAlignment` prop. Styles are provided
 * by the component stylesheet and by the shared `CardAlignment` constants.
 *
 * @param {Object} props
 * @param {string} props.image URL or path of the beneficiary image.
 * @param {string} props.imageAlt Alt text for the image (accessibility).
 * @param {React.ReactNode} props.children Testimonial content to display next to the image.
 * @param {string} props.imageAlignment One of `CardAlignment.LEFT` or `CardAlignment.RIGHT` to control layout.
 * @returns {JSX.Element}
 */
export default function BeneficiaryCard({
  image,
  imageAlt,
  children,
  imageAlignment,
}) {
  /**
   * Create the image of the beneficiary
   * 
   * @returns {JSX.Element}
   */
  function CardImage() {
    return (
      <img
        src={image}
        className={[styles.beneficiaryCard__Image, styles[imageAlignment]].join(
          ' '
        )}
        alt={imageAlt}
      />
    );
  }
  /**
   * Create the text attached to this beneficiary
   * 
   * @returns {JSX.Element}
   */
  function CardText() {
    return (
      <span
        className={[
          styles.beneficiaryCard__Text,
          imageAlignment == CardAlignment.LEFT
            ? styles.floatLeft
            : styles.floatRight,
        ].join(' ')}
      >
        {children}
      </span>
    );
  }

  return (
    <div className={styles.beneficiaryCard}>
      {imageAlignment == CardAlignment.LEFT ? (
        <>
          <CardImage />
          <CardText />
        </>
      ) : (
        <>
          <CardText />
          <CardImage />
        </>
      )}
    </div>
  );
}
