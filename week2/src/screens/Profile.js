import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import { Header, BottomTab, ImageScale } from "../components";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const imgData = [
  { id: 1, imgSource: require("../../assets/image1.png") },
  { id: 2, imgSource: require("../../assets/image2.png") },
  { id: 3, imgSource: require("../../assets/image3.png") },
  { id: 4, imgSource: require("../../assets/image4.png") },
  { id: 5, imgSource: require("../../assets/image5.png") },
  { id: 6, imgSource: require("../../assets/image6.png") },
  { id: 7, imgSource: require("../../assets/image7.png") },
  { id: 8, imgSource: require("../../assets/image8.png") },
  { id: 9, imgSource: require("../../assets/image9.png") }
];

const viewWidth = Dimensions.get("window").width;

export class Profile extends PureComponent {
  /**
   * @desc get image data with odd id if isLeft is true and even id when the isleft is false.
   * @param bool isLeft
   * @return array of object in imgData
   */
  _getData = isLeft => imgData.filter(item => (item.id % 2 == 0) != isLeft);

  _onPressFollow = () => alert("followed");
  _onPressSend = () => alert("message sended");
  _renderInfoSession = () => (
    <View style={styles.infoSession}>
      <Image
        source={{
          uri:
            "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/17352542_757215274426963_391285369794660711_n.jpg?_nc_cat=100&_nc_oc=AQne4toeIYw8EO1JfQ3DxnpvoWw8-0-WiGxDAio_J93K3McAsO8hRvkCjaEmEEPt5s7FCdawRxpdiQXXj9YlXA3L&_nc_ht=scontent.fsgn5-5.fna&oh=4def84ed20bc1338cdc099890aeeacfe&oe=5DB33F66"
        }}
        style={styles.avatar}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.nameText}>Khanh Tran</Text>
        <Text style={styles.jobText}>Developer</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            onPress={this._onPressFollow}
            style={[styles.shallowBtn, styles.followBtn]}
          >
            <Text style={styles.followBtnTittle}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressSend}
            style={[styles.shallowBtn, styles.sentBtn]}
          >
            <Ionicons name="ios-send" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  _renderCountSession = () => (
    <View style={styles.countSession}>
      <View style={styles.countWrapper}>
        <Text style={styles.countNumber}>210</Text>
        <Text style={styles.countTitle}>Photos</Text>
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.countNumber}>15k</Text>
        <Text style={styles.countTitle}>Followers</Text>
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.countNumber}>605</Text>
        <Text style={styles.countTitle}>Following</Text>
      </View>
    </View>
  );

  /**
   * @desc navigate to ImageDetail to show image
   * @param object item - object in imgData
   */
  _onOpenImage = item => () => {
    this.props.navigation.navigate("ImageDetail", {
      item
    });
  };
  _renderImage = item => (
    <TouchableOpacity
      onPress={this._onOpenImage(item)}
      style={styles.imgWrapper}
      key={item.id}
    >
      <ImageScale source={item.imgSource} width={viewWidth * 0.4} />
    </TouchableOpacity>
  );
  _renderImageSession = () => (
    <ScrollView
      contentContainerStyle={styles.imgSession}
      showsVerticalScrollIndicator={false}
    >
      <View>{this._getData(true).map(this._renderImage)}</View>
      <View>{this._getData(false).map(this._renderImage)}</View>
    </ScrollView>
  );
  render() {
    return (
      <View style={styles.container}>
        <Header
          color="gray"
          transparent={false}
          onPressBack={() => alert("Press back")}
          onPressFilter={() => alert("Press Filter")}
        />
        {this._renderInfoSession()}
        {this._renderCountSession()}
        {this._renderImageSession()}
        <BottomTab />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between"
  },
  infoSession: {
    flexDirection: "row",
    marginVertical: 25,
    marginHorizontal: 30
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60
  },
  infoWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    marginLeft: 25
  },
  nameText: {
    color: "black",
    fontSize: 19,
    fontWeight: "bold"
  },
  profileJob: {
    color: "gray"
  },
  btnWrapper: {
    marginTop: 15,
    flexDirection: "row"
  },
  shallowBtn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11
  },
  followBtn: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FOLLOW_COLOR
  },
  followBtnTittle: { color: "white", fontSize: 16 },
  sentBtn: {
    marginLeft: 10,
    width: 55,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SEND_MESSAGE_COLOR
  },
  countSession: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
    marginHorizontal: 30
  },
  countWrapper: { alignItems: "center" },
  countNumber: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  },
  countTitle: {
    color: "gray"
  },
  imgSession: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30
  },
  imgWrapper: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: viewWidth * 0.034
  }
});

export default Profile;
