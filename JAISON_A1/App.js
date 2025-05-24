import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import PlayList from './PlayList';
import Recents from './Recent';
import AudioBook from './AudioBook';

export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
      <StatusBar style="auto" />
      <PlayList />
      <Text style = {{color:"white" , fontSize:30, fontWeight:"bold"}}>Recents</Text>
      <Recents/>
       <Text style = {{color:"white" , fontSize:30 , fontWeight:"bold"}}>AudioBooks for you</Text>
     <AudioBook/>
      </ScrollView>
    </SafeAreaView>
   

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
  },

});

