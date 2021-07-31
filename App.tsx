import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  ListingScreen,
  ProfileScreen,
  SearchScreen,
} from "./src/screens";
import { RootBottomTab, RootStack } from "./src/navigations";

const Root = () => {
  return (
    <RootBottomTab.Navigator>
      <RootBottomTab.Screen name="Home" component={HomeScreen} />
      <RootBottomTab.Screen name="Search" component={SearchScreen} />
      <RootBottomTab.Screen name="Profile" component={ProfileScreen} />
    </RootBottomTab.Navigator>
  );
};

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Root">
      <RootStack.Screen name="Root" component={Root} />
      <RootStack.Screen name="Listing" component={ListingScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
