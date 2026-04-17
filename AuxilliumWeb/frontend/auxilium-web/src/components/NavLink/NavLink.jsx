export function NavLink({ children, href }) {
  return (
    <a className="nav-link" href={href}>
      <li className="nav-element">{children}</li>
    </a>
  );
}
