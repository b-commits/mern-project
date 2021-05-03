import React, { useState, useEffect } from 'react';

function Admin() {
  const [band, setBand] = useState('');
  const [title, setTitle] = useState('');
  const [users, setUsers] = useState([]);
  const [userIdToDelete, setUserIdToDelete] = useState('');

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/users');
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  if (!users.length) {
    return null;
  }

  return (
    <div className="adminPanel">
      <p className="welcomeToThe">Welcome to the admin panel!</p>
      <div className="addAlbum">
        <h1> Add an album!</h1>
        <h2>Title...</h2>
        <input
          className="admin-input"
          placeholder="Enter album title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <h2>Band...</h2>
        <input
          className="admin-input"
          placeholder="Enter band name..."
          value={band}
          onChange={(e) => setBand(e.target.value)}
        ></input>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleAddAlbum}
        >
          Save album
        </button>
      </div>
      <div className="banUser">
        <h2>Ban a user:</h2>
        <div>
          <select
            className="form-control form-control-lg"
            onChange={(e) => display(e)}
          >
            {users.map((user) => (
              <option key={user._id} value={users._id}>
                {user.login}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(userIdToDelete)}
        >
          Ban user
        </button>
      </div>
    </div>
  );

  function display(e) {
    const user = e.target.value;
    const tokens = user.split(' ');
    setUserIdToDelete(tokens[0]);
  }

  function handleDelete(id) {
    console.log('Deleting: ' + id);

    fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    alert('User deleted.');
  }

  function handleAddAlbum() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      band: band,
      title: title,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5000/api/albums', requestOptions)
      .then((response) => response.text())
      .then((result) => alert('Dodano album'))
      .catch((error) => console.log('error', error));
  }
}

export default Admin;
