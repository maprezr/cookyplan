import Cards from "../Cards/Cards"
import stylesRecentRecipees from './RecentRecipees.module.css';
import data from "../../data/recentRecipes"

export default function RecentRecipees() {

    const cards = data.map(card => {           
        return <Cards
          key={card.id}
          card={card}>      
        </Cards>
      })

    return (
        <div>
            <h2 className={stylesRecentRecipees.title} id="Title">Recetas Recientes</h2>
            <section className={stylesRecentRecipees.cardsList}>
                {cards}
            </section>               
        </div>
    )

}