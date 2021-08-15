import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Modal } from "../components";
import { RootStackParams } from "../navigations/RootStack";

type PropertyScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  "Property"
>;
type PropertyScreenProps = { navigation: PropertyScreenNavigationProp };

const PropertyScreen = ({ navigation }: PropertyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Modal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PropertyScreen;
