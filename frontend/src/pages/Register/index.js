import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nameNotBlank, setNameNotBlank] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassLength, setValidPassLength] = useState(false)
  const [validConfirmation, setValidConfirmation] = useState(false)
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const handleRegister = async () => {

    if (name == '' || email == '' || password == '' || confirmPassword == '') {
      
      Alert.alert('No field must be empty')
    } else if (name && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Password and confirmation must be the same')
      } else {
        fetch('http://127.0.0.1:8080' + '/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        })
      }).then((response) => {
        //console.log(response)
        if (response.status == 200) {
          return response.json();
        }
      }).then((responseJson) => {
        console.log(responseJson);
      })
        .catch((error) => {
          console.error(error);
        });

        navigateToLogin()

        Alert.alert(`Your acess:                                    
      Email: ${email} Password: ${password}`)
      }
    }
  }


  // check if name is in blank
  const isNameNotBlank = () => {
    if (name == ''){
      setNameNotBlank(true)
    } else {
      setNameNotBlank(false)
    }
  }

  // check email format
  const validateEmailInput = () => {

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      setValidEmail(false)
    }
    else {
      setValidEmail(true)
    }
  }

  // check password length
  const validatePasswordLength = () =>{
    if(password.length < 4) {
      setValidPassLength(true)
    } else {
      setValidPassLength(false)
    }
  }

  const validateConfirmation = () =>{
    if(password.length < 4 || confirmPassword !== password) {
      setValidConfirmation(true)
    } else {
      setValidConfirmation(false)
    }
  }

  return (

    <View style={styles.container}>
      <Image
        style={styles.title}
        source={require('../../../assets/logo.png')}
      />

      <Text style={styles.label}>Sign up and enjoy</Text>

      <TextInput placeholder='Full Name'
        textContentType="name"
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        onBlur={isNameNotBlank}
      />

      {name.length > 100 &&
        <Text style={{fontSize: 20, color: '#9c112d'}}>name must have max 5 caracters</Text>
      }

      {nameNotBlank === true ? 
        <Text style={{fontSize: 20, color: '#9c112d'}}>must not be in blank</Text>
        :
        <Text></Text>
      }

      <TextInput placeholder='Email'
        textContentType="emailAddress"
        style={styles.input}
        value={email.toLowerCase()}
        onChangeText={text => setEmail(text)}
        onBlur={validateEmailInput}
      />

      { validEmail == true ?
        <Text style={{fontSize: 20, color: '#9c112d'}}>Type a valid email address</Text>
        : <Text></Text>
      }

      <TextInput placeholder='Password'
        textContentType="password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        onBlur={validatePasswordLength}
      />

      {validPassLength == true &&
        <Text style={{fontSize: 20, color: '#9c112d'}}>must have at least 4 caracters</Text>
      }

      <Text></Text>

      <TextInput placeholder='Confirm password'
        textContentType="password"
        style={styles.input}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        onBlur={validateConfirmation}
      />

      {validConfirmation == true &&
        <Text style={{fontSize: 20, color: '#9c112d'}}>must be same as password</Text>
      }

      <View style={styles.containerButtons}>
        <TouchableOpacity
          title="Submit"
          style={styles.buttonRegister}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
} 
