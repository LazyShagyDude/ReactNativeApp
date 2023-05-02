import { View,Text,Image, StyleSheet } from 'react-native';

export const Header = () =>{
    return(
    <View style={styles.header}>
      <Text style={styles.textheader}>Заявки</Text>
      <Image 
      source={require('../icon/Line1.png')}/>
      </View>);
} 

const styles = StyleSheet.create({
  header:{
    height: 125,
    //backgroundColor: "green",
    //display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems:'flex-start',
    marginLeft: 15,
  },
  textheader:{
    fontSize: 32,
    fontStyle: 'normal',
    lineHeight: 38,
    marginEnd:10,
    //backgroundColor: "green"
  }
})