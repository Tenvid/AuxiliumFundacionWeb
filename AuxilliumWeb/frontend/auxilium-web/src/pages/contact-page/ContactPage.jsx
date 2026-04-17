import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import styles from './ContactPage.module.css';
import { MainNav } from '../../components/MainNav/MainNav';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import ContactWrapper from '../../components/ContactContainer/ContactWrapper';
function ContactPage() {
  return (
    <>
      <MainNav></MainNav>
      <HeaderImage image={main_image}>Contacta con Nosostros</HeaderImage>
      <div className={styles.contactTitle}>
        <h3>Nuestras Sedes</h3>
        <div className={styles.ContactGrid}>
          <ContactWrapper
            title="Sede en Murcia"
            adress="Calle Falsa 123"
            contact_name="Samuel"
            phone_number="+34 600 00 00 00"
            email="contact@auxilium.es"
          />
        </div>
      </div>
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} className={styles.footerLogo} alt="" />
      </footer>
    </>
  );
}

export default ContactPage;
