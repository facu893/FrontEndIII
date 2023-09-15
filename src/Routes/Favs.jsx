import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { theme, favs, removeUserFromFavorites } = useContext(ContextGlobal);

  return (
    <div className={`favs ${theme}`}>
      <h1>Favorites⭐</h1>
      <div className="card-grid">
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            dentist={dentist}
            onRemoveFromFavorites={() => removeUserFromFavorites(dentist.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
