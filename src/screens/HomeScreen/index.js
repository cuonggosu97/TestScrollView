import React, { Component } from "react";
import {
    View, Text, Image,
    TextInput, TouchableOpacity, Keyboard,
    ScrollView, StyleSheet, Dimensions,
    Platform, ActivityIndicator, RefreshControl
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
            isLoading: false,
            heightContent: 0,
            isRefreshing: false
        }
    }

    onReloading = () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000)
    }

    onRefreshing = () => {
        this.setState({ isRefreshing: true })
        setTimeout(() => {
            this.setState({ isRefreshing: false })
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
                    //Loại bỏ bàn phím khi kéo: none, on-drag, interactive
                    //none: (mặc định) kéo không tắt bàn phím
                    //on-drag: bàn phím loại bỏ khi kéo
                    //interactive: (IOS only) bàn phím bị loại bỏ khi tương tác với lực lkéo và di chuyển đồng bộ cảm ứng
                    keyboardDismissMode='interactive'
                    //Loại bỏ bàn phím khi bấm ra ngoài: never, always, handled 
                    //never: (mặc định) nhấn bên ngoài bàn phím sẽ bị loại bỏ, các thành phần con không được gọi
                    //always: bàn phím sẽ không tắt và chế độ xem cuộn không bắt được, nhưng các thành phần con được gọi
                    //handled: bàn phím sẽ bị loại bỏ khi bấm ra ngoài, các thành phần con được gọiÏ
                    keyboardShouldPersistTaps='never'
                    //Xác định width và height của ScrollView
                    onContentSizeChange={(w, h) => this.setState({ heightContent: h })}
                    //Function: được gọi khi cuộn động lượng bắt đầu (cuộn xảy ra khi ScrollView lướt đến điểm dừng)
                    // onMomentumScrollBegin={this.onReloading}
                    //Function: được gọi khi cuộn động lượng kết thúc (cuộn xảy ra khi ScrollView lướt đến điểm dừng)
                    // onMomentumScrollEnd={this.onReloading}
                    //Function: được gọi khi kéo ScrollView 
                    // onScroll={this.onReloading}
                    //Function: được gọi khi bắt đầù kéo ScrollView
                    // onScrollBeginDrag={this.onReloading}
                    //Function: được gọi khi kết thúc kéo ScrollView
                    // onScrollEndDrag={this.onReloading}
                    //Khi đúng, chế đố xem cuộn dừng trên bội sô của kích thước của chế độ xem khi cuộn.
                    //Điều này có thể sử dụng cho phân trang ngang. Giá trị mặc đinh là false. (BOOL)
                    //*Lưu ý: Phân trang dọc không được hỗ trợ trên Android 
                    // pagingEnabled={true}
                    //Kéo để làm mới cho ScrollView, chỉ hoạt động ScrollView dọc 
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefreshing}
                            title='Reload'
                        />
                    }
                    //Khi đúng, các khung hình con ngoài màn hình( có overflow giá trị là hidden ) sẽ bị xóa khỏi giám sát sao luu gốc
                    //của chúng khi tắt màn hình. Điều này có thể cải thiện hiệu suất cuộn trên danh sách dài. Giá trị mặc định 'true'
                    removeClippedSubviews={true}
                    //Khi sai, chế độ xem không thể được cuộn qua tương tác cảm ứng. Giá trị mặc định là true.
                    //*Lưu ý: chế độ xem luôn có thể được cuộn bằng cách gọi 'scrollTo'
                    scrollEnabled={true}
                    //Khi đúng, hiển thị một chỉ báo cuộn ngang. Giá trị mặc định là  'true'
                    showsHorizontalScrollIndicator={false}
                    //Khi đúng, hiển thị một chỉ báo cuộn dọc. Giá trị mặc định là  'true'
                    showsVerticalScrollIndicator={false}

                    stickyHeaderIndices={[0, 4]}
                >
                    <Header
                        leftIcon={ICON_LEFT}
                        rightIcon={ICON_RIGHT}
                        {...this.props}
                    />
                    <CenterComponent />
                    <View style={styles.btnReload}>
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
                    {/* <View style={styles.heightPage}>
                        <Text>
                            {this.state.heightContent}
                        </Text>
                    </View> */}
                    <TouchableOpacity
                        style={styles.btnReload}
                        onPress={this.onReloading}
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
        // marginTop: 20,
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
    },
    inputText: {
        height: 35,
        width: 240,
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingHorizontal: 12,
    },
    heightPage: {
        width: 100,
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 100,
        left: 200
    }
})