import { Button, KeyboardTypeOptions, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../../../Styles/component-Styles';
import Icon from 'react-native-vector-icons/Ionicons';


interface TextFieldProp {
    label: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    placeholder?: string;
    value?: string;
    setValue?: (text: string) => void;
    isValidate: boolean;
}

const TextField = ({ label, keyboardType, secureTextEntry, placeholder, value, setValue, isValidate }: TextFieldProp) => {
    const [hideText, setHideText] = useState<boolean>(secureTextEntry || false)
    return (
        <View>
            <Text style={[styles.TextFieldHead]}>{label}</Text>
            <View style={[isValidate ? styles.viewTextInput : styles.viewTextInputInvalid]}>

                <TextInput
                    style={[styles.textInput]}
                    keyboardType={keyboardType}
                    secureTextEntry={hideText}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={setValue}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setHideText(!hideText)}

                    >
                        <Image source={hideText ? require('../../../assets/icons/hide.png') : require('../../../assets/icons/view.png')}
                            style={[styles.iconStyle]}
                        />
                    </TouchableOpacity>
                )}
            </View>

        </View>
    )
};


export default TextField;

// const TextField = ({ label }: TextFieldProp) => {
//     const [value, setValue] = useState<string>("");

//     return (
//         <View>
//             <Text>value ki value: {value}</Text>
//             <Text>{label}</Text>
//             <TextInput value={value} onChangeText={setValue} />

//         </View>
//     )
// };