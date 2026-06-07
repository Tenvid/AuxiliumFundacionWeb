import React, { useState, useEffect } from 'react'; // Importa useEffect
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import styles from './NewsPage.module.css';
// import newsData from '../../../mocked_results/mocked_news.json';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import LinkListInNews from '../../components/LinkListInNews/LinkListInNews';
import { Link } from 'react-router';
import { useParams } from 'react-router-dom';
function NewInGrid({ slug = '', title = '', image = '' }) {
  return (
    <>
      <Link to={`/news/${slug}`} className={styles.NewsCardLink}>
        <div className={styles.NewInGrid}>
          <img src={image} className={styles.NewImageOnGrid} alt={title}/>
          <span className={styles.NewTitleinGrid}>{title}</span>
        </div>
      </Link>
    </>
  );
}
function NewsPage() {
  const [news, setNews] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    start_date: '',
    end_date: ''
  });
    const { page: pageString } = useParams();
    const page = parseInt(pageString, 10) || 1;
    console.log(page)

  // 3. useEffect para buscar datos cuando los filtros cambian
  useEffect(() => {
    // Construye la URL con los parámetros de búsqueda
    const params = new URLSearchParams();
    if (filters.type) {
      params.append('type', filters.type);
    }
    if (filters.start_date) {
      params.append('start_date', filters.start_date);
    }
    if (filters.end_date) {
      params.append('end_date', filters.end_date);
    }

    const queryString = params.toString();
    const apiUrl = `http://127.0.0.1:8000/news${queryString ? `?${queryString}` : ''}`;


    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {

        console.log("Datos recibidos de la API:", data);

        setNews(data);
      })
      .catch(error => console.error("Error fetching news:", error));

  }, [filters]);

    
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
          <input id="date-from" type="date"/>
        </div>
        <div className={styles.NewsFilter}>
          <label htmlFor="date-to">Fecha hasta:</label>
          <input id="date-to" type="date"/>
        </div>
      </form>
      <div className={styles.NewsGrid}>
        {news.map((article, index) => (
          <NewInGrid
            key={article.id}
            slug={article.slug}
            title={article.title}
            image={article.image}
          />
        ))}
      </div>
      <LinkListInNews numberOfLinks={5} startPosition={page} />
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} alt="" />
      </footer>
    </div>
  );
}

export default NewsPage;
