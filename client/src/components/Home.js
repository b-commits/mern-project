import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [login, setLogin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div id="register">
        <h1>Register now!</h1>
        Login: <br />
        <input
          className="login-input"
          type="text"
          id="login"
          required
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <br />
        First Name:
        <br />
        <input
          className="login-input"
          required
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <br />
        Last Name:
        <br />
        <input
          className="login-input"
          required
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <br />
        Password:
        <br />
        <input
          className="login-input"
          required
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        Country:
        <br />
        <input
          className="login-input"
          required
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></input>
        <br />
        <button className="btn btn-primary" onClick={handleRegister}>
          Sign up
        </button>
        <br />
        <br />
        <br></br>
        <br></br>
        <br></br>
        <h1 id="alreadyhave">
          Already have an account? <Link to="/">Log in!</Link>
        </h1>
      </div>
    </div>
  );

  function handleRegister() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      country: country,
      password: password,
      login: login,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5000/api/users', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    alert('Sign up sucessful');
  }
}

export default Home;
