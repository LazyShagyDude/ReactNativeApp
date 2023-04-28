import { View,Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

export const Task = () =>{
    return(
        <View style={styles.taskview}>
            <View style={styles.lefttaskview}>
            <View style={styles.dataview}>
                <Text style={styles.textup}>12</Text>
                <Text style={styles.textdown}>апреля</Text>
            </View>
            <Image
            source={require('../icon/But.png')}
            />
            </View>
            <TouchableOpacity>
            <View style={styles.rightview}>
                <Text style={styles.titletext}>Заменить батарейку</Text>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/Local.png')}
                />
                <Text style={styles.addrestext}>Гражданский проспект, 9к5</Text>
                </View>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/timing.png')}
                />
                <Text style={styles.timetext}>Приехать с : 12:00 -14:00</Text>
                </View>
                <View style={styles.textimg}>
                <Image
                source={require('../icon/mobile.png')}
                />
                <Text style={styles.phonetext}>+7-987-654-32-10</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskview:{
        marginTop: 25,
        marginRight:22,
        marginLeft:17,
        //backgroundColor: '#D9D9D9',
        //display: 'flex',
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
        fontSize: 20,
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