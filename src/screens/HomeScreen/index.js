import React, { Component } from "react";
import {
    View, Text, Image,
    TextInput, TouchableOpacity, Keyboard,
    ScrollView, StyleSheet, Dimensions,
    Platform, ActivityIndicator
} from "react-native";

import Header from "../../commons/Header";
import CenterComponent from "./components/CenterComponent";

// const KEYBOARD_DISMISS = Platform.OS = 'ios' ? 'interactive' : 'on-drag'
const ICON_LEFT = require('../../resources/icons/menu.png')
const ICON_RIGHT = require('../../resources/icons/profile.png')
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    reloadView = () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.viewParent}>
                    <ActivityIndicator size='large' />
                </View>
            )
        } else {
            return (
                <ScrollView
                    //style ScrollView
                    contentContainerStyle={styles.container}
                    //Loai bo ban phim khi keo
                    //
                    keyboardDismissMode='on-drag'
                    //Loai bo ban phim khi bam ra ngoai
                    keyboardShouldPersistTaps='handled'

                    showsVerticalScrollIndicator={false}
                //Function khi keo
                // onScroll={this.reloadView}
                >
                    <Header
                        leftIcon={ICON_LEFT}
                        rightIcon={ICON_RIGHT}
                        {...this.props}
                    />
                    <CenterComponent />
                    <TouchableOpacity
                        style={styles.btnReload}
                        onPress={this.reloadView}
                    >
                        <Text>
                            Reload...
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            )
        }

    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    btnReload: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})