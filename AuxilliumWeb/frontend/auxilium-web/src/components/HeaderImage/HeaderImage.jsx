import styles from "./HeaderImage.module.css"


export function HeaderImage({ children, image, imageAlt = null }) {
  return (
    <section className={styles.textImageWrapper}>
      <p className={styles.textImageText}>
        {children}
      </p>
      <img
        src={image}
        alt={imageAlt ? imageAlt : ""}
        className={styles.textImageContent}
      />
    </section>
  )
}
