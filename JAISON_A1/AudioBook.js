import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AudioBook = () => {
  return (
     <View style={styles.plContainer}>

          <TouchableOpacity style={styles.container}>
            <Image
              style={styles.imageStyle}
              source={require("./assets/images-2.jpeg")}
            />
            <View style={{
              backgroundColor:"grey",
              padding:10
            }}>
            <Text style = {{color:"#2E6F",fontWeight:"bold"}}>Included in Premium</Text>
            <Text style = {{color:"white",}}>Mastering Conversation</Text>
            <Text>Helen Stone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container}>
            <Image
              style={styles.imageStyle}
              source={require("./assets/images-2.jpeg")}
            />
            <View style={{
              backgroundColor:"grey",
              padding:10
            }}>
            <Text style = {{color:"#2E6F",fontWeight:"bold"}}>Included in Premium</Text>
            <Text style = {{color:"white",}}>Mastering Conversation</Text>
            <Text>Helen Stone</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <Image
              style={styles.imageStyle}
              source={require("./assets/images-2.jpeg")}
            />
            <View style={{
              backgroundColor:"grey",
              padding:10
            }}>
            <Text style = {{color:"#2E6F",fontWeight:"bold"}}>Included in Premium</Text>
            <Text style = {{color:"white",}}>Mastering Conversation</Text>
            <Text>Helen Stone</Text>
            </View>
          </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "col",

    width: "48%",
    borderRadius: 10,
    overflow: "hidden",
    gap: 10,
  },
  imageStyle: {
    resizeMode: "cover",
    width: "100%",
  },
  plContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap:10
  },
});

export default AudioBook;
