import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

// configuring a component to a screen...figure out how to make header title not visible
const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

// creates a stack navigator and pass the screens you want in it
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
// this is the component you put in app.js and it has in it the screens you want to be navigated

// stack navigation.. create a stack and pass in the screens you want in the stack as
// an object
