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
import { authentication, database } from "./../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [userCredentials, setuserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = userCredentials;

  const nav = useNavigation();

  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const userData = {
          name: name,
          email: email,
          id: userId,
        };
        setDoc(doc(database, "users", userId), userData)
          .then(() => {
            nav.navigate("Login");
            Alert.alert("User account created & signed in!");
          })
          .catch((error) => {
            Alert.alert("Error saving user data:", error.message);
            console.error("Error saving user data:", error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        } else {
          Alert.alert("Error creating user account:", error.message);
        }
        console.error("Error creating user account:", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mycolors.primary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 5 }}>
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
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            Enter your credentials to continue
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 30,
            }}
          >
            Username
          </Text>
          <TextInput
            maxLength={9}
            value={name}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, name: val });
            }}
            keyboardType="name-phone-pad"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
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
            numberOfLines={2}
            style={{
              marginTop: 10,
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              letterSpacing: 0.7,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            By continuing you agree to our Terms of Service and Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: "#5fc342",
              marginTop: 10,
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
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              marginTop:5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#5fc342", fontWeight: "600" }}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
