import React from 'react'
import { View, 
         Text, 
         Image, 
         TouchableOpacity, 
         AsyncStorage 
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import Icon from '../../../assets/icon.png'

export default props => {

    const route = useRoute()
    const navigation = useNavigation()
    const userName = route.params.name

    const navigateToHome = () => {
        navigation.navigate('Home')
      }

    function handleLogOut() {
        AsyncStorage.clear()

        navigateToHome()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Icon} style={{ height: 150, width: 150, marginRight: 150}}/>
                
                <TouchableOpacity onPress={handleLogOut} style={{ marginRight: 20}}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.contetTitle}>Hello {userName}</Text>
            </View>
        </View>
    )
}