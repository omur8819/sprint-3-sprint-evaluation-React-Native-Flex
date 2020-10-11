import React from 'react';
import {SafeAreaView,View, Text,  StyleSheet} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red'
  },

  upper: {
    flex:3
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
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  orangeText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  yellow: {
    width: 120,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'  
  },

  yellowText: {
    fontSize: 16,
    color: 'black'
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
    width: '55%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  blackText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  brown: {
    backgroundColor: 'brown',
    width: '20%',
    height: '90%',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },

  brownText: {
    color: 'white',
    fontSize: 20,
    transform: [{ rotate: '270deg' }],
    fontWeight: 'bold'
  }

})


export default App;