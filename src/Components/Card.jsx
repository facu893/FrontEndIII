import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Card = ({ name, username, id, dentist }) => {
  const { theme, addUserToFavorites, removeUserFromFavorites, favs } = useContext(ContextGlobal);

  const isFavorite = favs.some((fav) => fav.id === dentist.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeUserFromFavorites(dentist.id);
    } else {
      addUserToFavorites(dentist);
    }
  };
  return (
    <div style={{ boxShadow: '1px -1px 11px 0px rgba(204,204,204,1)', borderRadius: '10px'}} className={`card ${theme}`}>
      <img src="./images/doctor.jpg" alt="doctor-img" style={{borderRadius: '10px', width:'150px', boxShadow: '1px -1px 11px 0px rgba(204,204,204,1)'}}/>
      <h2 style={{textAlign:'center'}}>{name}</h2>
      <p>Username: {username}</p>
      <Link to={`/dentist/${id}`}>Show details...</Link>
      <button style={{ width: '50px' }} onClick={toggleFavorite} className="favButton">
      {isFavorite ? '❌' : '⭐'}
      </button>
    </div>
  );
};

export default Card;
