import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Platform, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UseStore } from "zustand";
import { Box, HStack, Square, Heading } from "native-base";
import { CompactProperty, ListCommonType, Status } from "../models";
import PropertyCard, { CARD_WIDTH } from "./PropertyCard";

type Props = {
  name: string;
  useStore: UseStore<ListCommonType>;
};

const CompactHorizontalList = ({ name, useStore }: Props) => {
  const status = useStore((state) => state.status);
  const properties = useStore((state) => state.properties);
  const fetch = useStore((state) => state.fetch);

  const navigation = useNavigation();

  useEffect(() => {
    fetch();
  }, []);

  const renderCard = ({ item }: { item: CompactProperty }) => (
    <PropertyCard property={item} />
  );

  return (
    <Box width="100%" height={288}>
      <HStack
        paddingX={4}
        paddingY={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="md">{name}</Heading>
        <Pressable
          onPress={() => navigation.navigate("List", { useStore: useStore })}
        >
          <Heading size="sm" color="yellow.600">
            See all
          </Heading>
        </Pressable>
      </HStack>
      {status !== Status.Success ? (
        <Square height="60%" width="100%">
          <ActivityIndicator />
        </Square>
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
    </Box>
  );
};

export default CompactHorizontalList;
