import React from "react";
import { View } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { makeStyles } from "../utils";

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParams, "Profile">,
  StackNavigationProp<RootStackParams>
>;
type ProfileScreenProps = { navigation: ProfileScreenNavigationProp };

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const styles = useStyles();

  return <View style={styles.container}></View>;
};

type StylesProps = {};

const useStyles = makeStyles((props: StylesProps) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default ProfileScreen;
