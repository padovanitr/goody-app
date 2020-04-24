import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#56b8cc',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: - 90
      },
      contetTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
      }
})