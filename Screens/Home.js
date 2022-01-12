import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default class HomeScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
      <Text>home screen</Text>      
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:'white',
    },
  });