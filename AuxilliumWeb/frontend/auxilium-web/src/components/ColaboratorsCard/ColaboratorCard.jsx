import styles from './ColaboratorCard.module.css';

export default function ColaboratorCard({ image, title, children }) {
  return (
    <div className={styles.ColaboratorCard}>
      <img className={styles.image} src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{children}</p>
    </div>
  );
}
