import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const authRouter = () =>
  <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>

const loginOrProfileRouter = () =>
  <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Profile' component={Profile} />
    <Stack.Screen name='Auth' component={authRouter} />
  </Stack.Navigator >


export default props => (
  <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case 'Feed':
                iconName = 'home'
                break;
              case 'AddPhoto':
                iconName = 'camera'
                break;
              case 'Profile':
                iconName = 'user'
                break;

              default:
                break;
            }

            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        initialRouteName="Feed"
        tabBarOptions={{
          showLabel: false
        }}>

        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="AddPhoto" component={AddPhoto} />
        <Tab.Screen name="Profile" component={loginOrProfileRouter} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
)