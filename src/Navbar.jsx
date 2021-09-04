import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            TodoApp
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:80,
        paddingTop:20,
        backgroundColor:"blue"
    },
    text:{
        fontSize:20,
        color:'#fff'
    }
})