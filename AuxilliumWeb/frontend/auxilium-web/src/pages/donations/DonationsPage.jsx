import { MainNav } from '../../components/MainNav/MainNav';
import { TextImage } from '../../components/TextImage/TextImage';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import styles from './DonationsPage.module.css';
import { Link } from 'react-router-dom';

export default function DonationPage() {
  return (
    <>
      <MainNav />
      <TextImage image={main_image}>DONACIONES</TextImage>
      <h3>
        El importe íntegro de las donaciones que recibimos se destina a nuestra
        causa
      </h3>

      <main className={styles.donationsContent}>
        <div className={styles.donationsArticle}>
          <h4>Aceptamos donativos a través de nuestra cuenta bancaria.</h4>
          <div className={styles.donationsArticleContent}>
            <div className={styles.donationsArticle__InnerContainer}>
              <p>Titular: Auxilium Asociación</p>
              <p>Banco: Caixabank</p>
              <p>IBAN:</p>
              <div className={styles.ibanCopy}>
                ES66 2100 7400 3502 0014 3552
              </div>
            </div>

            <div className={styles.paragraphContainer}>
              <p>
                Puede realizar su donativo mediante transferencia bancaria,
                indicando su nombre en el concepto para que podamos confirmar la
                aportación.
              </p>
              <p>
                Actualmente no podemos emitir certificados de donación para
                desgravación fiscal. En cuanto nos autoricen a hacerlo, lo
                comunicaremos a través de la web.
              </p>
              <p>
                Si necesita información adicional, puede escribirnos o
                llamarnos; encontrará ambos datos en la sección de contacto.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.donationsArticle}>
          <h4>Tambien aceptamos donanciones de objetos</h4>
          <div className={styles.donationsArticleContent}>
            <div className={styles.donationsArticle__InnerContainer}>
              <p>Telefono:</p>
              <div className={styles.ibanCopy}>+34 603 73 80 00</div>
            </div>

            <div className={styles.paragraphContainer}>
              <p>
                Si desea donar un objeto a la asociación, contacte con nosotros
                mediante nuestro número de teléfono y le daremos más información
                al respecto. Cada objeto podría requerir un procedimiento
                concreto.
              </p>
            </div>
          </div>
        </div>

        <Link to="/projects" className={styles.projectsLink}>
          Mira en que empleamos nuestras donaciones en nuestro apartado de
          proyectos
        </Link>
      </main>
    </>
  );
}
