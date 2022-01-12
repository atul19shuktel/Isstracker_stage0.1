import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default class MeteorScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
      <Text>do you know the difference betwween meteor and the other two?</Text>      
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:'red',
    },
  });