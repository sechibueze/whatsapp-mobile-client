import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import ContactItem from '../../components/ContactItem';
import styles from './styles';
import CONTACTS from '../../_data/CONTACTS';
const Contacts = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.lineCard}>
                <View style={styles.iconContainer}>
                    <Entypo name='users' size={22} color={'white'} />
                </View>
                <Text style={styles.lineText}> New group</Text>
            </View>
            <View style={styles.lineCard}>
                <View style={styles.iconContainer}>
                    <Ionicons name='person-add' size={22} color={'white'} />
                </View>
                <Text style={styles.lineText}> New contact</Text>
            </View>
            <FlatList 
                data={CONTACTS}
                renderItem={({item}) => <ContactItem contact={item} />}
                keyExtractor={item => item.id}
            />
        </View>

     );
}
 
export default Contacts;