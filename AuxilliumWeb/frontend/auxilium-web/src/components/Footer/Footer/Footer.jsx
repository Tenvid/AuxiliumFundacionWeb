// import styles
import styles from './Footer.module.css';

// Import logo asset
import logo_dark from '../../../assets/LogoAuxiliumVector--dark.svg';

/**
 * Footer
 *
 * Minimal site footer component that renders the organization logo. The
 * component is presentational and does not accept props. Styling is provided
 * by the module stylesheet `Footer.module.css`.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <img src={logo_dark} className={styles.footerLogo} alt="Auxilium logo" />
    </footer>
  );
}
