import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import Footer from '../../components/Footer/Footer/Footer.jsx';
import styles from './ContactPage.module.css';
import { MainNav } from '../../components/MainNav/MainNav';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import ContactWrapper from '../../components/ContactContainer/ContactWrapper';
import ContactForm from '../../components/ContactForm/ContactForm';
function ContactPage() {
  return (
    <>
      <MainNav></MainNav>
      <HeaderImage image={main_image}>Contacta con Nosotros</HeaderImage>
      <div className={styles.contactTitle}>
        <h3>Nuestra Sede</h3>
      </div>
      <div className={styles.ContactGrid}>
        <ContactWrapper
          title="Sede en Murcia"
          adress="Calle de la gloria 79 | 30150 | Murcia "
          contact_name=""
          phone_number="+34 603 73 80 00"
          email="auxiliumasociacion@gmail.com"
        />
      </div>
      <div className={styles.emailTitle}>
        <h3>Contacta con Nosotros</h3>
      </div>
      {/*TODO */}
      <ContactForm />

      <Footer />
    </>
  );
}

export default ContactPage;
