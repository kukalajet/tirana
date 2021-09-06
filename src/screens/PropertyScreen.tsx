import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Box, VStack, Button, ZStack, HStack, useTheme } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Carousel from "pinar";
import { RootStackParams } from "../navigations/RootStack";
import { usePropertyStore } from "../stores";
import { LoadingIndicator, Image } from "../components";
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

  useEffect(() => {
    fetch(id);
  }, []);

  const onBackPressed = () => {
    navigation.goBack();
  };

  return (
    <VStack flex={1}>
      <Box flexGrow={0.66} backgroundColor={colors.gray300}>
        <ZStack flex={1}>
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
        </ZStack>
      </Box>
      <Box flex={1} backgroundColor={colors.white}>
        {status === Status.Initial && <LoadingIndicator />}
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PropertyScreen;
