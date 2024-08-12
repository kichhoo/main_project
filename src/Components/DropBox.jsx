import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { dropdown } from "../utils/Data";
import { FontAwesome } from "@expo/vector-icons";
import mycolors from "../utils/mycolors";
import { useNavigation } from "@react-navigation/native";

const DropBox = () => {
  const [myIndex, setMyIndex] = useState();
  const [toggle, settoggle] = useState();
  const nav = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={dropdown}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setMyIndex(index);
                settoggle(!toggle);
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 2,
                borderBottomColor: "#e3e3e3",
                marginBottom: 10,
                paddingVertical: 20,
              }}
            >
              <Text>{item.title}</Text>
              <FontAwesome
                name={
                  myIndex === index && toggle ? "angle-down" : "angle-right"
                }
                size={20}
                color="grey"
              />
            </TouchableOpacity>
            {myIndex === index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default DropBox;
