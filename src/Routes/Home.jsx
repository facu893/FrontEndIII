import React, { useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { theme, data, addUserToFavorites, loadDataFromAPI } = useContext(ContextGlobal);

  useEffect(() => {
    loadDataFromAPI();
  }, [loadDataFromAPI]);
  
  const handleAddToFavorites = (dentist) => {
    addUserToFavorites(dentist);
  };

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            onAddToFavorites={() => handleAddToFavorites(dentist)}
            dentist={dentist}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;