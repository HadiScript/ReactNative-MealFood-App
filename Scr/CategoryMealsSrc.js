import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../Compos/MealList';

import { CATEGORIES } from '../data/data';


function CategoryMeals(props) {


    const catId = props.navigation.getParam('categoryId');
    const avalibleMleas = useSelector(state => state.meals.filteredMeals)


    const displayedMeals = avalibleMleas.filter(meal => meal.categoriesIds.indexOf(catId) >= 0);

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}


// how to write the dynamically header from incomming data
CategoryMeals.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCats = CATEGORIES.find(c => c.id === catId);

    return {
        headerTitle: selectedCats.title,

    }
};


export default CategoryMeals