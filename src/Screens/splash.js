import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { mycolors } from "./../utils/mycolors";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.replace('Signup');
    }, 3000); 
  }, []);

  return (
    <View
      style={{
        backgroundColor: mycolors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" />
      <View>
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 300, height: 300 }} 
        />
      </View>
    </View>
  );
};

export default Splash;
