import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CompactProperty } from "../models";
import { makeStyles } from "../utils";

type Props = {
  property: CompactProperty;
  isFullWidth?: boolean;
  onPress: () => void;
};

const PropertyCard = ({ property, isFullWidth, onPress }: Props) => {
  const styles = useStyles({ isFullWidth });

  const type = property.type;
  const address = property.address;
  const price = property.price;
  const isForSale = property.isForSale;
  const bedrooms = property.bedrooms;
  const bathrooms = property.bathrooms;
  const size = property.size;
  const imagePreviewUrl = property.previewImage;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image
        style={styles.previewContainer}
        source={{
          uri: imagePreviewUrl,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.overlineContainer}>
            <Text>{type}</Text>
          </View>
          <View style={styles.headlineContainer}>
            <Text>{price}</Text>
            {!isForSale && <Text>/Month</Text>}
          </View>
          <View style={styles.subtitleContainer}>
            <Text>{address}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>{bedrooms}</Text>
            <Text>{bathrooms}</Text>
            <Text>{size}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

type StylesProps = {
  isFullWidth?: boolean;
};

const HEIGHT = 224;
const WIDTH = 320;
const MARGIN = 16;

const useStyles = makeStyles(({ isFullWidth }: StylesProps) => ({
  container: {
    height: HEIGHT,
    width: !isFullWidth ? WIDTH : undefined,
    borderRadius: 8,
    margin: MARGIN,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "white",
  },
  previewContainer: {
    flex: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    flex: 2,
  },
  overlineContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headlineContainer: {
    flex: 1,
    flexDirection: "row",
  },
  subtitleContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

export const CARD_WIDTH = WIDTH + MARGIN * 2;
export default PropertyCard;
