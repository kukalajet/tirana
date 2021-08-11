import React from "react";
import {
  ActivityIndicator,
  FlatList,
  LogBox,
  Platform,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { CompactProperty, Status } from "../models";
import { RootStackParams } from "../navigations";
import { makeStyles } from "../utils";
import { PropertyCard } from "../components";

// https://stackoverflow.com/a/60968348
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

type ListScreenNavigationProp = StackNavigationProp<RootStackParams, "List">;
type ListScreenRouteProp = RouteProp<RootStackParams, "List">;
type ListScreenProps = {
  route: ListScreenRouteProp;
  navigation: ListScreenNavigationProp;
};

const ListScreen = ({ route, navigation }: ListScreenProps) => {
  const styles = useStyles();
  const useStore = route.params?.useStore;

  const status = useStore((state) => state.status);
  const properties = useStore((state) => state.properties);

  const renderCard = ({ item }: { item: CompactProperty }) => (
    <PropertyCard
      property={item}
      isFullWidth
      onPress={() => console.log("Pressed")}
    />
  );

  return (
    <View style={styles.container}>
      {status !== Status.Success ? (
        <View style={styles.spinner}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={properties}
          renderItem={renderCard}
          showsHorizontalScrollIndicator={false}
          decelerationRate={Platform.OS === "ios" ? 0.2 : 0.4}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

type StylesProps = {};

const useStyles = makeStyles((props: StylesProps) => ({
  container: {
    flex: 1,
  },
  spinner: {
    alignSelf: "center",
  },
}));

export default ListScreen;
