import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Получение погоды...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: 'blue',
    },
    text:{
        color: '#ffffff',
        fontSize: 26,
    }
})

