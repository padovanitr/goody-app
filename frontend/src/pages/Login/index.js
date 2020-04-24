import React, { useState } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default props => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[validEmail, setValidEmail] = useState(false)
  const[validPassword, setValidPassword] = useState(false)

  const navigation = useNavigation()

  const navigateToProfile = (value) => {
    navigation.navigate('Profile', {name: value})
  }

  async function handleLogin() {

    fetch('http://127.0.0.1:8080' + '/sessions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then((response) => {
      if (response.status == 200) {
          return response.json();
      }
    })
    .then((responseJson) => {

      if (responseJson) {

        AsyncStorage.setItem('userName', responseJson.name)

        navigateToProfile(responseJson.name)
      }
      if (!responseJson) {
        Alert.alert('Usuário não encontrado')
      }

    })
    .catch((error) => {
      console.error(error);
    });

  }

  const validateEmailInput = () => {

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      setValidEmail(false)
    }
    else {
      setValidEmail(true)
    }
  }

  const validPasswordInput = () => {

    if(password.length < 4){
      setValidPassword(true)
 
    } 
    else {
      setValidPassword(false)
    
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.title}
        source={require('../../../assets/logo.png')}
      />
      
      <Text style={styles.label}>Log in your profile</Text>
      <TextInput 
          placeholder='Email' 
          style={styles.input}
          keyboardType='email-address'
          value={email.toLowerCase()}
          onChangeText={ text => setEmail(text)}
          onBlur = {validateEmailInput}
      />

      {validEmail === true ? 
        <Text style={{fontSize: 20, color: '#9c112d'}}>Type a valid email address</Text>
        : <Text></Text>
      }

      <TextInput 
          placeholder='Password' 
          style={styles.input}
          secureTextEntry={true} 
          value={password}
          onChangeText={ text => setPassword(text)}
          onBlur={validPasswordInput}
      /> 

      {validPassword === true ?
        <Text style={{fontSize: 20, color: '#9c112d'}}>Must have at least 4 characters</Text> 
        : <Text></Text>
      }
      
      <View style={styles.containerButtons}>
      
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleLogin}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
       
      </View>        
    </View>
  );
}