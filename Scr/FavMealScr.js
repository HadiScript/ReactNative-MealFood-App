import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../Compos/HeaderButton'
import MealList from '../Compos/MealList'


function FavMeals(props) {

    const meals = useSelector(state => state.meals.favoriteMeals);

    if (meals.length === 0 || !meals) {
        return <View style={styles.notFound} >
            <Text> No favorite meals is found, Start adding some </Text>
        </View>
    }

    return (
        <MealList
            listData={meals}
            navigation={props.navigation}
        />
    )
}



FavMeals.navigationOptions = navData => {
    return {

        headerTitle: "Yours Favs",
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item
                title="Menu"
                iconName="menu"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    notFound: {
        marginVertical: 10,
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    }
})


export default FavMeals