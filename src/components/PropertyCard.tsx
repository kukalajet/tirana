import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Box, Text, HStack, VStack, useTheme } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CompactProperty } from "../models";
import CircleBackgroundIcon from "./CircleBackgroundIcon";

type Props = {
  property: CompactProperty;
  isFullWidth?: boolean;
  onPress: () => void;
};

const HEIGHT = 224;
const WIDTH = 320;
const MARGIN = 16;

const PropertyCard = ({ property, isFullWidth, onPress }: Props) => {
  const { colors } = useTheme();

  const type = property.type;
  const address = property.address;
  const price = property.price;
  const status = property.status;
  const bedrooms = property.bedrooms;
  const bathrooms = property.bathrooms;
  const size = property.size;
  const imagePreviewUrl = property.previewImage;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box
        height={HEIGHT}
        width={!isFullWidth ? WIDTH : undefined}
        marginX={4}
        marginY={!isFullWidth ? undefined : 2}
        shadow={2}
        borderRadius={12}
        backgroundColor={"white"}
      >
        <Image
          style={styles.image}
          source={{
            uri: imagePreviewUrl,
          }}
        />
        <Box flex={2} paddingY={1} paddingX={2}>
          <VStack flex={1}>
            <HStack flex={1} alignItems="center">
              <MaterialCommunityIcons
                name="chess-queen"
                size={14}
                color={colors.yellow[600]}
              />
              <Text
                marginX={1}
                fontWeight={600}
                color="yellow.600"
                fontSize="sm"
              >
                {type}
              </Text>
            </HStack>
            <HStack flex={1.5} alignItems="center">
              <Text bold fontSize="xl">
                {price}
              </Text>
              {status === "For Rent" && (
                <Text color="gray.500" fontSize="lg">
                  /Month
                </Text>
              )}
            </HStack>
            <Box flex={1}>
              <Text color="gray.600" fontWeight={600} fontSize="sm">
                {address}
              </Text>
            </Box>
            <HStack
              flex={1.5}
              justifyContent="space-around"
              alignItems="center"
              paddingTop={1}
              paddingX={2}
            >
              <HStack space={2} alignItems="center">
                <CircleBackgroundIcon bg="dark.700">
                  <MaterialIcons
                    name="king-bed"
                    color={colors.dark[300]}
                    size={16}
                  />
                </CircleBackgroundIcon>
                <Text color="dark.300" fontWeight={700} fontSize="md">
                  {bedrooms}
                </Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CircleBackgroundIcon bg="dark.700">
                  <MaterialIcons
                    name="bathtub"
                    color={colors.dark[300]}
                    size={16}
                  />
                </CircleBackgroundIcon>
                <Text color="dark.300" fontWeight={700} fontSize="md">
                  {bathrooms}
                </Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CircleBackgroundIcon bg="dark.700">
                  <MaterialCommunityIcons
                    name="sofa"
                    color={colors.dark[300]}
                    size={16}
                  />
                </CircleBackgroundIcon>
                <Text color="dark.300" fontWeight={700} fontSize="md">
                  {size}
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export const CARD_WIDTH = WIDTH + MARGIN * 2;
export default PropertyCard;
