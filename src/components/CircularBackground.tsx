import React from "react";
import { StyleProp } from "react-native";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactElement;
  style?: StyleProp<any>;
};

const CircularWrapper = ({ children, style }: Props) => {
  const containerStyles = StyleSheet.compose(styles.container, style);
  return <View style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1237E4",
    borderRadius: 20,
  },
});

export default CircularWrapper;
