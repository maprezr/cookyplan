import Carousel from 'react-bootstrap/Carousel';
import style from '../DailyRecipe/dailyRecipe.module.css';

export const DailyRecipe = () => {
    return (
        
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img 
                        className= {`d-block w-100 ${style.img}`}
                        src="src\assets\images\bandeja paisa.jfif"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-white bg-light'>
                        <h5>Bandeja paisa</h5>
                        <p>La bandeja paisa es un plato típico de la región antioqueña en Colombia
                            que combina una variedad de ingredientes en una sola presentación. Se
                            sirve con arroz blanco y frijoles rojos, acompañados de carne molida o
                            desmenuzada, chicharrón crocante, un huevo frito, y plátano maduro frito
                            que aporta un toque dulce. Además, incluye un chorizo antioqueño,
                            una pequeña arepa de maíz y rodajas de aguacate. Para darle más sabor,
                            se añade hogao, una salsa hecha de tomate y cebolla. Es un plato conocido
                            por su generosidad y diversidad de sabores.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src\assets\images\bandeja paisa.jfif"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Bandeja paisa</h5>
                        <p>La bandeja paisa es un plato típico de la región antioqueña en Colombia
                            que combina una variedad de ingredientes en una sola presentación. Se
                            sirve con arroz blanco y frijoles rojos, acompañados de carne molida o
                            desmenuzada, chicharrón crocante, un huevo frito, y plátano maduro frito
                            que aporta un toque dulce. Además, incluye un chorizo antioqueño,
                            una pequeña arepa de maíz y rodajas de aguacate. Para darle más sabor,
                            se añade hogao, una salsa hecha de tomate y cebolla. Es un plato conocido
                            por su generosidad y diversidad de sabores.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="src\assets\images\bandeja paisa.jfif"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Bandeja paisa</h5>
                        <p>La bandeja paisa es un plato típico de la región antioqueña en Colombia
                            que combina una variedad de ingredientes en una sola presentación. Se
                            sirve con arroz blanco y frijoles rojos, acompañados de carne molida o
                            desmenuzada, chicharrón crocante, un huevo frito, y plátano maduro frito
                            que aporta un toque dulce. Además, incluye un chorizo antioqueño,
                            una pequeña arepa de maíz y rodajas de aguacate. Para darle más sabor,
                            se añade hogao, una salsa hecha de tomate y cebolla. Es un plato conocido
                            por su generosidad y diversidad de sabores.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}