import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, []);
  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image}></Image>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft
              height="20"
              width="20"
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
          <View
            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
            className="bg-white -mt-12 pt-6"
          >
            <View className="px-5">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <Image
                    source={require("../assets/images/fullStar.png")}
                    className="h-4 w-4"
                  ></Image>
                  {/* 테크닉!!! 텍스트는 텍스트 끼리 묶어서 관리할수 있음! */}
                  <Text className="text-xs">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700">
                      ({item.reviews} review) *{" "}
                      <Text className="font-semibold">{item.category}</Text>
                    </Text>
                  </Text>
                  <Icon.MapPin height="15" width="15" stroke="gray" />
                  <Text className="text-gray-700 text-xs">
                    Nearby {item.address}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2">{item.description}</Text>
            </View>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, idx) => {
            return <DishRow item={{ ...dish }} key={idx}></DishRow>;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
