import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import style from './dailyRecipe.module.css'; // Cambié el path a uno relativo, verifica si es correcto

export const DailyRecipe = ({ recipes }) => { // Desestructurando recipes directamente
    if (!recipes || recipes.length === 0) {
        return <p>No hay recetas disponibles.</p>; // Manejo de un caso sin recetas
    }

    return (
        <div className="container d-flex justify-content-center p-5">
            <Carousel data-bs-theme="dark" className={style.carousel_custom}>
                {recipes.map((recipe, index) => (
                    <Carousel.Item key={index}>
                        <Card className={`pb-5 ${style.custom_card}`}>
                            <Card.Img variant="top" src={recipe.image} className={style.img} />
                            <Card.Body>
                                <Card.Title className={style.title}>{recipe.title}</Card.Title>
                                <Card.Text className={style.description}>{recipe.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
