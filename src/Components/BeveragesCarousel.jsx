import { View, FlatList, Image } from "react-native";
import React from "react";
import { Beverages } from "../utils/Beverages"; // Ensure this path is correct
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const BeveragesCarousel = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Beverages}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 2,
              borderColor: "#e3e3e3",
              height: responsiveHeight(20),
              width: responsiveWidth(50),
              marginRight: 15,
              marginTop:15,
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
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default BeveragesCarousel;
