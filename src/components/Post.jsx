import { Image,View,Text, TouchableOpacity,StyleSheet, TextInput, Button, Platform } from 'react-native';
import { BottomSheet } from 'react-native-sheet';
import { useRef, useState } from 'react';
import MaskInput, { Masks } from 'react-native-mask-input'
import { ScrollView } from 'react-native-gesture-handler';

export const Post = () =>{
  const bottomSheet = useRef(null);
  const [Tasktext, onChangeTaskText] = useState('');
  const [Nametext, onChangeNameText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [Street, onChangeStreetText] = useState('');
  const [NumberHome, onChangeNumberHomeText] = useState('');
  const [Door, onChangeDoor] = useState('');
  const [Floor, onChangeFloorText] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');

  const TimeMask = [/\d/, /\d/, ':', /\d/, /\d/];
  const PhoneMask = ['+', /\d/, '-', /\d/,  /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/,  /\d/, '-', /\d/,  /\d/];

    return(
      <View>
      <BottomSheet height={750} ref={bottomSheet}>
        <ScrollView>
        <View>
        <Text style={styles.texthead}>Заявка</Text>
        <TextInput style={styles.input}
        onChangeText={onChangeTaskText}
        value={Tasktext}
        placeholder="Что делать"
        keyboardType="default"/>
        <TextInput style={styles.input}
        onChangeText={onChangeNameText}
        value={Nametext}
        placeholder="ФИО"
        keyboardType="default"/>
        <MaskInput style={styles.input}
      value={number}
      onChangeText={onChangeNumber}
      mask={PhoneMask}
      placeholder="+7-987-654-32-10"
      keyboardType="numeric"
          />
        </View>
        <View>
        <Text style={styles.texthead}>Адрес</Text>
        <TextInput style={styles.input}
        onChangeText={onChangeStreetText}
        value={Street}
        placeholder="Улица"
        keyboardType="default"/>
        <TextInput style={styles.input}
        onChangeText={onChangeNumberHomeText}
        value={NumberHome}
        placeholder="Кв"
        keyboardType="numeric"/>
        <TextInput style={styles.input}
        onChangeText={onChangeDoor}
        value={Door}
        placeholder="Парадная"
        keyboardType="numeric"/>
        <TextInput style={styles.input}
        onChangeText={onChangeFloorText}
        value={Floor}
        placeholder="Этаж"
        keyboardType="numeric"/>
        </View>
        <View>
        <Text style={styles.texthead}>Дата и Время</Text>
          <MaskInput style={styles.input}
      value={Date}
      onChangeText={setDate}
      mask={Masks.DATE_DDMMYYYY}
      placeholder="ДД/ММ/ГГГГ"
      keyboardType="numeric"
          />
          <MaskInput style={styles.input}
      value={Time}
      onChangeText={setTime}
      mask={TimeMask}
      placeholder="ЧЧ:ММ"
      keyboardType="numeric"
          />
        </View>
        </ScrollView>
      </BottomSheet>
      <TouchableOpacity onPress={() => bottomSheet.current.show()}>
      <Image 
      source={require('../icon/post.png')}/>
      </TouchableOpacity>
    </View>
      );
} 

const styles = StyleSheet.create({
  HomeView:{
    flex: 1,
     // backgroundColor: '#656565',
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

})