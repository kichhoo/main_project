import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mycolors from "../utils/mycolors";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  const keyExtractor = (item) => item.name; // Ensure the `name` is unique or use another unique property

  let amount = 0;
  storeData.forEach(element => {
    amount += element.price;
  });

  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d7f79e" }}>
      <View style={{ backgroundColor: mycolors.primary, flex: 1 }}>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: mycolors.primary,
            borderBottomWidth: 2,
            borderBottomColor: "#e3e3e3",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "grey",
            }}
          >
            Review Basket
          </Text>
        </View>

        <View style={{flex: 0.98,}}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={storeData}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 8,
                height: responsiveHeight(18),
                borderBottomWidth: 2,
                borderColor: "#e3e3e3",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Image */}
              <View
                style={{
                  flex: 0.35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "cover" }}
                  source={{ uri: item.img }}
                />
              </View>
              {/* Details */}
              <View
                style={{
                  flex: 0.65,
                  paddingHorizontal: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginTop: 20 }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    <AntDesign name="close" size={25} color="grey" />
                  </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10, fontSize: 18 }}>
                  {item.quant}, Price
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 17,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="minuscircleo"
                      size={24}
                      color="grey"
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />
                    <Text style={{ fontSize: 24 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color="#5fc342"
                      onPress={() => {
                        if(item.quantity == 5){

                        }else{
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>
                  <Text style={{ fontSize: 25 }}>₹{item.quantity * item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
        </View>

          <TouchableOpacity
            onPress={() => {
              nav.navigate('OrderPlaced');
            }}
            activeOpacity={0.7}
            style={{
              backgroundColor: "#5fc342",
              marginHorizontal:10,
              height: responsiveHeight(10),
              width: responsiveWidth(94),
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: mycolors.secondary, 
                fontWeight: "500",
              }}
            >
              Checkout
            </Text>
            <Text style={{fontSize:15,fontWeight:'600', color:"#e3e3e3"}}>Total: ₹{amount}</Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
