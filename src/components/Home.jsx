import { ScrollView} from 'react-native';
import { Header } from '../components/Header';
import { Task } from '../components/Task';
import { View, StatusBar,StyleSheet } from 'react-native';

export const Home = () =>{
    return(
      <View style={styles.HomeView}>
        <Header />
        <ScrollView>
        <Task/>
        </ScrollView>
      <StatusBar theme="auto" />
      </View>
      );
} 

const styles = StyleSheet.create({
  HomeView:{
     flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems:'center',
  },

})