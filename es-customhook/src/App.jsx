import React from "react";
import useCounter from "./hooks/useCounter";
import useForm from "./hooks/useForm";
import useGithubUser from "./hooks/useGithubUser";
import useCurrentLocation from "./hooks/useCurrentLocation";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const { values, handleChange } = useForm();
  const {
    user,
    error: githubError,
    loading: githubLoading,
    fetchUser,
  } = useGithubUser();
  const {
    location,
    error: locationError,
    loading: locationLoading,
    getLocation,
  } = useCurrentLocation();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <h2>Login Form</h2>
      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />

      <h2>GitHub User</h2>
      <input
        onChange={(e) => fetchUser(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {githubLoading && <p>Loading...</p>}
      {githubError && <p>Error: {githubError}</p>}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <h2>Geolocation</h2>
      <button onClick={getLocation}>Get Location</button>
      {locationLoading && <p>Loading...</p>}
      {locationError && <p>Error: {locationError}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}

export default App;
