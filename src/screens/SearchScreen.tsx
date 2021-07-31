import React from "react";
import { View } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { makeStyles } from "../utils";

type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParams, "Search">,
  StackNavigationProp<RootStackParams>
>;
type SearchScreenProps = { navigation: SearchScreenNavigationProp };

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const styles = useStyles();

  return <View style={styles.container}></View>;
};

type StylesProps = {};

const useStyles = makeStyles((props: StylesProps) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
}));

export default SearchScreen;
