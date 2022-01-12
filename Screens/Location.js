import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default class LocationScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
      <Text>location</Text>      
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:'grey',
    },
  });