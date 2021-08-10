import React, { useRef, useState } from "react";
import { ScrollView, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RootBottomTabParams, RootStackParams } from "../navigations";
import { makeStyles } from "../utils";
import { CompactHorizontalList, ModalPicker } from "../components";
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
  // const [open, setOpen] = useState<boolean>(false);
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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

      {/* <ModalPicker name="name" ref={bottomSheetModalRef}>
        <Text>HEY</Text>
      </ModalPicker> */}
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
