import 'react-native-gesture-handler';
import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles'

export default function Home({ navigation }) {

    function navigateToLogin(){
        navigation.navigate('Login')
    }

    function navigateToRegister(){
        navigation.navigate('Register')
        
    }
  
    return ( 
        <View style={styles.container}>
          <Image
            style={styles.title}
            source={require('../../../assets/logo.png')}
          />
          
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={navigateToLogin}
            >
              <Text style={styles.buttonTextHome}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={navigateToRegister}
            >
              <Text style={styles.buttonTextHome}>Registry</Text>
            </TouchableOpacity>
          </View>        
          
        </View>
    ); 
}