import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todos = ({todos}) => {
    return (
        <View style={styles.todos}>
            {todos.map(todo=>{
                return <Text style={styles.todo} key={todo.id}> {todo.title}</Text>
            })}
        </View>
    )
}

export default Todos

const styles = StyleSheet.create({
    todos:{
        marginTop:15
    },
    todo:{
        flexDirection:"row",
        alignItems:"center",
        padding:15,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:5,
        marginTop:5
    },
    
})
