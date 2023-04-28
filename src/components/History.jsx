
import { ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Compl } from '../components/Compl';
import { View, StatusBar,StyleSheet } from 'react-native';

export const History = () =>{
    return(
      <View style={styles.HomeView}>
        <Header />
        <ScrollView>
        <Compl/>
        </ScrollView>
      <StatusBar theme="auto" />
      </View>
      );
} 

const styles = StyleSheet.create({
  HomeView:{
     // backgroundColor: '#656565',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems:'center',
  },

})