import { createStackNavigator } from "@react-navigation/stack";
import { UseStore } from "zustand";
import { ListCommonType } from "../stores";

export type RootStackParams = {
  Root: {} | undefined;
  Property: {} | undefined;
  List: { useStore: UseStore<ListCommonType> };
};

const RootStack = createStackNavigator<RootStackParams>();

export default RootStack;
