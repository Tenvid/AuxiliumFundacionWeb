import { useState } from 'react';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import styles from './NewsPage.module.css';
import newsData from '../../../mocked_results/mocked_news.json';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import LinkListInNews from '../../components/LinkListInNews/LinkListInNews';

function NewInGrid({ slug = '', title = '', image = '' }) {
  return (
    <>
      <a href={`/news/${slug}`} className={styles.NewsCardLink}>
        <div className={styles.NewInGrid}>
          <img src={image} className={styles.NewImageOnGrid} alt={title}/>
          <span className={styles.NewTitleinGrid}>{title}</span>
        </div>
      </a>
    </>
  );
}
function NewsPage() {
  const [news, _] = useState(newsData);

  return (
    <div>
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
          <NewInGrid
            key={index}
            slug={article.slug}
            title={article.title}
            image={article.image}
          />
        ))}
      </div>
      <LinkListInNews numberOfLinks={5} />
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} alt="" />
      </footer>
    </div>
  );
}

export default NewsPage;
