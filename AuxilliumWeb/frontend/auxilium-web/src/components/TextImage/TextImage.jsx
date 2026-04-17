import styles from './TextImage.module.css';

export function TextImage({ children, image, imageAlt = null }) {
  return (
    <section className={styles.textImageWrapper}>
      <p className={styles.textImageText}>{children}</p>
      <img
        src={image}
        alt={imageAlt ? imageAlt : ''}
        className={styles.textImageContent}
        // width={800}
        // height={300}
      />
    </section>
  );
}
