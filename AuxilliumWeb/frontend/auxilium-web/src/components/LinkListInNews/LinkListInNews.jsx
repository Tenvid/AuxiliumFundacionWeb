// import styles
import styles from './LinkListInNews.module.css';

// import Link component from react-router
import { Link } from 'react-router';

/**
 * LinkListInNews
 *
 * Renders a small pagination block for the news listing.
 * It shows a sequence of page links starting at `startPosition`.
 * Optionally renders a "first page" link ("<<") and a "last page" link (">>").
 *
 * @param {Object} props
 * @param {number} [props.numberOfLinks=5] - Number of page links to render (including the start page).
 * @param {number} [props.startPosition=1] - Page number to start the sequence from (1-based).
 * @param {number} [props.totalPages=10] - Total number of available pages.
 * @returns {JSX.Element}
 */
export default function LinkListInNews({ numberOfLinks = 5, startPosition = 1, totalPages = 10 }) {
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
      {/*
        Create a sequence of page links.
        - length: number of links to render after (and including) startPosition.
        - We limit length so we don't generate pages beyond totalPages.
        Each generated item maps to pageNumber = index + startPosition.
        The startPosition is rendered as a non-clickable current page indicator.
      */}
      {Array.from({ length: Math.min(numberOfLinks - 1, totalPages + 1 - startPosition) }, (_, index) => {
        const pageNumber = index + startPosition;
        // Current page: render as plain text with a special style
        return pageNumber === startPosition ? (
          <span key={index} className={styles.CurrentPage}>{pageNumber}</span>
        ) : (
          // Other pages: render as navigable links
          <Link key={index} to={`/news/page/${pageNumber}`} rel="noopener noreferrer">
            {pageNumber}
          </Link>
        );
      })}
      {lastElement}
    </div>
  );
}