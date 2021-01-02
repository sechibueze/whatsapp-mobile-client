import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    lineCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: 'grey',
        shadowOpacity: .8,
        elevation: 10,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'green',
        margin: 8, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineText: {
        fontWeight: 'bold'
    },
});