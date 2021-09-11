import React from "react";
import { Box, Text } from "native-base";
import { usePropertyStore } from "../../stores";

const OverviewTab = () => {
  const property = usePropertyStore((state) => state.property);

  return (
    <Box flex={1}>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
      <Text>Overview</Text>
      <Text>{property?.id}</Text>
    </Box>
  );
};

export default OverviewTab;
