import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState()
    
    const addTodos=()=>{
        if (value !=='') {
            onSubmit(value)
            setValue('')
        }
        else{
            alert("text yozilmadi!!")
        }
    }
    
    return (
        <View style={styles.addBlock}>
            <TextInput style={styles.textInput} value={value} onChangeText={setValue}/>
            <Button style={styles.button} title="Add Todo" onPress={addTodos}/>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    addBlock:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        
    },
    textInput:{
        fontSize:18,
        width:"70%",
        borderBottomWidth:1,
    },

})

