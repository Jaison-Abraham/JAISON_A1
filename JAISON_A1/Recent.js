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

const Recents = () => {
  return (
    <View style={styles.plContainer}>
      

      <TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>Pop Mix</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>

<TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>Hot Hits</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>

    
   <TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>Up Beat Mix</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>


       <TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>Daily Wellness</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>Hip Hop</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container}>
        <ImageBackground
          style={[styles.imageStyle, {flex:2,
            
          }]}
          source={require("./assets/playlist.jpg")}>
        <Text style={styles.text}>80's Hard Rock</Text>
        </ImageBackground>
        <View  style={{flexDirection:"row",
            justifyContent:"space-between",
            gap:13,
            backgroundColor:"grey"}}>
            <Text style={{color:"white"}}>PlayList</Text>
            <Text  style={{color:"white"}}>USER 1</Text>
        </View>
      </TouchableOpacity>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width:"30%",
    height: 110,
    justifyContent: "center",
    
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  imageStyle: {
    height:100,
    width :110,
    resizeMode: "",
  },
  plContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap:18
  },
  text: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
});

export default Recents;
