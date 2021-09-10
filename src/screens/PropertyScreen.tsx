import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Box,
  VStack,
  Button,
  HStack,
  useTheme,
  Heading,
  Text,
  Circle,
  ScrollView,
} from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Carousel from "pinar";
import { RootStackParams } from "../navigations/RootStack";
import { usePropertyStore } from "../stores";
import { LoadingIndicator, Image, Tabs } from "../components";
import { Status } from "../models";

type PropertyScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  "Property"
>;
type PropertyScreenRoute = RouteProp<RootStackParams, "Property">;
type PropertyScreenProps = {
  route: PropertyScreenRoute;
  navigation: PropertyScreenNavigationProp;
};

const PropertyScreen = ({ route, navigation }: PropertyScreenProps) => {
  const status = usePropertyStore((state) => state.status);
  const property = usePropertyStore((state) => state.property);
  const fetch = usePropertyStore((state) => state.fetch);

  const { colors } = useTheme();

  const id = route.params?.id;

  const price = property?.price;
  const bedrooms = `${property?.bedrooms} bedrooms`;
  const bathrooms = `${property?.bathrooms} bathrooms`;
  const size = property?.size;
  const info = [bedrooms, bathrooms, size].join(" • ");
  const address = property?.address;

  const seller = property?.seller;
  const phone = seller?.phone;

  useEffect(() => {
    fetch(id);
  }, []);

  const onBackPressed = () => {
    navigation.goBack();
  };

  return (
    <VStack flex={1}>
      <Box flexGrow={0.66} backgroundColor={colors.gray300}>
        {status === Status.Initial ? (
          <LoadingIndicator />
        ) : (
          <Carousel showsControls={false} style={{ flex: 1 }}>
            {property!.images.map((image: string, index: number) => (
              <Image
                source={{ uri: image }}
                key={index.toString()}
                style={styles.image}
              />
            ))}
          </Carousel>
        )}
      </Box>
      <VStack flex={1} backgroundColor={colors.white}>
        {status === Status.Initial ? (
          <LoadingIndicator />
        ) : (
          <Box flex={1}>
            <VStack space={2} px={4} py={4}>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading size="lg">{price}</Heading>
                <Heading size="xs">{info}</Heading>
              </HStack>
              <Text>{address}</Text>
              <HStack space={2} alignItems="center">
                <Circle size={4} bg="red.500" />
                <Text>Appartment for sale</Text>
              </HStack>
            </VStack>
            <HStack justifyContent="space-evenly" px={4} py={1}>
              {!!phone && (
                <Button flex={1} my={1} mr={1} variant="outline">
                  Call
                </Button>
              )}
              {!!phone && (
                <Button variant="outline" m={1} flex={1}>
                  Message
                </Button>
              )}
              <Button my={1} ml={1} flex={1}>
                On Map
              </Button>
            </HStack>
            <Tabs />
          </Box>
        )}
      </VStack>
      <View style={styles.topBar}>
        <SafeAreaView style={{ width: "100%" }}>
          <HStack py={2} px={4} justifyContent="space-between">
            <Button
              height={12}
              width={12}
              variant="solid"
              borderRadius={24}
              bg={colors.white}
              onPress={onBackPressed}
              startIcon={
                <Feather name="chevron-left" color="black" size={16} />
              }
            />
            <HStack space={2}>
              <Button
                height={12}
                width={12}
                variant="solid"
                borderRadius={24}
                bg={colors.white}
                startIcon={<Feather name="share" color="black" size={16} />}
              />
              <Button
                height={12}
                width={12}
                variant="solid"
                borderRadius={24}
                bg={colors.white}
                startIcon={<Feather name="heart" color="black" size={16} />}
              />
            </HStack>
          </HStack>
        </SafeAreaView>
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: { position: "absolute", top: 0, left: 0, right: 0 },
});

export default PropertyScreen;
