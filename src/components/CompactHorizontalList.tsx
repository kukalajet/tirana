import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Platform,
} from "react-native";
import { UseStore } from "zustand";
import { Status } from "../models";
import { ListCommonType } from "../stores/properties";
import { makeStyles } from "../utils";
import PropertyCard, { CARD_WIDTH } from "./PropertyCard";

type Props = {
  name: string;
  useStore: UseStore<ListCommonType>;
};

const CompactHorizontalList = ({ name, useStore }: Props) => {
  const status = useStore((state) => state.status);
  const properties = useStore((state) => state.properties);
  const fetch = useStore((state) => state.fetch);

  const styles = useStyles();

  useEffect(() => {
    fetch();
  }, []);

  const renderCard = (property: any) => <PropertyCard property={property} />;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {status !== Status.Success ? (
        <View style={styles.spinner}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          horizontal
          data={properties}
          renderItem={renderCard}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          viewabilityConfig={{ itemVisiblePercentThreshold: CARD_WIDTH }}
          decelerationRate={Platform.OS === "ios" ? 0.2 : 0.4}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

type StyleProps = {};

const useStyles = makeStyles(({}: StyleProps) => ({
  container: {
    width: "100%",
    height: 288,
  },
  spinner: {
    alignSelf: "center",
  },
}));

export default CompactHorizontalList;