import React from 'react';
import {
  View,
  StyleSheet,TextInput,Text
} from 'react-native';


export const InputText = ({value, changeValue, label})=>{
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={changeValue}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1, height:40,marginVertical:8,},
  textInput:{
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    height:34,
    marginTop:10,
    fontSize:21,
    paddingHorizontal:10
  },
});
