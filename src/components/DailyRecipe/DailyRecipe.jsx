import React from 'react'
import '../DailyRecipe/dailyRecipe.css'

export const DailyRecipe = () => {
    return (
        <>
            <div className="container">
                <div className="card mt-5">
                    <div className="row">
                        <div className="col-5 text-center">
                            <h3 >Bandeja Paisa...</h3>
                            <img src="src\assets\images\bandeja paisa.jfif" alt="" />
                        </div>
                        <div className="col-7 px-5">
                            <p>
                                <br />
                                La bandeja paisa es un plato típico de la región antioqueña en Colombia
                                que combina una variedad de ingredientes en una sola presentación. Se
                                sirve con arroz blanco y frijoles rojos, acompañados de carne molida o
                                desmenuzada, chicharrón crocante, un huevo frito, y plátano maduro frito
                                que aporta un toque dulce. Además, incluye un chorizo antioqueño,
                                una pequeña arepa de maíz y rodajas de aguacate. Para darle más sabor,
                                se añade hogao, una salsa hecha de tomate y cebolla. Es un plato conocido
                                por su generosidad y diversidad de sabores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
