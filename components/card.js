import { TouchableWithoutFeedback, View, Image, Text } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function Card({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-3xl" source={item.image}></Image>
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
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
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height="15" width="15" stroke="gray" />
            <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
