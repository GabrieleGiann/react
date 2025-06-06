import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

const GithubUsers = () => {
  const [value, setValue] = useState(null);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setValue(form.name.value);
    setList((prev) => [...prev, form.name.value]);
    console.log(list);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Inserisci un Nome utente" />
        <input type="submit" />
      </form>

      {value && <GithubUser username={value} />}
      <h3>Utenti già cercati</h3>
      <ul>
        {list &&
          list.map((user) => (
            <li key={user}>
              <GithubUser username={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
