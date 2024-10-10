import Carousel from 'react-bootstrap/Carousel';
import style from '../DailyRecipe/dailyRecipe.module.css';


export const DailyRecipe = (recipes) => {
    console.log(recipes)
    return (
        <div className="container d-flex justify-content-center p-5">
            <Carousel data-bs-theme="dark" className={style.carousel_custom}>
                {recipes.recipes.map((recipe, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className={`d-block w-100 ${style.img}`}
                            src={recipe.image}
                            alt="First slide"
                        />
                        <Carousel.Caption className={`${style.caption}`}>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}