import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import mycolors from "../utils/mycolors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication } from "./../../Firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [userCredentials, setuserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const nav = useNavigation(); 
  const userAccount = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.replace("Home");
        Alert.alert("User signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          Alert.alert("No user found with this email!");
        }

        if (error.code === "auth/wrong-password") {
          Alert.alert("Incorrect password!");
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mycolors.primary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 0 }}>
        <Image
          style={{ height: 200, width: 200, alignSelf: "center" }}
          source={require("../assets/newlogo.png")}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: mycolors.third,
              fontSize: 24,
              fontWeight: "500",
              marginTop: 0,
            }}
          >
            Log In
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            Enter your email and password
          </Text>

          {/* for email */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
          {/* for Password */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setuserCredentials({ ...userCredentials, password: val });
              }}
              secureTextEntry={isVisible}
              maxLength={8}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,
                marginTop: 15,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setIsVisible(!isVisible);
              }}
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </View>
          <Text 
          onPress={() => {
            nav.navigate("ForgotPassword");
          }}
          style={{ marginTop: 20, textAlign: "right" }}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: "#5fc342",
              marginTop: 20,
              height: 70,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: mycolors.secondary,
                fontWeight: "500",
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#5fc342", fontWeight: "600" }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
