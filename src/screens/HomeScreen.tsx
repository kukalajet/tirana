import React, { useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { usePopularPropertyStore } from "../stores";
import { makeStyles } from "../utils";
import { Status } from "../models";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParams, "Home">,
  StackNavigationProp<RootStackParams>
>;
type HomeScreenProps = { navigation: HomeScreenNavigationProp };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const styles = useStyles({ color: "white" });

  const status = usePopularPropertyStore((state) => state.status);
  console.log(`status: ${status === Status.Initial}`);
  const properties = usePopularPropertyStore((state) => state.properties);
  const fetchPopularProperties = usePopularPropertyStore(
    (state) => state.fetch
  );

  useEffect(() => {
    fetchPopularProperties();
  }, []);

  if (status === Status.Initial) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Property"
        onPress={() => navigation.navigate("Property")}
      />
      <Text>{JSON.stringify(properties)}</Text>
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
