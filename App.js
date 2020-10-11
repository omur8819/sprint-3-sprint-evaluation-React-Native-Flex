import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.gray}>
          <View style={styles.orange}>
            <Text style={styles.orangeText}>Orange Circle</Text>
          </View>
          <View style={styles.yellow}>
            <Text style={styles.yellowText}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.below}>
        <View style={styles.black}>
          <Text style={styles.blackText}>Black Box</Text>
        </View>
        <View style={styles.brown}>
  <Text style={styles.brownText}>Brown{'\n'}Box</Text>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red'
  },

  upper: {
    flex:4
  },

  gray: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  orange: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  orangeText: {
    fontWeight: "bold"
  },

  yellow: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'  
  },

  yellowText: {
    color: '#212121'
  },

  below: {
    flex: 6,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  black: {
    backgroundColor: 'black',
    height: '85%',
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  blackText: {
    color: 'white',
    fontWeight: 'bold'
  },

  brown: {
    backgroundColor: 'brown',
    width: '20%',
    height: '90%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },

  brownText: {
    color: 'white',
    transform: [{ rotate: '270deg' }],
    fontWeight: 'bold'
  }

})


export default App;