import React from 'react'
import { DailyRecipe } from '../components/DailyRecipe/DailyRecipe'
import data from '../../dailyRecipes.json'
import Cards from '../components/Cards/Cards'

export const Main = () => {

    return (
        <>
            <DailyRecipe recipes={data.recipes} />
            <Cards />
        </>
    )
}
