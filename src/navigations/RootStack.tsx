import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParams = {
  Root: {} | undefined;
  Property: {} | undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

export default RootStack;
