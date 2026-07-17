// import styles
import styles from './AboutUsCard.module.css';

/**
 * AboutUsCard
 *
 * Presentational list item used on the About Us page to display a single
 * association value or feature. Renders a heading and a paragraph inside a
 * styled `<li>` element.
 *
 * @param {Object} props
 * @param {string} props.title Title text displayed as the card heading.
 * @param {React.ReactNode} props.children Content/description displayed below the title.
 * @returns {JSX.Element} A styled list item representing a single value card.
 *
 * Example:
 * <AboutUsCard title="Transparency">We publish our financial reports monthly.</AboutUsCard>
 */
export default function AboutUsCard({ title, children }) {
  return (
    <li className={styles.aboutUsCard}>
      <h3 className={styles.aboutUsCard__Title}>{title}</h3>
      <p>{children}</p>
    </li>
  );
}
