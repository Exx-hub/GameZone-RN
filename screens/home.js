import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home(props) {
  // or destructure {navigation}
  console.log(props);

  const pressHandler = () => {
    // props.navigation.push("ReviewDetails");
    props.navigation.navigate("ReviewDetails"); // does same thing with push
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review deets" onPress={pressHandler} />
    </View>
  );
}
