import { View,Text,StyleSheet, TextInput } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input'
import { ScrollView } from 'react-native-gesture-handler';

export const FullTask = ({title, date, door, floor, name, numberhome, phone, street, time}) =>{

    return(
      <View>
        <ScrollView>
        <View>
        <Text style={styles.texthead}>Заявка</Text>
        <Text style={styles.input}>{title}</Text>
        <Text style={styles.input}>{name}</Text>
        <Text style={styles.input}>{phone}</Text>
        </View>
        <View>
        <Text style={styles.texthead}>Адрес</Text>
        <Text style={styles.input}>{street}</Text>
        <Text style={styles.input}>{numberhome}</Text>
        <Text style={styles.input}>{door}</Text>
        <Text style={styles.input}>{floor}</Text>
        </View>
        <View>
        <Text style={styles.texthead}>Дата и Время</Text>
        <Text style={styles.input}>{date}</Text>
        <Text style={styles.input}>{time}</Text>
        </View>
        </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  texthead:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  inputcommit: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  gotovotext:{
    fontSize: 18,
    color: '#4DA3D3',
    fontWeight: 600,
    display: 'flex',
  },

})