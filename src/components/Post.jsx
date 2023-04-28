import { Image,View,Text, TouchableOpacity,StyleSheet } from 'react-native';
import { BottomSheet } from 'react-native-sheet';
import { useRef } from 'react';

export const Post = () =>{
  const bottomSheet = useRef(null);
    return(
      <View>
      <BottomSheet height={800} ref={bottomSheet}>
        <Text>Почему и как</Text>
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

})