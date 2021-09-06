import React from "react";
import { Box, useTheme } from "native-base";
import { ActivityIndicator } from "react-native";

type Props = {
  color?: any;
};

const LoadingIndicator = ({}: Props) => {
  const { colors } = useTheme();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator color={colors.black} />
    </Box>
  );
};

export default LoadingIndicator;
