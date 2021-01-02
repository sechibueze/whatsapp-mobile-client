import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        // height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 3,
        margin: 5,
    },
    icon: {
        margin: 8,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 8,
    },
    actionButtonContainer: {
        backgroundColor: 'grey',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 12,
        borderRadius: 20,
    },
});