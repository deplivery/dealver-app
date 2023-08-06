import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  if (cartItems.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate("Cart")}
        className="flex-row justify-between items-center rounded-full px-4 py-2 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">23$</Text>
      </TouchableOpacity>
    </View>
  );
}
