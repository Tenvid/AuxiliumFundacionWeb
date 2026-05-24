import styles from './Footer.module.css';
import logo_dark from '../../../assets/LogoAuxiliumVector--dark.svg';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <img src={logo_dark} className={styles.footerLogo} alt="" />
    </footer>
  );
}
