import React from "react";
import { View, Text, Image } from "react-native";
import Brand from "../../assets/brand/brandGradient.png";

export function Home() {
  return (
    <View className="justify-center flex-1 bg-complement1 items-center gap-2">
      <Image className="w-28 h-28" source={Brand} />
      <Text className="text-3xl text-complement2 font-extrabold">Welcome</Text>
      <Text className="text-xl text-complement2 font-medium">
        My app exemplo NativeWind!
      </Text>
    </View>
  );
}
