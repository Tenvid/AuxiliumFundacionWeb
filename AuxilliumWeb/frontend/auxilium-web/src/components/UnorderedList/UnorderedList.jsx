/**
 * UnorderedList
 *
 * Renders a nested unordered list. `elementList` may contain either:
 * - strings (leaf list items), or
 * - two-item arrays/tuples [label, children], where `children` is an array
 *   following the same structure (allowing recursive nesting).
 *
 * Example:
 * const items = [
 *   'Item 1',
 *   ['Parent', ['Child 1', 'Child 2', ['Grandparent', ['Grandchild']]]]
 * ];
 *
 * Notes:
 * - Keys: this implementation uses the array index as key for simplicity;
 *   for stable lists prefer objects with unique ids and use that id as key.
 * - Accessibility: consider wrapping labels in <button> or <a> when they
 *   control expand/collapse behaviour; this helper is purely presentational.
 *
 * @param {Object} props
 * @param {Array.<string|Array>} props.elementList
 * @param {string} [props.listClassName]
 * @param {string} [props.elementClassName]
 * @returns {JSX.Element}
 */
export default function UnorderedList({
  elementList = [],
  listClassName,
  elementClassName,
}) {
  return (
    <ul className={listClassName}>
      {elementList.map((element, idx) => {
        if (Array.isArray(element)) {
          const [label, children] = element;
          return (
            <li key={idx} className={elementClassName}>
              {label}
              {children && children.length > 0 && (
                <UnorderedList
                  elementList={children}
                  listClassName={listClassName}
                  elementClassName={elementClassName}
                />
              )}
            </li>
          );
        } else {
          return (
            <li key={idx} className={elementClassName}>
              {element}
            </li>
          );
        }
      })}
    </ul>
  );
}
