import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigations/RootStack";

type PropertyScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  "Property"
>;
type PropertyScreenProps = { navigation: PropertyScreenNavigationProp };

const PropertyScreen = ({ navigation }: PropertyScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TEST</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PropertyScreen;
