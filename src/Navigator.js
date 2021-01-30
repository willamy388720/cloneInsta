import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'

const Tab = createBottomTabNavigator()

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
        <Tab.Screen name="Profile" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
)