import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigations/RootStack";
import { ChipPicker } from "../components";

type PropertyScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  "Property"
>;
type PropertyScreenProps = { navigation: PropertyScreenNavigationProp };

const PropertyScreen = ({ navigation }: PropertyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ChipPicker data={[]} onConfirm={() => null} onDismiss={() => null} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PropertyScreen;
