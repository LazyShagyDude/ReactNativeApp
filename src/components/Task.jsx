import { View,Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { FullTask } from './FullTask';
import { useRef } from 'react';
import { BottomSheet } from 'react-native-sheet';

export const Task = ({title, date, door, floor, name, numberhome, phone, street, time} ) =>{

    const bottomSheet = useRef(null);


    return(
        <View style={styles.taskview}>
            <View style={styles.lefttaskview}>
            <View style={styles.dataview}>
                <Text style={styles.textup}>{time}</Text>
            </View>
            <Image
            source={require('../icon/But.png')}
            />
            </View>
            <TouchableOpacity onPress={() => bottomSheet.current.show()}>
            <View style={styles.rightview}>
                <Text style={styles.titletext}>{title}</Text>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/Local.png')}
                />
                <Text style={styles.addrestext}>{street}</Text>
                </View>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/User.png')}
                />
                <Text style={styles.timetext}>{name}</Text>
                </View>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/mobile.png')}
                />
                <Text style={styles.phonetext}>{phone}</Text>
                </View>
            </View>
            <BottomSheet height={750} ref={bottomSheet}>
                <FullTask title={title} date={date} door={door} floor={floor} name={name} numberhome={numberhome} phone={phone} street={street} time={time}/>
            </BottomSheet>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskview:{
        marginTop: 25,
        marginRight:22,
        marginLeft:17,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
    },
    lefttaskview:{},
    dataview:{
        marginBottom:12,
        marginRight:9,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        width: 59,
        height: 56,
        justifyContent: 'center',
        alignItems:'center',
    },
    textup:{
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 24,
    },
    textdown:{
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 15,
    },
    rightview:{
        borderStyle: 'solid',
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 20,
        width: 268,
        height: 124,
        flexDirection: 'column',
        padding: 13,
    },
    titletext:{
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21,
        fontWeight: 500,
        paddingBottom: 5,
        
    },
    addrestext:{
        marginLeft: 3,
        color:'#9C9C9C',
    },
    timetext:{
        marginLeft: 3,
        color:'#9C9C9C',
    },
    phonetext:{
        marginLeft: 3,
        color:'#9C9C9C',
    },
    textimg:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems:'center',
        paddingBottom: 5,
    },
})