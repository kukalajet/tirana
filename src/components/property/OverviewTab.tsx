import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Box, Text } from "native-base";
import { usePropertyStore } from "../../stores";
import MapView from "../MapView";

const OverviewTab = () => {
  const property = usePropertyStore((state) => state.property);
  const coordinate = property?.coordinate;

  return (
    <Box flex={1} width={Dimensions.get("window").width}>
      <MapView coordinate={coordinate!} style={styles.map} />
    </Box>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
  },
});

export default OverviewTab;
