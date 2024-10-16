import Cards from "../Cards/Cards";
import stylesRecentRecipees from './RecentRecipees.module.css';
import data from "../../data/recentRecipes"; 

export default function RecentRecipees() {
    if (!data || data.length === 0) {
        return <p>No hay recetas recientes disponibles.</p>; // Manejo de un caso sin datos
    }

    const cards = data.map(card => (
        <Cards key={card.id} card={card} />
    ));

    return (
        <div>
            <h2 className={stylesRecentRecipees.title} id="Title">Recetas Recientes</h2>
            <section className={stylesRecentRecipees.cardsList}>
                {cards}
            </section>
        </div>
    );
}