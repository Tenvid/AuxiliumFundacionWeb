// import Link component from react-router
import { Link } from 'react-router-dom';

/**
 * UnorderedLinkList
 *
 * Renders an unordered list (`<ul>`) of links. Each entry in `elementList`
 * is expected to be a two-item array/tuple: `[label, href]`.
 *
 * Props:
 * - `elementList` (required): Array of `[label, href]` entries. Example: [["Home","/"], ["About","/about"]]
 * - `listClassName` (optional): CSS class applied to the `<ul>` element.
 * - `elementClassName` (optional): CSS class applied to each `<li>` element.
 *
 * Returns a JSX element containing the list. Note: the current implementation
 * uses the whole `element` value as React `key`. Ensure items are unique or
 * modify the key to use a stable unique identifier (e.g. an id or href).
 *
 * @param {Object} props
 * @param {Array.<[string,string]>} props.elementList
 * @param {string} [props.listClassName]
 * @param {string} [props.elementClassName]
 * @returns {JSX.Element}
 */
export default function UnorderedLinkList({
  elementList,
  listClassName,
  elementClassName,
}) {
  return (
    <ul className={listClassName}>
      {elementList.map((element) => {
        // element is expected to be [label, href]
        const [label, href] = element;
        return (
          <li key={href || label} className={elementClassName}>
            <Link to={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
