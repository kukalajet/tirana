import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../navigations/RootStack";
import { useCounterStore } from "../stores";

type PropertyScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  "Property"
>;
type PropertyScreenProps = { navigation: PropertyScreenNavigationProp };

const PropertyScreen = ({ navigation }: PropertyScreenProps) => {
  const count = useCounterStore((state) => state.count);

  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Property Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={{ paddingVertical: 16 }}>
        <Text>Count: {count}</Text>
        <Button title="Increase by 1" onPress={() => increase(1)} />
        <Button title="Decrease by 1" onPress={() => decrease(1)} />
        <Button title="Reset the count" onPress={reset} />
      </View>
    </View>
  );
};

export default PropertyScreen;
