import React from 'react';
import { Card } from 'react-bootstrap';
import stylesRecetas from './Recetas.module.css';
import star from '../../assets/images/RecentRecipees/star.png';
import recipes from '../../data/recetasRecipe.jsx';

const Recetas = () => {
  return (
    <div className="container mt-5">
      <h2 className={stylesRecetas.title}>Recetas</h2>
      <div className={stylesRecetas.cards_container}>
        {recipes.map((cardData, index) => (
            <Card className={stylesRecetas.customCard} key={index}>
              <Card.Title className={stylesRecetas.customTitle}>
                {cardData.title}
              </Card.Title>
              <div className={stylesRecetas.imgContainer}>
                <Card.Img
                  variant="top"
                  src={cardData.image}
                  className={stylesRecetas.customCard_img}
                />
              </div>
              <Card.Body className={stylesRecetas.customBody}>
                <div className={stylesRecetas.starContainer}>
                  <img src={star} alt="rating star" className={stylesRecetas.star} />
                  {cardData.rating}
                </div>
                <Card.Text className={stylesRecetas.customCardText}>
                  {cardData.description}
                </Card.Text>
              </Card.Body>
            </Card>
        ))}
      </div>
    </div>
  );
}

export default Recetas;
