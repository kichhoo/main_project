import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import mycolors from "../utils/mycolors";
import { sendPasswordResetEmail } from "firebase/auth";
import { authentication } from "./../../Firebaseconfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    sendPasswordResetEmail(authentication, email)
      .then(() => {
        Alert.alert("Password reset email sent!");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          Alert.alert("No user found with this email!");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("Invalid email address!");
        } else {
          Alert.alert("Error:", error.message);
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mycolors.primary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 5 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: mycolors.third,
              fontSize: 24,
              fontWeight: "500",
              marginTop: 40,
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            Enter your email to reset your password
          </Text>

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
            onChangeText={(val) => setEmail(val)}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <TouchableOpacity
            onPress={handlePasswordReset}
            style={{
              backgroundColor: "#5fc342",
              marginTop: 20,
              padding: 15,
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
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
