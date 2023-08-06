import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import Card from "./card";

export default function FeatureRow({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-xl font-bold">{title}</Text>
          <Text className="text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((item, idx) => {
          return <Card item={item} key={idx} />;
        })}
      </ScrollView>
    </View>
  );
}
