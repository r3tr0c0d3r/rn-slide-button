import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    onPress: (event: Event) => void;
}

const Button = (props: Props) => {
    console.log('Button: render!!')
    return (
        <TouchableOpacity style={styles.container} 
        activeOpacity={0.7}
        onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button);

const styles = StyleSheet.create({
    container: {
        height: 52,
        paddingHorizontal: 16,
        backgroundColor: 'pink',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
