import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const ContactItem = ({ contact }) => {
    const { avatar, name, status} = contact;
    const navigation = useNavigation()
    const onPress = () => navigation.navigate('ChatRoom', {
        messages: []
    });
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <View>
                <Text style={styles.name}> { name } </Text>
                <Text> { status } </Text>
            </View>
            
        </TouchableOpacity>
     );
}
 
export default ContactItem;