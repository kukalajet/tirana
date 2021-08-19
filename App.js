"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var screens_1 = require("./src/screens");
var navigations_1 = require("./src/navigations");
var bottom_sheet_1 = require("@gorhom/bottom-sheet");
var Root = function () {
    return (<navigations_1.RootBottomTab.Navigator>
      <navigations_1.RootBottomTab.Screen name="Home" component={screens_1.HomeScreen}/>
      <navigations_1.RootBottomTab.Screen name="Search" component={screens_1.SearchScreen}/>
      <navigations_1.RootBottomTab.Screen name="Profile" component={screens_1.ProfileScreen}/>
    </navigations_1.RootBottomTab.Navigator>);
};
var App = function () { return (<native_1.NavigationContainer>
    <bottom_sheet_1.BottomSheetModalProvider>
      <navigations_1.RootStack.Navigator initialRouteName="Root">
        <navigations_1.RootStack.Screen name="Root" component={Root}/>
        <navigations_1.RootStack.Screen name="Property" component={screens_1.PropertyScreen} options={{ headerShown: false }}/>
        <navigations_1.RootStack.Screen name="List" component={screens_1.ListScreen}/>
      </navigations_1.RootStack.Navigator>
    </bottom_sheet_1.BottomSheetModalProvider>
  </native_1.NavigationContainer>); };
exports["default"] = App;
