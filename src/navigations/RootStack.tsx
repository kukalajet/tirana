import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParams = {
  Root: {} | undefined;
  Listing: {} | undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

export default RootStack;
