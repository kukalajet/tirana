import React from "react";
import { Box, Text } from "native-base";
import { usePropertyStore } from "../../stores";

const FeaturesTab = () => {
  const property = usePropertyStore((state) => state.property);

  return (
    <Box flex={1} justifyContent="center">
      <Text>Features</Text>
      <Text>{property?.address}</Text>
    </Box>
  );
};

export default FeaturesTab;
