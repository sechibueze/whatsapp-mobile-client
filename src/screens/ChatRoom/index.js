import React from 'react';
import {  Text, FlatList, ImageBackground } from 'react-native';
import ChatMessage from '../../components/ChatMessage';
import ChatInput from '../../components/ChatInput';
import styles from './styles';

const ChatRoom = ({ route }) => {

    const { messages } = route.params;

    return ( 
        <ImageBackground source={require('../../assets/chatroom-bg.png')} style={styles.container}>
            {
                messages.length === 0 && <Text> Begining of you chat, encrypted </Text>
            }
            <FlatList 
                data={messages}
                renderItem={({item}) => <ChatMessage message={item} /> }
                keyExtractor={item => item.id}
            />

            <ChatInput />
        </ImageBackground>
     );
}
 
export default ChatRoom;