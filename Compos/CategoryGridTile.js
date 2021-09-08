import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function CategoryGridTile({ onSelect, title, color }) {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={onSelect} >
            <View style={{ backgroundColor: color }} >
                <Text>
                    {title}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        alignItems: 'center',
        margin: 15,
        height: 150,
        borderWidth: 2
    }
})

export default CategoryGridTile
