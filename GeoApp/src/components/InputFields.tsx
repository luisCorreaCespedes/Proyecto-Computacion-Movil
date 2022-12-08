import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function InputFields({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction}: any) {
    return (
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            borderBottomColor: '#ccc', 
            borderBottomWidth: 1, 
            paddingBottom: 8, 
            marginBottom: 15
          }}>
            {icon}
            {inputType == 'password' ? (
                <TextInput 
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{marginLeft: 10, flex: 1, paddingVertical: 0}} 
                    secureTextEntry={true}
                />
            ) : (
                <TextInput 
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{marginLeft: 10, flex: 1, paddingVertical: 0}}
                />
            )}
          </View>
    )
}