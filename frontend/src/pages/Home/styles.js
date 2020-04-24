import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#56b8cc',
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
      flex: 1,
      width: 280,
      height: 280,
      resizeMode: 'contain',
      marginTop: Platform.OS == 'ios' ? '55%' : '35%', 
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
    buttonRegister: {
      marginTop: Platform.OS == 'ios' ? '5%' : '7%',
      marginRight: 15,
      marginLeft: 15,
      padding: 13,
      paddingRight: 25,
      paddingLeft: 25,
      backgroundColor: '#56b8cc',
      borderRadius: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
      borderWidth: 1.5,
      borderColor: '#FFF'
    },
    buttonTextHome: {
  
      textAlign: 'center',
      fontSize: 23,
      color: '#FFF',
    },
    buttons: {
      flex: 1,
      flexDirection: 'row'
    }
  })