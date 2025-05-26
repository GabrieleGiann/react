
import { useState } from 'react'
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    onLogin(formData);
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      remember: false,
    });
  };

  const isLoginDisabled = !formData.username || !formData.password;

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              name="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleChange}
            />
            Remember me
          </label>
        </div>
        <button type="submit" disabled={isLoginDisabled}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}


export default Login