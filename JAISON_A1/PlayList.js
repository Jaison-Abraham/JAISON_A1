import React from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PlayList = () => {
  return (
    <View style={styles.plContainer}>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Hot Hits Canada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Pop Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Hip-Hop Central</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>80s Hard Rock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>All About Country</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Upbeat Mix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Daily Wellness</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/note.png")}
        />
        <Text>Release Radar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    width: "48%",
    backgroundColor: "grey",
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  imageStyle: {
    height: 40,
    width: 40,
    resizeModede: "scale",
  },
  plContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap:10
  },
});

export default PlayList;
