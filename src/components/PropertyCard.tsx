import React from "react";
import { View, Text } from "react-native";
import { CompactProperty } from "../models";
import { makeStyles } from "../utils";

type Props = {
  property: CompactProperty;
  isFullWidth?: boolean;
};

const PropertyCard = ({ property, isFullWidth }: Props) => {
  const styles = useStyles({ isFullWidth });

  const type = property.type;
  const address = property.address;
  const price = property.price;
  const isForSale = property.isForSale;
  const bedrooms = property.bedrooms;
  const bathrooms = property.bathrooms;
  const size = property.size;

  return (
    <View style={styles.container}>
      <Text>{type}</Text>
      <Text>{address}</Text>
      <Text>{price}</Text>
      <Text>Is for sale: {isForSale}</Text>
      <Text>Bedrooms: {bedrooms}</Text>
      <Text>Bathrooms: {bathrooms}</Text>
      <Text>{size}</Text>
    </View>
  );
};

type StylesProps = {
  isFullWidth?: boolean;
};

const HEIGHT = 252;
const WIDTH = 320;
const MARGIN = 16;

const useStyles = makeStyles(({ isFullWidth }: StylesProps) => ({
  container: {
    height: HEIGHT,
    width: !isFullWidth ? WIDTH : undefined,
    borderRadius: 8,
    padding: 16,
    margin: MARGIN,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "white",
  },
}));

export const CARD_WIDTH = WIDTH + MARGIN * 2;
export default PropertyCard;
