import newsData from '../../../mocked_results/mocked_news.json';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import { useParams } from 'react-router-dom';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import styles from './NewInPage.module.css';

export default function NewInPage() {
  const { slug } = useParams();
  const selectedNew = Object.values(newsData).find((item) => item.slug === slug);

  return (
    <div className={styles.NewInPageContainer}>
      <MainNav />
      <section className={styles.NewsDetailWrapper}>
        {!selectedNew && (
          <h2 className={styles.ErrorMessage}>
            No existe una noticia para el slug recibido.
          </h2>
        )}

        {selectedNew && (
          <article>
            <h1 className={styles.NewsTitle}>{selectedNew.title}</h1>
            <p className={styles.NewsDate}>{selectedNew.date}</p>
            <p className={styles.NewsHeader}>{selectedNew.header}</p>
            <img
              src={selectedNew.image}
              alt={selectedNew.title}
              className={styles.NewsImage}
            />
            <p className={styles.NewsContent}>{selectedNew.content}</p>
          </article>
        )}
      </section>
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} alt="" />
      </footer>
    </div>
  );
}