import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-pbold text-center">
              Welcome to the app{' '}
              <Text className="text-secondary-200">Auro</Text>
            </Text>
            <Image
            source={images.path}
            className="w-[136px] h-[15px] align-bottom-1 -right-60"
            resizeMode="contain"
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
