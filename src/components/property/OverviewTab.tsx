import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Box } from "native-base";
import { usePropertyStore } from "../../stores";
import MapView from "../MapView";
import InfoCard from "../InfoCard";

const OverviewTab = () => {
  const property = usePropertyStore((state) => state.property);
  const description = property?.description;
  const coordinate = property?.coordinate;

  return (
    <Box flex={1} bgColor="coolGray.50" width={Dimensions.get("window").width}>
      <InfoCard title="Description" value={description!} />
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
