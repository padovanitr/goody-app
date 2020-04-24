import { StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#56b8cc',
    },
    label: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 15
    },
    containerButtons:{ 
      backgroundColor:'#56b8cc', 
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems:'flex-start',
      marginTop: 100
    }, 
    title: {
      marginBottom: 30,
      flex: 1,
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginTop: Platform.OS == 'ios' ? '5%' : '2%',
    },
    buttonLogin: {
      marginTop: Platform.OS == 'ios' ? '5%' : '7%',
      marginRight: 15,
      marginLeft: 15,
      padding: 13,
      paddingRight: 37,
      paddingLeft: 37,
      backgroundColor: '#56b8cc',
      borderRadius: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset : { width: 1, height: 13},
      borderWidth: 1.5,
      borderColor: '#FFF'
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 23,
      color: '#FFF',
    },
    buttons: {
      flex: 1,
      flexDirection: 'row'
    },
    input: {
      padding: 15,
      marginTop: 20,
      width: '90%',
      backgroundColor: '#EEE',
      height: 50,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 10,
      borderWidth: 0.1,
      fontSize: 18
  }
  })
  