import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';

const AlbumCard = (props) => {
  const [rating, setRating] = useState('');

  const fetchRating = async () => {
    const res = await fetch(
      `http://localhost:5000/api/ratings/${props.idUser}/${props.idAlbum}`
    );
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    const getRating = async () => {
      const ratingFromServer = await fetchRating();
      setRating(Number(ratingFromServer));
    };
    getRating();
  }, []);

  const postRating = async (ratingValue) => {
    fetch(
      `http://localhost:5000/api/ratings/${props.idUser}/${props.idAlbum}/${ratingValue}`,
      {
        method: 'POST',
      }
    ).catch((error) => {
      console.error('Error:', error);
    });
  };

  const ratingChanged = (newRating) => {
    postRating(newRating);
    setRating(newRating);
  };

  if (rating == '') {
    return (
      <div className="albumCard">
        {props.title} - {props.band}
        <ReactStars count={5} size={36} value={0} onChange={ratingChanged} />
      </div>
    );
  } else {
    return (
      <div className="albumCard">
        <div className="albumTitle">{props.title} </div>
        <div className="bandName">{props.band} </div>
        <ReactStars
          className="stars"
          count={5}
          size={64}
          value={rating}
          onStarClick={ratingChanged}
        />
        <div className="rating">{rating} </div>
      </div>
    );
  }
};

export default AlbumCard;
