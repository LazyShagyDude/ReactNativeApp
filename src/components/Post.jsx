import { Image,View,Text, TouchableOpacity,StyleSheet, TextInput, Button } from 'react-native';
import { BottomSheet } from 'react-native-sheet';
import { useRef } from 'react';
import React from 'react';

export const Post = () =>{
  const bottomSheet = useRef(null);
  const [Tasktext, onChangeTaskText] = React.useState('');
  const [Nametext, onChangeNameText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [Street, onChangeStreetText] = React.useState('');
  const [NumberHome, onChangeNumberHomeText] = React.useState('');
  const [Door, onChangeDoor] = React.useState('');
  const [Floor, onChangeFloorText] = React.useState('');
  const [Commit, onChangeCommitText] = React.useState('');

    return(
      <View>
      <BottomSheet height={750} ref={bottomSheet}>
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
        <TextInput style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Мобильный"
        keyboardType="phone-pad"/>
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
          <Button title="Open"/>
          <TextInput style={styles.inputcommit}
        onChangeText={onChangeCommitText}
        value={Commit}
        placeholder="Коментарий"
        keyboardType="default"/>
        </View>
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