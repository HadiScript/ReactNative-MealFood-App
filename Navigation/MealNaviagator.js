import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// this is just for the andriods becouse in the andriod tab look bit diff from the ios 
// we can also use the simple tabs for andiod
import { createDrawerNavigator } from 'react-navigation-drawer';



import CategoriesSrc from '../Scr/CategoriesSrc';
import CategoryMeals from '../Scr/CategoryMealsSrc';
import MealDetail from '../Scr/MealDetail'
import Colors from '../Config/Colors';
import FavMealScr from '../Scr/FavMealScr';
import FitlerSrc from '../Scr/FilterSrc';



const defaultStackNavOptios = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.accent : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accent,
        headerTitle: 'screen'
    }
}


const MealNaviagator = createStackNavigator({
    Categories: CategoriesSrc,
    CategoryMeals: CategoryMeals,
    MealDetail: MealDetail
},
    {
        defaultNavigationOptions: defaultStackNavOptios
    })

const favNavigation = createStackNavigator({
    Favourites: FavMealScr,
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: defaultStackNavOptios
})



const tabsScreenConfig = {
    Meals: {
        screen: MealNaviagator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons
                    name="ios-restuarant"
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: 'rgba(0,0,0,0.3)',

        }
    },
    Favourites: {
        screen: favNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons
                    name="star"
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: 'rgba(0,0,0,0.3)'
        },

    }
}


const MealFavTabsNavigator = createBottomTabNavigator(
    tabsScreenConfig,
    {
        tabBarOptions: {
            activeTintColor: 'orange'

        }
    }
)

const FilterVanigator = createStackNavigator({
    Filter: FitlerSrc
})

const MainNavigator = createDrawerNavigator({
    MealsFav: { screen: MealFavTabsNavigator, navigationOptions : {drawerLabel : 'Meals'} },
    Filter: FilterVanigator
}, {
    contentOptions : {
        activeTintColor : 'orange',
        
    }
})


export default createAppContainer(MainNavigator)








/*
PUSH
 onPress={() => {
                         props.navigation.navigate({
                        routeName: 'CategoryMeals'
                    })
                }}

BACK
<Button title="go back" onPress={() => {
    props.navigation.goBack() // .pop() same work
}} />

jump
onPress={()=>{
    props.navigaiton.replace('categoies')
}}

by replace its jump to the that page and stack is empty thats why it not show any back button to go back
this us full for the login etc pages
by using this we never go the back at all becouse stack is empty


// how to write the DYNAMICALLY header from incomming data
CategoryMeals.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCats = CATEGORIES.find(c => c.id === catId);

    return {
        headerTitle: selectedCats.title
    }
};


//  how to pass the data from next page
navigate({routeName : "categoryMeal", params : { categoryId : itemdata.item.id}})


// how to get pick data form previouse page
  const catId = props.navigation.getParam('categoryId');

HEADER STYLES
we also styles our header after react function component
we can also style our header in this page

STYLE IN THIS PAGE
 Categories: {
        screen: CategoriesSrc, navigationOptions: {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.accent : 'white'
                },
                headerTintColor: Platform.OS === 'android' ? 'White' : Colors.accent
            }
        }
    },

    like this above,

    but we can also write as second arguments for the style  as



    FOR THE ANDRIOD AND IOS for the menu bottons
    const MealFavTabsNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabsScreenConfig, {
        shifting: true,
        backgroundColor: 'white'
    })
    : createBottomTabNavigator(
        tabsScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: 'orange'

            }
        }
    )


*/