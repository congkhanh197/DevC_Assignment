import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const imgData = [
  { id: 1, imgSource: require("./assets/image1.png") },
  { id: 2, imgSource: require("./assets/image2.png") },
  { id: 3, imgSource: require("./assets/image3.png") },
  { id: 4, imgSource: require("./assets/image4.png") },
  { id: 5, imgSource: require("./assets/image5.png") },
  { id: 6, imgSource: require("./assets/image6.png") },
  { id: 7, imgSource: require("./assets/image7.png") },
  { id: 8, imgSource: require("./assets/image8.png") },
  { id: 9, imgSource: require("./assets/image9.png") }
];

const viewWidth = Dimensions.get("window").width;

export class Profile extends PureComponent {
  _bindData = isLeft => imgData.filter(item => (item.id % 2 == 0) != isLeft);
  _getHeightImg = (img, newWidth) => {
    const imgProps = Image.resolveAssetSource(img);
    return (newWidth * imgProps.height) / imgProps.width;
  };
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
      <Image
        source={item.imgSource}
        style={[
          {
            height: this._getHeightImg(item.imgSource, viewWidth * 0.4)
          },
          styles.image
        ]}
      />
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBtnWrapper}>
            <Ionicons name="md-arrow-back" color="gray" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtnWrapper}>
            <Entypo name="dots-three-horizontal" color="gray" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileWrapper}>
          <Image
            source={{
              uri:
                "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/17352542_757215274426963_391285369794660711_n.jpg?_nc_cat=100&_nc_oc=AQne4toeIYw8EO1JfQ3DxnpvoWw8-0-WiGxDAio_J93K3McAsO8hRvkCjaEmEEPt5s7FCdawRxpdiQXXj9YlXA3L&_nc_ht=scontent.fsgn5-5.fna&oh=4def84ed20bc1338cdc099890aeeacfe&oe=5DB33F66"
            }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileInfor}>
            <Text style={styles.profileName}>Khanh Tran</Text>
            <Text style={styles.profileJob}>Developer</Text>
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                onPress={() => {
                  alert("followed");
                }}
                style={[styles.shallowBtn, styles.followBtn]}
              >
                <Text style={styles.followBtnTittle}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("message sended");
                }}
                style={[styles.shallowBtn, styles.sentBtn]}
              >
                <Ionicons name="ios-send" color="white" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
        <ScrollView
          contentContainerStyle={styles.imgSession}
          showsVerticalScrollIndicator={false}
        >
          <View>{this._bindData(true).map(this._renderImage)}</View>
          <View>{this._bindData(false).map(this._renderImage)}</View>
        </ScrollView>
        <View style={styles.bottomTab}>
          <AntDesign name="home" color="gray" size={28} />
          <Ionicons name="ios-add-circle-outline" color="gray" size={30} />
          <EvilIcons name="user" color="gray" size={38} />
        </View>
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
  header: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  headerBtnWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  profileWrapper: {
    flexDirection: "row",
    marginVertical: 25,
    marginHorizontal: 30
  },
  profileAvatar: {
    width: 110,
    height: 110,
    borderRadius: 60
  },
  profileInfor: {
    flex: 1,
    justifyContent: "space-evenly",
    marginLeft: 25
  },
  profileName: {
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
    marginBottom: viewWidth * 0.035
  },
  image: {
    width: viewWidth * 0.4,
    resizeMode: "contain"
  },
  bottomTab: {
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default Profile;
