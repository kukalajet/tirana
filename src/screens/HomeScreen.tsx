import React from "react";
import { ScrollView } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { makeStyles } from "../utils";
import { CompactHorizontalList } from "../components";
import {
  useNewPropertyStore,
  usePopularPropertyStore,
  useSuggestedPropertyStore,
} from "../stores";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParams, "Home">,
  StackNavigationProp<RootStackParams>
>;
type HomeScreenProps = { navigation: HomeScreenNavigationProp };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const styles = useStyles({ color: "white" });

  return (
    <ScrollView style={styles.container}>
      <CompactHorizontalList
        name="Popular for today"
        useStore={usePopularPropertyStore}
      />
      <CompactHorizontalList
        name="Just for you"
        useStore={useNewPropertyStore}
      />
      <CompactHorizontalList
        name="New buildings"
        useStore={useSuggestedPropertyStore}
      />
    </ScrollView>
  );
};

type StylesProps = {
  color: string;
};

const useStyles = makeStyles(({ color }: StylesProps) => ({
  container: {
    flex: 1,
  },
}));

export default HomeScreen;
