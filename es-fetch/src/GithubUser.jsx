import { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    console.log(typeof username);
    fetch("https://api.github.com/users/" + username)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLogin(data.login);
        setAvatar(data.avatar_url);
      });
  }, [username]);

  return (
    <div>
      {login && <h3>{login}</h3>}
      <p>{avatar && <img src={avatar} />}</p>
    </div>
  );
};

export default GithubUser;
