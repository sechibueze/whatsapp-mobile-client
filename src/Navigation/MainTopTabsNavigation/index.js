import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import ChatRoomFeed from '../../components/ChatRoomFeed';
import StatusFeed from '../../components/StatusFeed';
import CallsFeed from '../../components/CallsFeed';
import { Dimensions } from 'react-native';
import Home from '../../screens/Home';
const Tabs = createMaterialTopTabNavigator();
const MainTopTabs = () => {
    return ( 
        <Tabs.Navigator 
            initialRouteName='Chats'
            tabBarPosition='top'
            swipeEnabled={true}
            initialLayout={{
                width: Dimensions.get('window').width
            }}
            tabBarOptions={{
                activeTintColor: 'white',
                showLabel: true,
                showIcon: true,
                tabStyle: {
                    backgroundColor: '#128c7e',
                },
                labelStyle: {
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                },
                style: {
                    backgroundColor: '#128c7e',
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingVertical: 2, //so the indicators acn show
                },
                indicatorStyle: {
                    backgroundColor: '#fff'
                }
            }}
        >
            <Tabs.Screen 
                name='camera'
                options={{
                    showIcon: true,
                    tabBarLabel: ({color}) => <Ionicons name='camera' color={color} size={20} style={{width: 20 }} />,
                    
                }} 
                component={Home}
            />
            <Tabs.Screen name='Chats' component={ChatRoomFeed} />
            <Tabs.Screen name='Status' component={StatusFeed} />
            <Tabs.Screen name='Calls' component={CallsFeed} />
        </Tabs.Navigator>
     );
}
 
export default MainTopTabs;