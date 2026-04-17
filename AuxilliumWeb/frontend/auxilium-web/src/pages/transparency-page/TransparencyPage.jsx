import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import { MainNav } from '../../components/MainNav/MainNav';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import styles from './TransparencyPage.module.css';

export default function TransparencyPage() {
  return (
    <>
      <MainNav></MainNav>
      <HeaderImage image={main_image}>Portal de transparencia</HeaderImage>

      <h2 className={styles.transparencySubtitle}>
        Buscamos ser totalmente transparentes con nuestras cuentas, por ello
        recibimos auditorias constantes y publicamos nuestras cuentas cada año
      </h2>

      <div className={styles.bodyWrapper}>
        <h3 className={styles.transparencyTitle}>
          Forma juridica de la empresa
        </h3>
        <p className={styles.transparencyParagraph}>
          Queremos asegurar que la asociación cumple con el marco legal y que
          esta dada de alta como empresa y como se organiza internamente,
          garantizando una total transparencia en la forma de actuar de la
          empresa.
        </p>
        <ul className={styles.transparencyList}>
          <li className={styles.transparencyListElement}>
            Domicilio fiscal: Calle Gloria 79 2B 30150 Murcia.
          </li>
          <li className={styles.transparencyListElement}>
            Domicilio social: Calle Gloria 79 2B 30150 Murcia.
          </li>
          <li className={styles.transparencyListElement}>
            Número de asociados: []
          </li>
          <li className={styles.transparencyListElement}>
            Forma jurídica: Asociación
          </li>
          <li className={styles.transparencyListElement}>
            Número de registro de la empresa: G13932249
          </li>
          <li className={styles.transparencyListElement}>
            Número de personas en el consejo de administración:
            <ul className={styles.transparencyList}>
              <li className={styles.transparencyListElement}>Presidente: []</li>
              <li className={styles.transparencyListElement}>
                Vicepresidente: []
              </li>
            </ul>
          </li>
        </ul>

        <p className={styles.transparencyParagraph}>
          Además adjuntamos la siguiente documentación:
        </p>
        <ul className={styles.transparencyList}>
          <li className={styles.transparencyListElement}>
            <a href="">Estatus de la entidad</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Acta fundacional</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Certificado de inscripción registral</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Reglamento interno</a>
          </li>
        </ul>

        <h3 className={styles.transparencyTitle}>Resumen del año fiscal</h3>
        <p className={styles.transparencyParagraph}>
          Queremos garantizar la transparencia de la contabilidad de la
          asociación para ello realizamos auditorias de nuestras cuentas con una
          auditoría externa. Adjuntamos los informes redactados por las
          auditorias para que puedan ser revisados:
        </p>

        <ul className={styles.transparencyList}>
          <li className={styles.transparencyListElement}>
            <a href="">Informe año fiscal 2027</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Informe año fiscal 2026</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Informe año fiscal 2025</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Informe año fiscal 2024</a>
          </li>
        </ul>

        <h3 className={styles.transparencyTitle}>
          Desglose de gastos en proyectos
        </h3>
        <p className={styles.transparencyParagraph}>
          Queremos ser transparentes con los gastos asociados a los proyectos de
          la asociación por ello adjuntamos los informes con el desglose en
          gastos de cada proyecto llevado acabo por la organización asi como
          como se ha financiado y el personal involucrado:
        </p>

        <ul className={styles.transparencyList}>
          <li className={styles.transparencyListElement}>
            <a href="">Informe proyecto 1</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Informe proyecto 2</a>
          </li>
          <li className={styles.transparencyListElement}>
            <a href="">Informe proyecto 3</a>
          </li>
        </ul>
      </div>
    </>
  );
}
