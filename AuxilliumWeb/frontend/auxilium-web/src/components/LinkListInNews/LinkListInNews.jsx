import styles from './LinkListInNews.module.css';
import { Link } from 'react-router';
export default function LinkListInNews({ numberOfLinks = 5 , startPosition = 1, totalPages = 10}) {
  var firstelement = startPosition >= 2 ? (
    <Link to={`/news/page/1`} rel="noopener noreferrer">
      <span>
        {'<<'}
      </span>
    </Link>
  ) : null;
  var lastElement = startPosition + numberOfLinks < totalPages ? (<a href={`/news/page/${totalPages}`} rel="noopener noreferrer">
    <span className={styles.LastLink}>
      {'>>'}
    </span>
  </a>) : null;
  return (
    <div className={styles.LinkListInNews}>
      {firstelement}
      {Array.from({ length: Math.min(numberOfLinks - 1, totalPages +1 - startPosition) }, (_, index) => {
        const pageNumber = index + startPosition;
        return pageNumber === startPosition ? (
          <span key={index} className={styles.CurrentPage}>{pageNumber}</span>
        ) : (
          <Link key={index} to={`/news/page/${pageNumber}`} rel="noopener noreferrer">
            {pageNumber}
          </Link>
        );
      })}
      {lastElement}
    </div>
  );
}