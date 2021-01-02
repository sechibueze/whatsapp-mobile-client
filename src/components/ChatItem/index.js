import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
const ChatItem = ({ chat }) => {
    const navigation = useNavigation();
    const {image, name, users, messages, lastMessage, createdAt } = chat;
    const getGroupNameFromPartner = () => {
        // A group with no name will have the two persons chatting
        if (users.length !== 2) return 'Unknown';

        const otherUser = users.filter(user => user.id !== 'u1')
        return otherUser[0].name;
    }

    const getGroupName = () => {
        if (!name) {
           return getGroupNameFromPartner()
        }else{
            return name;
        }
    }
    return ( 
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('ChatRoom', {
                messages: messages
            })}
        >

            <View style={styles.container}>
                <View style={styles.chatPreview}>
                    <Image source={{uri: image}} style={styles.imageThumbnail}/>
                    <View style={styles.roomInfo}>
                        <Text style={styles.roomId}> { getGroupName()}  </Text>
                        <View style={styles.lastMessageBlock}>
                            <Ionicons name='checkmark-done' size={18} color='red'/>
                            <Text style={styles.lastMessageText}> { lastMessage }  </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.chatStats}>
                    <Text style={styles.timestamp}> { moment(createdAt).format('LT')}  </Text>
                    <Text style={styles.chatCount}> 3 </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
     );
}
 
export default ChatItem;