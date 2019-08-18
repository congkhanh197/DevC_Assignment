import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { getSources } from "../utils/Api";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen(props) {
  const [loading, setLoading] = useState(true);
  const [publishers, setPublishers] = useState([]);
  const [hasErrored, setHasApiError] = useState(false);
  const getSource = async () => {
    try {
      const response = await getSources();
      const jsonData = await response.json();
      setPublishers(jsonData.sources);
    } catch (error) {
      setHasApiError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getSource();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={loading} />
      </View>
    );
  }
  if (hasErrored) {
    return (
      <View style={styles.container}>
        <Text>Error =(</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Total publishers: {publishers.length}</Text>
      <FlatList
        data={publishers}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.postContent, styles.shadow]}
            onPress={() =>
              props.navigation.navigate("Publisher", { publisher: item })
            }
          >
            <View style={styles.detailWrapper}>
              <Text style={styles.title}>{item.name}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
              <Text style={{}}>{item.url}</Text>
            </View>
            <View>
              <Ionicons name="ios-arrow-forward" size={32} color="blue" />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
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

SettingsScreen.navigationOptions = {
  // title: "app.json"
  header: null
};
