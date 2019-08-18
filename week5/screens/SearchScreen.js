import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  Alert
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { getArticleSearch } from "../utils/Api";
import { renderArticleItem } from "../utils";
export default function SearchScreen() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [hasErrored, setHasApiError] = useState(false);
  const [delayCallApi, setDelayCallApi] = useState(false);

  const getSearchResult = async () => {
    if (delayCallApi || text.length === 0) return;
    try {
      setDelayCallApi(true);
      const response = await getArticleSearch(text, 1);
      const jsonData = await response.json();
      setArticles(jsonData.articles);
      setTotalResult(jsonData.totalResults);
    } catch (error) {
      setHasApiError(error.message);
    }
    setLoading(false);
    setTimeout(() => {
      setDelayCallApi(false);
    }, 1000);
  };

  const onChangeText = text => {
    setText(text);
  };
  const onSubmitEditing = () => {
    setLoading(true);
    setTotalResult(0);
    setArticles([]);
    getSearchResult();
  };

  if (hasErrored) {
    Alert.alert(
      "Error",
      hasErrored,
      [
        {
          text: "Cancel",
          onPress: () => setHasApiError(false),
          style: "cancel"
        },
        {
          text: "Retry",
          onPress: () => {
            setHasApiError(false);
            onSubmitEditing();
          }
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          editable={!loading}
          style={styles.textInput}
          autoFocus={true}
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity onPress={getSearchResult}>
          <Ionicons
            name="ios-search"
            size={30}
            style={styles.searchIcon}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <Text style={styles.textTotalResult}>
            Total Results: {totalResult}
          </Text>
          {articles && articles.length !== 0 ? (
            <FlatList
              data={articles}
              renderItem={renderArticleItem}
              keyExtractor={item => item.title}
              onEndReachedThreshold={2}
              onEndReached={getSearchResult}
              ListFooterComponent={
                <ActivityIndicator size="large" loading={loading} />
              }
            />
          ) : (
            <View />
          )}
        </View>
      )}
    </View>
  );
}

SearchScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10
  },
  textInput: {
    height: 40,
    flex: 1
  },
  searchIcon: { marginLeft: 5 },
  textTotalResult: { marginBottom: 5, textAlign: "center", fontSize: 17 }
});
