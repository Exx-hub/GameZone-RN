import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { AppLoading } from "expo"; --- check on this which one is best

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <Home />;
}

// this can be done too looks cleaner tbh

// return fontsLoaded ? (
//   <Home />
// ) : (
//   <AppLoading
//     startAsync={getFonts}
//     onFinish={() => setFontsLoaded(true)}
//     onError={console.warn}
//   />
// );

// FONTS
// 1) download font family from google fonts
// 2) select and transfer font files to assets folder under fonts dir
// 3) import * as Font from "expo-font"
// 4) create a function getFonts to load font files from assets
// 5) create a condition to load pages only if fonts are already loaded
//    if not yet loaded use AppLoading component to load fonts and change state
//    only then render whatever.
// use loaded fontfamily to styles on whatever component
