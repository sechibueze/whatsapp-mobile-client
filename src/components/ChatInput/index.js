import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity  } from 'react-native';
import { Ionicons, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
const ChatInput = () => {
    const [chat, setChat] = useState('')
    const onPress = () => {
        if (!chat) {
           return console.warn('voice was tapped')
        }
        // send message/chat
        return console.warn('send chat', chat)
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <Entypo name='emoji-happy' size={26} color={'grey'} style={styles.icon}/>
                <TextInput style={styles.textInput} 
                    onChangeText={setChat}
                    value={chat}
                    placeholder={'Type a message'}
                    multiline={true}
                    underlineColorAndroid={'transparent'}
                />
                <Entypo name='attachment' size={26} color={'grey'} style={styles.icon}/>
                {
                    !chat && <Ionicons name='camera' size={26} color={'grey'} style={styles.icon}/>
                }
            </View>
            <TouchableOpacity onPress={onPress} style={styles.actionButtonContainer}> 
                {
                    !chat ?  <FontAwesome5 name='microphone' size={26} color={'white'}/>
                    : <MaterialCommunityIcons name='send' size={26} color={'white'} />

                }
            </TouchableOpacity>
        </View>
     );
}
 
export default ChatInput;