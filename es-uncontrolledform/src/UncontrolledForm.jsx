import { useState } from 'react';

export default function UncontrolledLogin() {
  const [output, setOutput] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    setOutput(
      `Login via DOM API:
       Username: ${username}
      Password: ${password}  
      Remember Me: ${remember}`
    );
  };

  const loginWithFormData = (event) => {
    event.preventDefault();
    const form = event.target.form;

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    const remember = formData.get('remember') === 'on';

    setOutput(
      `Login via FormData:  
      Username: ${username}
      Password: ${password}  
      Remember Me: ${remember}`
    );
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label>
            Remember me:
            <input type="checkbox" name="remember" />
          </label>
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={loginWithFormData}>
          Login with FormData
        </button>
      </form>

       <p>{output}</p> 
    </>
  );
}