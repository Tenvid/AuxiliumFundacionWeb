import styles from './MemberCard.module.css';
export default function MemberCard({
  image,
  imageAlt,
  children,
  hasOnlyTitle = false,
}) {
  const cardImage = (
    <img src={image} className={styles.memberCard__Image} alt={imageAlt} />
  );
  const cardText = <span className={styles.floatLeft}>{children}</span>;

  return (
    <div
      className={[
        styles.memberCard,
        hasOnlyTitle == true ? styles.titleText : styles.normalText,
      ].join(' ')}
    >
      <>
        {cardImage}
        {cardText}
      </>
    </div>
  );
}
