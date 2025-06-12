import { useMemo } from "react";

function FilteredList({ list }) {
  const filtered = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>
          {item.name} - {item.age} anni
        </li>
      ))}
    </ul>
  );
}

export default FilteredList;
