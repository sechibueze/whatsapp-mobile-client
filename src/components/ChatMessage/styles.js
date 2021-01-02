import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 10,
        
    },
    messageBox: {
        // backgroundColor: '#dcfbc5',
        padding: 5,
        borderRadius: 6,
    },
    messageOwner: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    messageContent: {
        color: 'grey'
    },
    messageInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
});