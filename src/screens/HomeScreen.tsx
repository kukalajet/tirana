import React from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { useCounterStore } from "../stores";
import { makeStyles } from "../utils";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParams, "Home">,
  StackNavigationProp<RootStackParams>
>;
type HomeScreenProps = { navigation: HomeScreenNavigationProp };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const styles = useStyles({ color: "white" });

  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Listing"
        onPress={() => navigation.navigate("Listing")}
      />
      <Text>Count: {count}</Text>
      <Button title="Increase by 1" onPress={() => increase(1)} />
    </View>
  );
};

type StylesProps = {
  color: string;
};

const useStyles = makeStyles(({ color }: StylesProps) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
  },
}));

export default HomeScreen;
