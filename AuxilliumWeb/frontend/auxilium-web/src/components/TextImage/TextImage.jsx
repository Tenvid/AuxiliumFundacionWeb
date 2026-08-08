import styles from './TextImage.module.css';
import { Link } from 'react-router-dom';

export function TextImage({
  children,
  image,
  imageAlt = null,
  className = '',
  href,
}) {
  const content = (
    <section className={`${styles.textImageWrapper} ${className}`}>
      <p className={styles.textImageText}>{children}</p>
      <img
        src={image}
        alt={imageAlt ?? ''}
        className={styles.textImageContent}
      />
    </section>
  );

  return href ? (
    <Link to={href} className={styles.textImageLink}>
      {content}
    </Link>
  ) : (
    content
  );
}
