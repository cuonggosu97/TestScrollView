import React, { Component } from "react";
import {
    View, Text, Image,
    TextInput, Touchable, Keyboard,
    ScrollView, StyleSheet, Dimensions,
    Platform
} from "react-native";

import Header from "../../commons/Header";
import CenterComponent from "./components/CenterComponent";

// const KEYBOARD_DISMISS = Platform.OS = 'ios' ? 'interactive' : 'on-drag'
const ICON_LEFT = require('../../resources/icons/menu.png')
const ICON_RIGHT = require('../../resources/icons/profile.png')
class HomeScreen extends Component {
    render() {
        return (
            <ScrollView
                //style ScrollView
                contentContainerStyle={styles.container}
                //Loai bo ban phim khi keo 
                keyboardDismissMode='on-drag'
                //Loai bo ban phim khi bam ra ngoai
                keyboardShouldPersistTaps='handled'

                showsVerticalScrollIndicator={false}
            >
                <Header
                    leftIcon={ICON_LEFT}
                    rightIcon={ICON_RIGHT}
                    {...this.props}
                />
                <CenterComponent />
            </ScrollView>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})