import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import mycolors from "../utils/mycolors";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ProductsTitle } from "../Components/ProductsTitle";
import ProductsCarousel from "../Components/ProductsCarousel";
import BeveragesCarousel from "../Components/BeveragesCarousel";
import { fruits, vegetables } from "../utils/Data";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header Section */}
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          height: 100,
          backgroundColor: mycolors.primary,
          padding: 35,
        }}
      >
        <Image
          style={{
            width: 250,
            height: 100,
          }}
          source={require("../assets/newImg.png")} // Verify the image path
        />
      </View>

      {/* Info Section */}
      <View
        style={{
          height: 110,
          backgroundColor: mycolors.primary,
          paddingHorizontal: 12,
          paddingTop: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <MaterialCommunityIcons name="bike-fast" size={20} color="black" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: mycolors.third,
              marginLeft: 5,
            }}
          >
            Get it in 2 hrs
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: mycolors.third,
          }}
        >
          Infocity, Patia, Bhubaneswar-Cuttack
        </Text>

        <View
          style={{
            backgroundColor: "#e3e3e3",
            height: responsiveHeight(6),
            borderRadius: 9,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            paddingHorizontal: 10,
            gap: 10,
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="Search Products"
            style={{
              flex: 1,
              fontSize: 16,
            }}
          />
        </View>
      </View>


     <ScrollView>
      {/* Banner Section */}
      <View
        style={{
          backgroundColor: mycolors.secondary,
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            width: responsiveWidth(95),
            height: responsiveHeight(20),
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={{
            uri: "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: mycolors.secondary,
        }}
      >
        <ProductsTitle title={"Exclusive Offer"} />
        <ProductsCarousel data={vegetables}/>
        <ProductsTitle title={"Best Selling"} />
        <ProductsCarousel data={fruits}/>
        {/* Banner Section */}
        <View
          style={{
            backgroundColor: mycolors.secondary,
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              width: responsiveWidth(95),
              height: responsiveHeight(20),
              resizeMode: "contain",
              borderRadius: 20,
            }}
            source={{
              uri: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
            }}
          />
        </View>
        <ProductsTitle title={"Beverages"} />
        <BeveragesCarousel />
      </View>
     </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
