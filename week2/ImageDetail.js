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
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
const viewWidth = Dimensions.get("window").width;
const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
export class ImageDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.openItem = props.navigation.getParam("item", null);
  }
  _getHeightImg = (img, newWidth) => {
    const imgProps = Image.resolveAssetSource(img);
    return (newWidth * imgProps.height) / imgProps.width;
  };
  _renderImage = () => (
    <View style={styles.imgWrapper}>
      <Image
        source={this.openItem.imgSource}
        style={[
          {
            height: this._getHeightImg(this.openItem.imgSource, viewWidth)
          },
          styles.image
        ]}
      />
    </View>
  );
  render() {
    console.log(this.openItem);
    return (
      <View style={styles.container}>
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
            <TouchableOpacity style={styles.btnDownload}>
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
            {["#photography", "#sea", "test", "tes1t", "tes2t", "test1"].map(
              item => (
                <Text key={item} style={styles.tagTitle}>
                  {item}
                </Text>
              )
            )}
          </View>
          <View style={styles.reactSession}>
            <View style={styles.reactWrapper}>
              <TouchableOpacity>
                <Ionicons name="ios-heart" size={30} color="gray" />
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
        <View style={styles.tabBottom}>
          <AntDesign name="home" color="gray" size={28} />
          <Ionicons name="ios-add-circle-outline" color="gray" size={30} />
          <EvilIcons name="user" color="gray" size={38} />
        </View>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.headerBtnWrapper}
          >
            <Ionicons name="md-arrow-back" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtnWrapper}>
            <Entypo name="dots-three-horizontal" color="white" size={30} />
          </TouchableOpacity>
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
  tabBottom: {
    paddingHorizontal: 30,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  header: {
    position: "absolute",
    width: "100%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  headerBtnWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  imgWrapper: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden"
  },
  image: {
    width: viewWidth,
    resizeMode: "contain"
  }
});

export default ImageDetail;
