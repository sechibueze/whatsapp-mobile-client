import React from 'react';
import moment from 'moment';
import { View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons';
import styles from './styles';

const ChatMessage = ({ message }) => {
    const {id, content, createdAt, owner: {username, name }} = message;

    const isMyMessage = () => {
        return message.owner.id === 'u1'
    }
    return ( 
        <View style={styles.container}>
            <View style={[
                styles.messageBox,
                {
                    backgroundColor: isMyMessage() ? '#dcfbc5' : 'white',
                    marginLeft: isMyMessage() ? 30 : 0,
                    marginRight: !isMyMessage() ? 30 : 0,
                }
            ]}>
                {
                    !isMyMessage() && <Text style={styles.messageOwner}> { name === '' ? username : name } </Text>
                }
                <Text style={styles.messageContent}> {content} </Text>
                <View style={styles.messageInfo}>
                    <Text style={styles.messageTime} > {moment(createdAt).fromNow() } </Text>
                    <Ionicons name='checkmark-done' size={18} color={'grey'} />
                </View>
            </View>
        </View>
     );
}
 
export default ChatMessage;