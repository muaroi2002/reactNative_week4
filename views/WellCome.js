import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Wellcome({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Welcome to Welcome Screen!</Text>
            <Button
                title="Go Back to Login"
                onPress={() => navigation.navigate('Page1')}
            />
        </View>
    );
}