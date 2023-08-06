import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { featured } from "../constants/index";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";

export default function CartScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-white flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">
            {restaurant.address}
          </Text>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className="flex-row px-4 items-center"
        >
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className="w-20 h-20 rounded-full"
          ></Image>
          <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text
              className="font-bold"
              style={{ color: themeColors.bgColor(1) }}
            >
              change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish) => (
          <View key={dish.id} className="flex-row px-4 items-center">
            <Image
              source={dish.image}
              className="w-20 h-20 rounded-full"
            ></Image>
            <View className="flex-1 pl-4">
              <Text className="font-bold">{dish.name}</Text>
              <Text className="text-gray-500">{dish.description}</Text>
              <Text className="font-bold">${dish.price}</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity>
                <Text
                  className="font-bold"
                  style={{ color: themeColors.bgColor(1) }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text className="px-2">1</Text>
              <TouchableOpacity>
                <Text
                  className="font-bold"
                  style={{ color: themeColors.bgColor(1) }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* {totals} */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Subtotal</Text>
          <Text>$30</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Delivery Fee</Text>
          <Text>$30</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Order Total</Text>
          <Text>$30</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="rounded-full p-3"
            onPress={() => navigation.navigate("OrderPreparing")}
          >
            <Text className="text-center text-white font-bold text-lg">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
