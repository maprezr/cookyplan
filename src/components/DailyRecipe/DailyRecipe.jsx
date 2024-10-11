import Carousel from 'react-bootstrap/Carousel';
import style from '../DailyRecipe/dailyRecipe.module.css';
import { Card, Col, Row } from 'react-bootstrap';


export const DailyRecipe = (recipes) => {
    console.log(recipes)
    return (
        <div className="container d-flex justify-content-center p-5 ">
            <Carousel data-bs-theme="dark" className={style.carousel_custom}>
                {recipes.recipes.map((recipe, index) => (
                    <Carousel.Item key={index}>
                        {/* <Card>
                            <Row>
                                <Col xs={6}>
                                    <img
                                        className={`d-block w-100 ${style.img}`}
                                        src={recipe.image}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col xs={6} className={`${style.caption}`}>
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.description}</p>
                                </Col>
                            </Row>
                        </Card> */}
                        <Card className={`pb-5 ${style.custom_card}`}>
                            <Card.Img variant="top" src={recipe.image} className= {style.img}/>
                            <Card.Body>
                                <Card.Text className={style.description}>
                                    <h3>{recipe.title}</h3>
                                    {recipe.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}


