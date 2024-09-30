import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../../Styles/component-Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

interface buttonProp {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    children?: React.ReactNode;


};

  const CustomButton = ({ title, onPress, backgroundColor = "#000" }: buttonProp  ) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText]}>{title} </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;



