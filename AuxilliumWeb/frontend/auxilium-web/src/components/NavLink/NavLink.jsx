// import Link component of React Router
import { Link } from 'react-router';

/**
 * NavLink
 *
 * Small wrapper around a router `Link` that renders a navigation list item.
 * This component places a list item (`<li>`) inside the `Link` so it can be
 * used inside nav lists. Consumers should ensure the component is used inside
 * a `<ul>` or `<nav>` for valid semantics.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children Link label (text or nodes).
 * @param {string} props.href Destination URL for the link (passed to `to`).
 * @returns {JSX.Element} A router `Link` containing an `<li>` navigation item.
 *
 * Example:
 * <ul>
 *   <NavLink href="/about-us">About Us</NavLink>
 * </ul>
 */
export function NavLink({ children, href }) {
  return (
    <Link className="nav-link" to={href}>
      <li className="nav-element">{children}</li>
    </Link>
  );
}
