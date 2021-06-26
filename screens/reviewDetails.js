import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.pop();
  };
  return (
    <View>
      <Text>Review Details Page</Text>
      <Button title="go back" onPress={pressHandler} />
    </View>
  );
}
