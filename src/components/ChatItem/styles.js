import { StyleSheet}  from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#ddd',
        borderBottomColor: 'grey'
    },
    chatPreview:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    roomInfo:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    imageThumbnail: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 10,
    },
    roomId: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessageBlock: {
        flexDirection: 'row',
        fontWeight: 'normal',
        fontWeight: 'normal'
    },
    lastMessageBText: {
        fontWeight: 'normal',
        fontWeight: 'normal'
    },
    chatStats: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    timestamp: {
        color: '#444'
    },
    chatCount: {
        width: 25,
        height: 25,
        borderRadius: 25/2,
        backgroundColor: '#ccc',
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
        
    }
});