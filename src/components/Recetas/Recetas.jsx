import React from 'react';
// import { Card } from 'react-bootstrap';
import stylesRecetas from './Recetas.module.css';
import recipes from '../../data/recetasRecipe.jsx';
import Card from '../Cards/Cards.jsx'

const Recetas = () => {
  return (
    <div className="container mt-5">
      <h2 className={stylesRecetas.title}>Recetas</h2>
      <div className={stylesRecetas.cards_container}>
        {recipes.map((cardData, index) => (            
          <Card key={index} card={cardData} />
        ))}
      </div>
    </div>
  );
}

export default Recetas;
