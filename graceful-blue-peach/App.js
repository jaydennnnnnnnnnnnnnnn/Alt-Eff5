import {Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
  <View style={styles.header}>
     <View style={styles.inputField}> 
     
       <Text>Search</Text>
     </View>
  
  </View>

  <View style={styles.body}>
  
  </View>

  </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'left',
  },

  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
  },

  body: {
    flex: 1,
    flexWrap: 'wrap',

  },
  
  inputField: {
   backgroundColor: '#d3d3d3',
   height: '10%',
   width: '87%',
   justifyContent: 'center',
   alignItems: 'left',
   paddingHorizontal: 10,
   borderRadius: 10,
 },
});
