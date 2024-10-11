import React from 'react'
import { DailyRecipe } from '../components/DailyRecipe/DailyRecipe'
import data from '../../dailyRecipes.json'
import RecentRecipees from '../components/RecentRecipees/RecentRecipees'

export const Main = () => {

    return (
        <>
            <DailyRecipe recipes={data.recipes} />
            <RecentRecipees />           
        </>
    )
}
