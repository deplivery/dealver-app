import { TextInput, View, Text, ScrollView } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeatureRow from "../components/featureRow";
import { featured } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"></StatusBar>
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-black">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="식당검색" className="ml-2 flex-1"></TextInput>
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="18" width="18" stroke="gray" />
            <Text>서울시</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="25"
            width="25"
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />
        {/* featured */}
        <View className="mt-5">
          {[featured].map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
              ></FeatureRow>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
