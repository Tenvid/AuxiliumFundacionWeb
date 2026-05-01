import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import { MainNav } from '../../components/MainNav/MainNav';
import UnorderedList from '../../components/UnorderedList/UnorderedList.jsx';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import styles from './TransparencyPage.module.css';
import UnorderedLinkList from '../../components/UnorderedLinkList/UnorderedLinkList.jsx';

import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
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
        <UnorderedList
          elementList={[
            'Domicilio fiscal: Calle Gloria 79 2B 30150 Murcia.',
            'Domicilio social: Calle Gloria 79 2B 30150 Murcia.',
            'Número de asociados: []',
            ['Miembros: ', ['Presidente: []', 'Vicepresidente: []']],
          ]}
          listClassName={styles.transparencyList}
          elementClassName={styles.transparencyListElement}
        ></UnorderedList>

        <p className={styles.transparencyParagraph}>
          Además adjuntamos la siguiente documentación:
        </p>
        <UnorderedLinkList
          elementList={[
            ['Estatus de la entidad', '#'],
            ['Acta fundacional', '#'],
            ['Certificado de inscripción registral', '#'],
            ['Reglamento interno', '#'],
          ]}
          listClassName={styles.transparencyList}
          elementClassName={styles.transparencyListElement}
        ></UnorderedLinkList>
        <h3 className={styles.transparencyTitle}>Resumen del año fiscal</h3>
        <p className={styles.transparencyParagraph}>
          Queremos garantizar la transparencia de la contabilidad de la
          asociación para ello realizamos auditorias de nuestras cuentas con una
          auditoría externa. Adjuntamos los informes redactados por las
          auditorias para que puedan ser revisados:
        </p>

        <UnorderedLinkList
          elementList={[
            ['Informe año fiscal 2027', '#'],
            ['Informe año fiscal 2026', '#'],
            ['Informe año fiscal 2025', '#'],
            ['Informe año fiscal 2024', '#'],
          ]}
          listClassName={styles.transparencyList}
          elementClassName={styles.transparencyListElement}
        ></UnorderedLinkList>

        <h3 className={styles.transparencyTitle}>
          Desglose de gastos en proyectos
        </h3>
        <p className={styles.transparencyParagraph}>
          Queremos ser transparentes con los gastos asociados a los proyectos de
          la asociación por ello adjuntamos los informes con el desglose en
          gastos de cada proyecto llevado acabo por la organización asi como
          como se ha financiado y el personal involucrado:
        </p>

        <UnorderedLinkList
          elementList={[
            ['Informe proyecto 1', '#'],
            ['Informe proyecto 2', '#'],
            ['Informe proyecto 3', '#'],
          ]}
          listClassName={styles.transparencyList}
          elementClassName={styles.transparencyListElement}
        ></UnorderedLinkList>
      </div>
      <footer className="footer-wrapper">
        <img src={logo_dark} className="footer-logo" alt="" />
      </footer>
    </>
  );
}
