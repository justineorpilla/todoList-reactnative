import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Task = () => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemLeft}>
                <View style={styles.circleBullet}></View>
                <Text>This is my task</Text>
            </View>
            <View style={styles.circleButton}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15, //10
        borderRadius: 10, //5
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    circleBullet: {
        width: 14,
        height: 14,
        backgroundColor: 'orange',
        opacity: 0.7,
        borderRadius: 100,
        marginRight: 10
    },
    itemText: {
        maxWidth: '80%'
    },
    circleButton: {
        width: 20,
        height: 20,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
    }
});

export default Task