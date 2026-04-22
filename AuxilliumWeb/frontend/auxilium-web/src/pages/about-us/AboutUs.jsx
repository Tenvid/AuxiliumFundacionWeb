import styles from './AboutUs.module.css';
import { MainNav } from '../../components/MainNav/MainNav';

export default function AboutUs() {
  return (
    <>
      <MainNav />
      <h1 className={styles.aboutUsTitle}>¿Quiénes somos?</h1>
    </>
  );
}
