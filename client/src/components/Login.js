import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
  let history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div id="wrapper">
        <svg
          id="r2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 16 64 64"
          width="500px"
          height="800px"
        >
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9uma"
            x1="32"
            x2="32"
            y1="14.813"
            y2="19.188"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#iVw3VROIDY~pQRnQUW9uma)"
            d="M34,17c0,1.105-0.895,2-2,2h0c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h0 C33.105,15,34,15.895,34,17L34,17z"
          />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umb"
            x1="32"
            x2="32"
            y1="27.813"
            y2="30.25"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path fill="url(#iVw3VROIDY~pQRnQUW9umb)" d="M27 28H37V30H27z" />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umc"
            x1="32"
            x2="32"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#iVw3VROIDY~pQRnQUW9umc)"
            d="M37,26H27c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-2 C39,26.897,38.103,26,37,26z M37,30H27v-2h10V30z"
          />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umd"
            x1="32"
            x2="32"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path fill="url(#iVw3VROIDY~pQRnQUW9umd)" d="M27 34H37V36H27z" />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9ume"
            x1="32"
            x2="32"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path fill="url(#iVw3VROIDY~pQRnQUW9ume)" d="M27 38H37V40H27z" />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umf"
            x1="32"
            x2="32"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#iVw3VROIDY~pQRnQUW9umf)"
            d="M57.555,53.168c-1.511-1.007-2.663-1.767-3.555-2.346V29v-1v-3c0-1.654-1.346-3-3-3h-3 c0-8.822-7.178-16-16-16s-16,7.178-16,16h-3c-1.654,0-3,1.346-3,3v3v1v21.798l-4,2.667V58h12v-8v-1v-3h2.22l0.431,1.725 C20.985,49.064,22.185,50,23.565,50H29v2h-4.281l0.933,3.729C25.985,57.066,27.181,58,28.559,58h6.883 c1.378,0,2.573-0.934,2.906-2.271L39.281,52H35v-2h5.435c1.381,0,2.58-0.936,2.915-2.276L43.78,46H46v3v1v8h12v-4.535L57.555,53.168 z M51,24c0.552,0,1,0.448,1,1v3v1c0,0.552-0.448,1-1,1h-3v-6H51z M46,44H18v-2V24h28v19V44z M39.174,10H24.826 c2.101-1.261,4.55-2,7.174-2S37.073,8.739,39.174,10z M22.221,12h19.559C44.379,14.543,46,18.084,46,22H18 C18,18.084,19.621,14.543,22.221,12z M12,25c0-0.552,0.448-1,1-1h3v6h-3c-0.552,0-1-0.448-1-1v-1V25z M16,56H8v-1.465L13.303,51H16 V56z M12.697,49L12,49.465V31.815C12.314,31.928,12.647,32,13,32h3v10v3v4H12.697z M36.719,54l-0.312,1.245 C36.297,55.689,35.899,56,35.441,56h-6.883c-0.458,0-0.855-0.311-0.967-0.755L27.281,54H36.719z M33,52h-2v-2h2V52z M41.41,47.238 C41.298,47.687,40.896,48,40.435,48H35h-6h-5.435c-0.462,0-0.863-0.313-0.976-0.761L22.28,46H41.72L41.41,47.238z M48,45v-2V32h3 c0.353,0,0.686-0.072,1-0.184v17.743C51.071,49.003,50.921,49,50.734,49H48V45z M56,56h-8v-5h2.516 c0.671,0.376,3.147,1.982,5.484,3.536V56z"
          />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umg"
            x1="39"
            x2="39"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#iVw3VROIDY~pQRnQUW9umg)"
            d="M39 15A2 2 0 1 0 39 19A2 2 0 1 0 39 15Z"
          />
          <linearGradient
            id="iVw3VROIDY~pQRnQUW9umh"
            x1="25"
            x2="25"
            y1="5.25"
            y2="58.995"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#iVw3VROIDY~pQRnQUW9umh)"
            d="M25 15A2 2 0 1 0 25 19A2 2 0 1 0 25 15Z"
          />
        </svg>
      </div>
      <div className="login-form">
        Login:
        <br />
        <input
          className="login-input"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <br />
        Password:
        <br />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button className="btn btn-primary" type="submit" onClick={handleLogin}>
          Login
        </button>
        <br></br>
      </div>
      <div id="callToAction">
        Don't have an account, yet? <Link to="/home">Sign up!</Link>
      </div>
    </div>
  );

  function handleLogin() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      password: password,
      login: login,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch('http://localhost:5000/api/users/login', requestOptions)
      .then((response) => response.text())
      .then((result) => verify(result))
      .catch((error) => console.log('error', error));
  }

  function verify(result) {
    if (result === 'Logged in' && login === 'admin') {
      history.push({
        pathname: '/admin',
      });
    } else if (result === 'Logged in') {
      history.push({
        pathname: '/user',
        state: { user: login },
      });
    }
  }
}

export default Login;
