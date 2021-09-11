import React from "react";
import { Box, Heading, Text, VStack } from "native-base";

type Props = {
  title: string;
  value: string;
};

const InfoCard = ({ title, value }: Props) => (
  <Box m={4} bgColor="gray.100">
    <VStack space={2} p={4}>
      <Heading size="sm">{title}</Heading>
      <Text>{value}</Text>
    </VStack>
  </Box>
);

export default InfoCard;
