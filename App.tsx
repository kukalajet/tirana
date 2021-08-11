import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  PropertyScreen,
  ProfileScreen,
  SearchScreen,
  ListScreen,
} from "./src/screens";
import { RootBottomTab, RootStack } from "./src/navigations";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
    <BottomSheetModalProvider>
      <RootStack.Navigator initialRouteName="Root">
        <RootStack.Screen name="Root" component={Root} />
        <RootStack.Screen name="Property" component={PropertyScreen} />
        <RootStack.Screen name="List" component={ListScreen} />
      </RootStack.Navigator>
    </BottomSheetModalProvider>
  </NavigationContainer>
);

export default App;
