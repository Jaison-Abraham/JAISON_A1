import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";


const Header = () => {
  return (
    <View
      style={{
        height: "5%",
        flexDirection: "row",
        alignItems: "center",
       paddingLeft:10,
        gap: 15,
      }}
    >

        <Image
        style={styles.imageStyle}
        source={require("./assets/logo.png")}
      />
<Pressable 
  style={({pressed}) => [
    {backgroundColor: 'green', padding: 10, borderRadius: 15},
    pressed && {opacity: 0.5}
  ]}>
  <Text style={{color: 'white', textAlign: 'center'}}>All</Text>
</Pressable>
<Pressable 
  style={({pressed}) => [
    {backgroundColor: 'grey', padding: 10, borderRadius: 15},
    pressed && {opacity: 0.5}
  ]}>
  <Text style={{color: 'white', textAlign: 'center'}}>Music</Text>
</Pressable>
<Pressable 
  style={({pressed}) => [
    {backgroundColor: 'grey', padding: 10, borderRadius: 15},
    pressed && {opacity: 0.5}
  ]}>
  <Text style={{color: 'white', textAlign: 'center'}}>Podcast</Text>
</Pressable>
<Pressable 
  style={({pressed}) => [
    {backgroundColor: 'grey', padding: 10, borderRadius: 15},
    pressed && {opacity: 0.5}
  ]}>
  <Text style={{color: 'white', textAlign: 'center'}}>AudioBooks</Text>
</Pressable>
       
     
     
    </View>
  );
};


  const styles = StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 20,
   resizeModede:"scale",
  },
});
export default Header;
