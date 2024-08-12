import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import DropBox from "../Components/DropBox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import mycolors from "../utils/mycolors";

const Details = ({ route }) => {
  const dispatch = useDispatch();
  storeData = useSelector((state) => state.CartSlice);

  
  const productData = route.params.main;
  const { name, quant, price, img } = productData;
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }}>
      {/* 1st Box */}
      <View>
        <Image
          style={{
            height: 300,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          source={{ uri: img }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            position: "absolute",
            width: "100%",
          }}
        >
          <Ionicons
            onPress={() => nav.goBack()}
            name="chevron-back"
            size={28}
            color="grey"
          />
          <Octicons name="share" size={28} color="grey" />
        </View>
      </View>
      {/* 2nd Box */}
      <View
        style={{ paddingHorizontal: 10, backgroundColor: "white", flex: 1 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <MaterialCommunityIcons name="heart-outline" size={28} color="grey" />
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "grey",
            fontWeight: "500",
            marginTop: 5,
          }}
        >
          {quant}, Price
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: "black",
            fontWeight: "500",
            marginTop: 25,
          }}
        >
          ₹{price}
        </Text>
        <DropBox />
        <View
          style={{
            flex: 0.9,
            justifyContent: "flex-end",
          }}
        >
          {storeData.some((value) => value.name == productData.name) ? (
            <TouchableOpacity
            disabled = {true}
              activeOpacity={0.7}
              style={{
                marginTop: 10,
                backgroundColor:"#e3e3e3",
                height: 70,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 19,
                  color: "black",
                  fontWeight: "500",
                }}
              >
                Added to Cart
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(productData));
                nav.navigate("Cart");
              }}
              activeOpacity={0.7}
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
                Add To Basket
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
