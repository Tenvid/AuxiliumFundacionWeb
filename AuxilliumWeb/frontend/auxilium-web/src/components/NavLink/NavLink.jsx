import { Link } from 'react-router';
export function NavLink({ children, href }) {
  return (
    <Link className="nav-link" to={href}>
      <li className="nav-element">{children}</li>
    </Link>
  );
}
