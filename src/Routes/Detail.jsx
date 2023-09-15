import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching dentist details:', error));
  }, [id]);

  return (
    <>
      {dentist ? (
        <div style={{textAlign:'center'}} className={`detail ${theme}`}>
          <h1>Detalle del Dentista ID {id}</h1>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </>
  );
}

export default Detail;