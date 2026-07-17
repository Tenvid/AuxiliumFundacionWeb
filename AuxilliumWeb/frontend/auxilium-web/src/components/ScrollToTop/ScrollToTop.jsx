import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 *
 * Utility component that scrolls the window to the top whenever the
 * route (pathname) changes. Intended to be mounted near the app root so all
 * route transitions trigger the scroll behaviour. The component returns
 * `null` because it does not render any visible UI.
 *
 * Usage:
 * Place <ScrollToTop /> inside your Router (e.g. in `App.jsx`) so it runs on
 * every navigation change.
 *
 * @returns {null}
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
