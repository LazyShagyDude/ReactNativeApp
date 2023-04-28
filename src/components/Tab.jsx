import { History } from '../components/History';
import { Home } from '../components/Home';
import {Post} from '../components/Post';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export const MeneTab =()=> {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'albums' : 'albums-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6969B3',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false }}/>
        <Tab.Screen name="Post" component={Home} options={{headerShown: false,
        tabBarIcon: ({focused}) => (
      <Post/>
        ) }}/>
        <Tab.Screen name="History" component={History} options={{headerShown: false }}/>
      </Tab.Navigator>
    );
  }