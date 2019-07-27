import React, { PureComponent } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { Header, BottomTab, ImageScale } from "../components";

const viewWidth = Dimensions.get("window").width;
const FOLLOW_COLOR = "rgb(71,113,246)";
const hashtag = ["#photography", "#sea", "#car", "#DevC", "#facebook", "#CoderSchool"];

export class ImageDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.openItem = props.navigation.getParam("item", null);
    this.state = {
      isLike: false
    };
  }
  _getHeightImg = (img, newWidth) => {
    const imgProps = Image.resolveAssetSource(img);
    return (newWidth * imgProps.height) / imgProps.width;
  };
  _onPressLike = () => this.setState({ isLike: !this.state.isLike });
  _onPressDownload = () => {
    alert("Press download");
  };
  _renderImage = () => (
    <View style={styles.imgWrapper}>
      <ImageScale source={this.openItem.imgSource} width={viewWidth} />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <Header
          color="white"
          transparent={true}
          onPressBack={() => this.props.navigation.navigate("Profile")}
          onPressFilter={() => alert("Press filter")}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {this._renderImage()}
          <View style={styles.inforWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.imgName}>Eiffel tower</Text>
              <View style={styles.addressWrapper}>
                <Ionicons name="ios-pin" color="gray" size={25} />
                <Text style={styles.textAddress}>Paris, Franch</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this._onPressDownload}
              style={[styles.shallowBtn, styles.btnDownload]}
            >
              <Ionicons name="ios-cloud-download" color="white" size={30} />
            </TouchableOpacity>
          </View>

          <Text style={styles.textDetail}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <View style={styles.tagSession}>
            {hashtag.map(item => (
              <Text key={item} style={styles.tagTitle}>
                {item}
              </Text>
            ))}
          </View>
          <View style={styles.reactSession}>
            <View style={styles.reactWrapper}>
              <TouchableOpacity onPress={this._onPressLike}>
                <Ionicons
                  name="ios-heart"
                  size={30}
                  color={this.state.isLike ? "red" : "gray"}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ios-chatbubbles" size={30} color="gray" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="ios-bookmark" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  scrollContainer: { marginBottom: 24 },
  inforWrapper: {
    flexDirection: "row",
    margin: 30
  },
  textWrapper: { flex: 1, justifyContent: "space-evenly" },
  imgName: { fontWeight: "bold", fontSize: 20 },
  addressWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnDownload: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderTopLeftRadius: 10,
    backgroundColor: FOLLOW_COLOR
  },
  textAddress: { marginLeft: 10, color: "lightgray" },
  textDetail: { marginHorizontal: 30 },
  tagSession: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 10,
    flexWrap: "wrap"
  },
  tagTitle: {
    margin: 3,
    paddingVertical: 5,
    borderRadius: 20,
    color: "gray",
    backgroundColor: "lightgray",
    paddingHorizontal: 10
  },
  reactSession: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  reactWrapper: {
    flexDirection: "row",
    width: 68,
    justifyContent: "space-between"
  },
  imgWrapper: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden"
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
  }
});

export default ImageDetail;
