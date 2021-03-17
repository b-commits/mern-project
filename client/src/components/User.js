import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';

function User(props) {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const fetchAlbums = async () => {
    const res = await fetch('http://localhost:5000/api/albums');
    const json = await res.json();
    return json;
  };

  const handlePasswordChange = async () => {
    console.log('Changing password for: ' + props.location.state.user);

    fetch(
      `http://localhost:5000/api/users/${props.location.state.user}/${newPassword}`,
      {
        method: 'PUT',
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    alert('Password has been updated.');
  };

  useEffect(() => {
    const getAlbums = async () => {
      const albumsFromServer = await fetchAlbums();
      setAlbums(albumsFromServer);
    };
    getAlbums();
  }, []);

  if (!albums.length) {
    return null;
  }

  return (
    <div>
      <h1 className="welcomeUser">Hi, {props.location.state.user}!</h1>
      <h1 className="welcomeUser">Find your favourite albums...</h1>
      <h2 className="welcomeUser">Change your password...</h2>
      <input
        className="searcher"
        type="text"
        value={newPassword}
        placeholder="Enter your new password..."
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>
      <button
        className="btn btn-primary"
        onClick={() => handlePasswordChange(props.location.state.user)}
      >
        Change password
      </button>
      <h2 className="welcomeUser">Find your favourites...</h2>
      <input
        className="searcher"
        type="text"
        placeholder="Search for your favourite albums..."
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {albums
        .filter((val) => {
          if (searchTerm == '') {
            return val;
          } else if (
            val.band.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => (
          <AlbumCard
            key={item._id}
            title={item.title}
            band={item.band}
            idAlbum={item._id}
            idUser={props.location.state.user}
          ></AlbumCard>
        ))}
      <br />
    </div>
  );
}

export default User;
