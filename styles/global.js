import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 3,
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
