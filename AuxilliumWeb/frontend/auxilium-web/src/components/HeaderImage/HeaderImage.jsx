// import styles
import styles from './HeaderImage.module.css';

/**
 * HeaderImage
 *
 * Presentational component that renders a header section with a piece of
 * text overlay and an image. Intended for use as the top banner or hero
 * element on pages. Styles are applied from `HeaderImage.module.css`.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children Text or markup rendered over the image.
 * @param {string} props.image Image source (URL or local path).
 * @param {string} [props.imageAlt] Optional alt text for the image (defaults to empty string).
 * @returns {JSX.Element}
 *
 */
export function HeaderImage({ children, image, imageAlt = '' }) {
  return (
    <section className={styles.textImageWrapper}>
      <p className={styles.textImageText}>{children}</p>
      <img
        src={image}
        alt={imageAlt}
        className={styles.textImageContent}
      />
    </section>
  );
}
