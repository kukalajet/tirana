import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootBottomTabParams = {
  Home: {} | undefined;
  Search: {} | undefined;
  Profile: {} | undefined;
};

const RootBottomTab = createBottomTabNavigator<RootBottomTabParams>();

export default RootBottomTab;
