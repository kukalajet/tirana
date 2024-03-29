import { createStackNavigator } from "@react-navigation/stack";
import { UseStore } from "zustand";
import { ListCommonType } from "../models";

export type RootStackParams = {
  Root: {} | undefined;
  Property: { id: number };
  List: { useStore: UseStore<ListCommonType> };
};

const RootStack = createStackNavigator<RootStackParams>();

export default RootStack;
