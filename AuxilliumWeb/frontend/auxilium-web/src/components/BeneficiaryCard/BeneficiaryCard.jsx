import { CardAlignment } from '../../shared/CardAlignment';
import styles from './BeneficiaryCard.module.css';
export default function BeneficiaryCard({
  image,
  imageAlt,
  children,
  imageAlignment,
}) {
  const cardImage = (
    <img
      src={image}
      className={[styles.beneficiaryCard__Image, styles[imageAlignment]].join(
        ' '
      )}
      alt={imageAlt}
    />
  );
  const cardText = (
    <span
      className={[
        styles.beneficiaryCard__Text,
        imageAlignment === CardAlignment.LEFT
          ? styles.floatLeft
          : styles.floatRight,
      ].join(' ')}
    >
      {children}
    </span>
  );

  return (
    <div className={styles.beneficiaryCard}>
      {imageAlignment === CardAlignment.LEFT ? (
        <>
          {cardImage}
          {cardText}
        </>
      ) : (
        <>
          {cardText}
          {cardImage}
        </>
      )}
    </div>
  );
}
