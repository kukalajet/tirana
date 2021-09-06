import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import {
  HomeScreen,
  PropertyScreen,
  ProfileScreen,
  SearchScreen,
  ListScreen,
} from "./src/screens";
import { RootBottomTab, RootStack } from "./src/navigations";

const Root = () => {
  return (
    <RootBottomTab.Navigator>
      <RootBottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="whatshot" color={color} size={size} />
          ),
        }}
      />
      <RootBottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <RootBottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </RootBottomTab.Navigator>
  );
};

const App = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <BottomSheetModalProvider>
        <RootStack.Navigator initialRouteName="Root">
          <RootStack.Screen name="Root" component={Root} />
          <RootStack.Screen
            name="Property"
            component={PropertyScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="List" component={ListScreen} />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  </NativeBaseProvider>
);

export default App;
