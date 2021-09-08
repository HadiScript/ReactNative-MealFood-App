import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function MealItem(props) {

    


    return (
        <View style={styles.mealItem} >
            <TouchableOpacity onPress={props.onSelect} >

                <View>

                    <View style={[styles.mealRow, styles.mealHeader]}>
                        <ImageBackground style={styles.bgImg} source={{ uri: props.image }} >
                            <Text numberOfLines={1} style={styles.text}> {props.title} </Text>
                        </ImageBackground>
                    </View>

                    <View style={[styles.mealRow, styles.mealDetail]}>
                        <Text>{props.duration}m</Text>
                        <Text> {props.complexity} </Text>
                        <Text> {props.affordability} </Text>
                    </View>

                </View>

            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        marginVertical: 10,
        // borderRadius: 10,
        borderBottomColor: '#ccc',
        elevation: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',


    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%'

    },
    bgImg: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        width: '100%',
    },


})

export default MealItem
