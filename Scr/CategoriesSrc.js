// for selection diff cats
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'



import { CATEGORIES } from '../data/data'
import CustomHeaderButton from '../Compos/HeaderButton'
let TouchableCmp = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
}


function CategoriesSrc(props) {

    const renderGridItem = (itemdata) => {
        return <View style={styles.gridItem} >
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemdata.item.id
                        }
                    })
                }} >
                <View style={[{ backgroundColor: itemdata.item.color }, styles.container]} >
                    <Text>
                        {itemdata.item.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    }


    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id.toString()}
            numColumns={2}


        />
    )
}

CategoriesSrc.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Category',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="Menu"
                    iconName="menu"
                    onPress={() => {
                        navData.navigation.toggle
                    }}
                />
            </HeaderButtons>
        )
    }

};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        height: 150,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})


export default CategoriesSrc
