import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { vegetables } from "../utils/Data";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/CartSlice";

export const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            style={{
              borderWidth: 2,
              borderColor: "#e3e3e3",
              height: responsiveHeight(35),
              width: responsiveWidth(50),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{
                height: responsiveHeight(17),
                width: responsiveWidth(47),
                marginTop: 10,
                alignSelf: "center",
              }}
              source={{ uri: item.img }}
            />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10 }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 10 }}>
                {item.quant}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontSize: 17,
                    fontWeight: "600",
                    marginTop: 5,
                  }}
                >
                  ₹ {item.price}
                </Text>
                {storeData.some((value) => value.name == item.name) ? (
                  <AntDesign
                    name="minussquare"
                    size={24}
                    color="green"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                ) : (
                  <AntDesign
                    name="plussquare"
                    size={24}
                    color="green"
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;
