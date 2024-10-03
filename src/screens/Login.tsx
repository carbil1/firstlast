import { Button, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import TextField from '../components/TextField/index.tsx'
import CustomButton from '../components/ButtonComp/index.tsx'
import styles from '../../Styles/component-Styles.tsx'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import change from './testing.jsx'

interface homeScreenprops {
    navigation: any;
}

export function Login({ navigation }: homeScreenprops) {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [usernameValidity, setUsernameValidity] = useState<boolean>(true);
    const [passwordValidity, setPasswordValidity] = useState<boolean>(true);
    const [message, setMessage] = useState<string>();

    const handleLoginClick = () => {
        //API login 
        if (username && password) {
            const loginApiRes = true;
            if (loginApiRes)
                navigation.navigate('change');
        }
        else {
            setMessage("please fill the required fields");
            setUsernameValidity(false);
            setPasswordValidity(false)
        }
    }
    return (
        <View style={[styles.container]}>
            <View >


                <Text style={{ marginHorizontal: 100, marginBottom: 100, fontSize: 40, fontWeight: "900" }}>Login Page</Text>
                {message && <Text>{message} {JSON.stringify(usernameValidity)}</Text>}
                {/* <TextInput style={[styles.textInput]} value={""} keyboardType='numeric' /> */}

                <TextField label='Email or Phone Number' isValidate={usernameValidity} keyboardType='numeric' placeholder='Phone Number' value={username} setValue={(text) => setUsername(text)}></TextField>


                <TextField label='Password' isValidate={passwordValidity} secureTextEntry={true} placeholder='Password' value={password} setValue={text => setPassword(text)}></TextField>

                <CustomButton title='Login' onPress={handleLoginClick} />


                <Text style={{ fontSize: 50 }}>Hello</Text>
                <Text style={[styles.customFonts]}>Hello</Text>


            </View>
        </View>
    )
}

export default Login