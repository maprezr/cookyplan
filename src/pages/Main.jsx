import React from 'react'
import { DailyRecipe } from '../components/DailyRecipe/DailyRecipe'
import data from '../../dailyRecipes.json'

export const Main = () => {
    
    return (
        <DailyRecipe recipes={data.recipes} />
    )
}
