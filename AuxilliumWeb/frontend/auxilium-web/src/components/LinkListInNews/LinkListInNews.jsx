import styles from './LinkListInNews.module.css';
export default function LinkListInNews({ numberOfLinks = 5 , startPosition = 2, totalPages = 10}) {
  var firstelement = startPosition >= 2 ? (
    <a href={`/news/page/1`} rel="noopener noreferrer">
      <span className={styles.FirstLink}>
        {'<<'}
      </span>
    </a>
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
          <a key={index} href={`/news/page/${pageNumber}`} rel="noopener noreferrer">
            {pageNumber}
          </a>
        );
      })}
      {lastElement}
    </div>
  );
}