import { ScrollView} from 'react-native';
import { Header } from './Header';
import { Task } from './Task';
import { View, StatusBar,StyleSheet } from 'react-native';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection, onSnapshot, snapshotEqual } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

export const Home = () =>{

  const [todos,setTodos]=useState<any[]>([]);

        useEffect(()=>{
            const todoRef = collection(FIRESTORE_DB, 'todos');
            const subsriber = onSnapshot(todoRef,{
                next: (snapshot) =>{
                    const todos: any[]=[];
                    snapshot.docs.forEach(doc => {todos.push({
                      id: doc.id,
                      ...doc.data(),
                    });
                    });
                    setTodos(todos);
                },
            });

            return () => subsriber();
        },[]);



    return(
      <View style={styles.HomeView}>
        <Header />
        <ScrollView>
        {
          todos.length > 0 && (
            <View>
            {todos.map((todo)=>(
              <Task key={todo.id} title={todo.title} date={todo.date} door={todo.door} floor={todo.floor} name={todo.name} numberhome={todo.numberhome} phone={todo.phone} street={todo.street} time={todo.time}/>
            ))}</View>
          )
        }</ScrollView>
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