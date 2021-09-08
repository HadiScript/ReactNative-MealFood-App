import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

import CustomHeaderButton from '../Compos/HeaderButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';




function MealDetail(props) {

    const dispatch = useDispatch();
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const meals = useSelector(state => state.meals.meals)

    const selectedMeals = meals.find(m => m.id === mealId);

    const toggleFavHandler = useCallback(() => {
        dispatch({ type: 'TOGGLE_FAV', mealId: selectedMeals.id })
    }, [dispatch])

    // for passing the dispatch mathod to the header we must use the useEffect hook
    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler })
    }, [toggleFavHandler])

    useEffect(() => {
        props.navigation.setParams({ isfav: currentMealIsFav })
    }, [currentMealIsFav])



    // useEffect(() => {

    //     props.navigation.setParams({ mealTitle: selectedMeals.title })
    //     // here if we not use the useEffect then it will go to infinite loop
    //     // but here we should wwait a while becouse first our funciton is render then it will execute

    // }, [selectedMeals])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeals.imgUrl }} style={styles.img} />

            <View style={styles.details}>
                <Text>{selectedMeals.duration}m</Text>
                <Text> {selectedMeals.complexity} </Text>
                <Text> {selectedMeals.affordability} </Text>
            </View>

            <Text style={styles.title} > Ingredients </Text>
            {selectedMeals.ingredients.map(ing => <Text key={ing} style={styles.listItem} > {ing} </Text>)}

            <Text style={styles.title} > steps </Text>
            {selectedMeals.steps.map(st => <Text key={st} style={styles.listItem}> {st} </Text>)}


        </ScrollView>
    )
}


// we can not use the hooks in the simple function 
//  we can just use the hooks in the functional components


//  so how we can do this ??
// FIRST  we can setParams in the main function 
// props.navgation.setParams({}) 
//  in this way we can marge with the old param not be the overwrite

// SECOND
// we should pass the title also form the parent compos


MealDetail.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFav = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isfav');



    return {
        headerTitle: mealTitle,
        headerRight: (
            <TouchableOpacity onPress={toggleFav} >
                <Text style={{ color: isFav ? 'black' : '#ccc' }} > fav </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 22
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})


export default MealDetail