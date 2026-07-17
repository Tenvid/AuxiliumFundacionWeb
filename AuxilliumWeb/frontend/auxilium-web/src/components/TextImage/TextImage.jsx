// Import styles
import styles from './TextImage.module.css';

/**
 * TextImage
 *
 * Simple presentational component that renders a block of text alongside an
 * image. Semantically similar to `HeaderImage` but intended for smaller
 * content blocks. The `children` prop can be any renderable node.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children Text or elements shown next to the image.
 * @param {string} props.image Image source (URL or local path).
 * @param {string} [props.imageAlt] Optional alt text for the image (defaults to empty string).
 * @returns {JSX.Element}
 */
export function TextImage({ children, image, imageAlt = '' }) {
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
