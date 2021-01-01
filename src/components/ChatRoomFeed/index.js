import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
const ChatRoomFeed = () => {
    return ( 
        <View style={styles.itemWrap}>
            <View style={styles.itemLeft}>
                <Image source={{uri: 'https://picsum.photos/100'}} style={styles.imageThumbnail}/>
                <View style={styles.roomInfo}>
                    <Text style={styles.roomId}> Samuel Chibueze  </Text>
                    <View style={styles.lastMessageBlock}>
                        <Ionicons name='checkmark-done' size={18} color='red'/>
                        <Text style={styles.lastMessageText}> Hello! Are you there?   </Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightWrap}>
                 <Text style={styles.timestamp}> Yesterday </Text>
                 <Text style={styles.messageCount}> 3 </Text>
            </View>
        </View>
     );
}
 
export default ChatRoomFeed;