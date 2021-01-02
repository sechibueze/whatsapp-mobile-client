import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MainTopTabs from './src/Navigation/MainTopTabsNavigation';
import ChatRoom from './src/screens/ChatRoom';
import Contacts from './src/screens/Contacts';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        swipeEnabled={true}
        screenOptions={{
            title: 'WhatsApp',
            headerStyle: {
                backgroundColor: '#128c7e',
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 22,
            },
            headerRight: () => {
                return (
                    <View style={{
                            flexDirection: 'row',
                            width: 70,
                            justifyContent: 'space-between',
                            paddingRight: 10,
                        }}
                    >
                        <Ionicons name='search' size={22} color='white' />
                        <MaterialCommunityIcons name='dots-vertical' size={22} color='white' />
                    </View>
                )
            }
        }}
      >
        
        <Stack.Screen name='Home' component={MainTopTabs} />
        <Stack.Screen name='ChatRoom' component={ChatRoom} />
        <Stack.Screen name='Contacts' component={Contacts} 
          options={({route}) => ({ 
            title: 'Select Contact',
            headerTitle: props => (
              <View>
                <Text {...props}> Select Contact </Text>
                <Text> { route.params.contactCount } contacts </Text>
              </View>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;