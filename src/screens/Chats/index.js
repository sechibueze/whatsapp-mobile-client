import React from 'react';
import { useState } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ChatItem from '../../components/ChatItem';
import styles from './styles';
import DATA from '../../_data/CHATS';
const Chats = ({ navigation }) => {

    const [chatList, setChatList] = useState(DATA);
    const onPress = () => navigation.navigate('Contacts', { contactCount: 32 });
    return ( 
        <View style={styles.container}>
            <FlatList 
                data={chatList}
                renderItem={({item}) => <ChatItem chat={item} /> }
                keyExtractor={(item) => item.id }
                style={styles.chatList}
            />
            <TouchableOpacity onPress={onPress} style={styles.chatCTA}>
                <MaterialIcons name='message' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
     );
}
 
export default Chats;