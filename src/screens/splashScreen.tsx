import { Image, StatusBar, Text, View } from 'react-native'
import React, { Component, useEffect, useRef } from 'react'
// import img from "../../assets/images/splash.jpg"


const SplashScreen = ({ navigation }: any) => {
    const animationRef = useRef()
    const LOGO = require('../../assets/images/splash.jpg')
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("login2")
        }, 3000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />
            <Image source={LOGO} style={{ height: 100, width: 100, tintColor: '#000' }} />


        </View>
    )
}

export default SplashScreen