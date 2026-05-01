import { Link } from 'react-router-dom';

export default function UnorderedLinkList({
  elementList,
  listClassName,
  elementClassName,
}) {
  return (
    <ul className={listClassName}>
      {elementList.map((element) => {
        return (
          <li key={element} className={elementClassName}>
            <Link to={element[1]}>{element[0]}</Link>
          </li>
        );
      })}
    </ul>
  );
}
