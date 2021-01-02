import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: 'grey',
        shadowOpacity: .8,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        margin: 8,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 3,
    }
});