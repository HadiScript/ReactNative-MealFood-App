import React, { useState, useCallback } from 'react'
import { useEffect } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux';


const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer} >
            <Text> {props.label} </Text>
            <Switch
                value={props.isGlutenFree}
                onValueChange={props.onChange}
                trackColor={{ true: 'orange' }}
                thumbColor={Platform.OS === 'android' ? 'orange' : ''}
            />
        </View>
    )
}




function FitlerSrc(props) {

    const dispatch = useDispatch();

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [IslactoseFree, setIsLactoseFree] = useState(false);
    const [IsVegan, setIsVegan] = useState(false);
    const [IsVegeterian, setIsVegeterian] = useState(false);


    const savedFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: IslactoseFree,
            vegan: IsVegan,
            IsVegeterian: IsVegeterian
        }

        dispatch({
            type: 'HANDLE_CASE_FILTER',
            appliedFilters: appliedFilters
        })

    }, [isGlutenFree, IslactoseFree, IsVegan, IsVegeterian]);
    // here im using the useCallback, thats mean that if anyone form these fourse will change then
    // saved filter function will again create


    useEffect(() => {
        props.navigation.setParams({ save: savedFilters });
        // this is the for the set params of currently params
        // the data (in params which coming form the Parent scr), we can change that data by
        // using the set params

    }, [savedFilters])



    return (
        <View style={styles.scr}>

            <Text style={styles.title} > Availible filters / Restrictions </Text>
            {<FilterSwitch state={isGlutenFree} label="Gluten-free" onChange={() => setIsGlutenFree(!isGlutenFree)} />}
            {<FilterSwitch state={IslactoseFree} label="lactose-free" onChange={() => setIsLactoseFree(!isGlutenFree)} />}
            {<FilterSwitch state={IsVegan} label="Vegan" onChange={() => setIsVegan(!isGlutenFree)} />}
            {<FilterSwitch state={IsVegeterian} label="Vagetarian" onChange={() => setIsVegeterian(!isGlutenFree)} />}

        </View>
    )
}

FitlerSrc.navigationOptions = navData => {
    return {

        headerTitle: "filter",
        headerLeft: (
            <HeaderButtons>
                <Item
                    title="Menu"
                    iconName="menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}

                />
            </HeaderButtons>
        ),
        headerRight: <HeaderButtons>
            <Item
                title="save"
                iconName="save"
                onPress={navData.navigation.getParam('save')}
            >  </Item>
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({
    scr: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10

    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})


export default FitlerSrc