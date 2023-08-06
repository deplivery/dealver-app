import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { categories } from "../constants";
import React, { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, idx) => {
          const isActive = activeCategory?.id === category.id;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={idx} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`rounded-full p-1 shadow-md ${btnClass}`}
                onPress={() => setActiveCategory(category)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                ></Image>
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
