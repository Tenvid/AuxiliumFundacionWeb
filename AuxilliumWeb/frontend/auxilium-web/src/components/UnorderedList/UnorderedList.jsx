export default function UnorderedList({
  elementList,
  listClassName,
  elementClassName,
}) {
  return (
    <ul className={listClassName}>
      {elementList.map((element) => {
        if (typeof element === typeof []) {
          return (
            <li key={element} className={elementClassName}>
              {element[0]}
              <ul key={element} className={listClassName}>
                {UnorderedList({
                  elementList: element[1],
                  listClassName: listClassName,
                  elementClassName: elementClassName,
                })}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={element} className={elementClassName}>
              {element}
            </li>
          );
        }
      })}
    </ul>
  );
}
