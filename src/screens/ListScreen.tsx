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
import { PropertyCard } from "../components";
import { ChipPicker } from "../components/pickers";
import { makeStyles, FILTERS } from "../utils";
import { Filter } from "../utils/filters";

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

const ListScreen = ({ route }: ListScreenProps) => {
  const styles = useStyles();
  const useStore = route.params?.useStore;

  const status = useStore((state) => state.status);
  const properties = useStore((state) => state.properties);

  const renderCard = ({ item }: { item: CompactProperty }) => (
    <PropertyCard property={item} isFullWidth onPress={() => null} />
  );

  const renderChip = ({ item }: { item: Filter }) => (
    <ChipPicker
      label={item.label}
      data={item.items}
      modalSize={item.modalSize}
      selection={item.selection}
      onConfirm={() => null}
      onRemove={() => null}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <FlatList
          horizontal
          data={FILTERS}
          renderItem={renderChip}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingStart: 12 }}
        />
      </View>
      {status !== Status.Success ? (
        <View style={styles.spinner}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={properties}
            renderItem={renderCard}
            decelerationRate={Platform.OS === "ios" ? 0.2 : 0.4}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  container: {
    flex: 1,
  },
  spinner: {
    alignSelf: "center",
  },
  filtersContainer: {
    paddingVertical: 8,
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
  },
}));

export default ListScreen;
