import React from 'react'
import { DailyRecipe } from '../components/DailyRecipe/DailyRecipe.jsx'
import data from '../data/dailyRecipes.jsx'
import RecentRecipees from '../components/RecentRecipees/RecentRecipees.jsx'
import styles from './home.module.css';

export const Home = () => {
    return (
        <div className={styles.paddingTop_custom}>
            <DailyRecipe recipes={data} />
            <RecentRecipees />
        </div>
    );
}