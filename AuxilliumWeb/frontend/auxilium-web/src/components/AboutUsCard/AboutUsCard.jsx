import styles from './AboutUsCard.module.css';
export default function AboutUsCard({ title, children }) {
  return (
    <li className={styles.aboutUsCard}>
      <h3 className={styles.aboutUsCard__Title}>{title}</h3>
      <p>{children}</p>
    </li>
  );
}
