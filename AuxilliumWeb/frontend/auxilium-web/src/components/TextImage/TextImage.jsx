import styles from './TextImage.module.css';

export function TextImage({
  children,
  image,
  imageAlt = null,
  className = '',
}) {
  return (
    <section className={`${styles.textImageWrapper} ${className}`}>
      <p className={styles.textImageText}>{children}</p>
      <img
        src={image}
        alt={imageAlt ?? ''}
        className={styles.textImageContent}
      />
    </section>
  );
}
