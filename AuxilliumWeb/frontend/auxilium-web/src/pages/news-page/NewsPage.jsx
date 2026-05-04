import { useState } from 'react';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import styles from './NewsPage.module.css';
import newsData from '../../../mocked_results/mocked_news.json';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';

function NewInGrid({ title = '', image = '' }) {
  return (
    <>
      <div className={styles.NewInGrid}>
        <img src={image} className={styles.NewImageonGrid}></img>
        <span className={styles.NewTitleinGrid}>{title}</span>
      </div>
    </>
  );
}
function NewsPage() {
  const [news, _] = useState(newsData);

  return (
    <div className={styles.ProjectsPageContainer}>
      <MainNav />
      <HeaderImage image={main_image}>Noticias</HeaderImage>
      <form className={styles.FilterGrid}>
        <div className={styles.NewsFilter}>
          <label htmlFor="event-type">Tipo de evento:</label>
          <select id="event-type">
            <option value="">Seleccionar tipo de evento</option>
            <option value="donacion">Donación</option>
            <option value="nuevo-proyecto">Nuevo Proyecto</option>
            <option value="estado-proyecto">Estado Proyecto</option>
            <option value="resultados-proyecto">Resultados Proyecto</option>
            <option value="evento">Evento</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className={styles.NewsFilter}>
          <label htmlFor="date-from">Fecha desde:</label>
          <input id="date-from" type="date"></input>
        </div>
        <div className={styles.NewsFilter}>
          <label htmlFor="date-to">Fecha hasta:</label>
          <input id="date-to" type="date"></input>
        </div>
      </form>
      <div className={styles.NewsGrid}>
        {Object.values(news).map((article, index) => (
          <NewInGrid key={index} title={article.title} image={article.image} />
        ))}
      </div>
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} alt="" />
      </footer>
    </div>
  );
}

export default NewsPage;
