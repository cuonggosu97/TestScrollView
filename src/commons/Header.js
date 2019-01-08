import React, { Component } from "react";
import {
    View, Image, Text,
    TouchableOpacity, Platform,
    StyleSheet, TextInput
} from "react-native";
class Header extends Component {

    render() {
        let { leftIcon, rightIcon, onLeftPress, onRightPress } = this.props;
        return (
            <View style={styles.viewHeader}>
                <View style={styles.viewIcon}>
                    <TouchableOpacity
                        onPress={onLeftPress}
                    >
                        <Image
                            source={leftIcon}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTextInput}>
                    <TextInput
                        style={styles.inputText}
                        underlineColorAndroid='transparent'
                        placeholder='Enter uesername/email'
                        placeholderTextColor='rgba(255,255,255, 0.8)'
                        keyboardType='default'
                        returnKeyType='next'
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity
                        onPress={onRightPress}
                    >
                        <Image
                            source={rightIcon}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        // position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
    },
    viewIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: 'grey',
        backgroundColor: 'transparent'
    },
    viewTextInput: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        height: 35,
        width: 240,
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingHorizontal: 12,
    }
})

export default Header