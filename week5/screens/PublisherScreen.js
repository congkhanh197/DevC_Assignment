import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { getPublisher } from "../utils/Api";

import { renderArticleItem } from "../utils";

import { filterForUniqueArticles, openUrl } from "../utils";

export default function SettingsScreen(props) {
  const [loading, setLoading] = useState(true);
  const [totalArticle, setTotalArticle] = useState(0);
  const [articles, setArticles] = useState([]);
  const [hasErrored, setHasApiError] = useState(false);
  const publisher = props.navigation.getParam("publisher", {});
  const [pageNumber, setPageNumber] = useState(1);
  const getData = async () => {
    try {
      const response = await getPublisher(publisher.id, pageNumber);
      const jsonData = await response.json();
      setTotalArticle(jsonData.totalResults);
      setPageNumber(pageNumber + 1);
      const newArticleList = filterForUniqueArticles(
        articles.concat(jsonData.articles)
      );
      setArticles(newArticleList);
    } catch (error) {
      setHasApiError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!publisher || hasErrored) {
    return (
      <View style={styles.container}>
        <Text>Error =(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{publisher.description}</Text>
      <Text style={styles.text}>{publisher.url}</Text>
      <Text>Total publishers: {totalArticle}</Text>
      {loading ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" loading={loading} />
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderArticleItem}
          keyExtractor={item => item.title}
          onEndReachedThreshold={2}
          onEndReached={getData}
          ListFooterComponent={
            <ActivityIndicator size="large" loading={loading} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 15
  },
  title: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold"
  },
  postContent: {
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  detailWrapper: { width: "90%" },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  }
});

SettingsScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("publisher", {}).name,
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  }
});
