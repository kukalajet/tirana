import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  LogBox,
  Platform,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParams } from "../navigations";
import { PropertyCard } from "../components";
import { ChipPicker } from "../components/pickers";
import {
  makeStyles,
  RequireAtLeastOne,
  useEffectExceptOnMount,
} from "../utils";
import { FILTERS } from "../utils";
import { Filter, Filters } from "../models";
import {
  CompactProperty,
  Data,
  Price,
  PropertyKeys,
  PropertyStatus,
  PropertyType,
  Status,
} from "../models";

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

type SelectedFilter = Data<PropertyStatus | PropertyType | Price>;

const ListScreen = ({ route }: ListScreenProps) => {
  const [filters, setFilters] = useState<Filters>({});

  const styles = useStyles();
  const useStore = route.params?.useStore;

  const status = useStore((state) => state.status);
  const properties = useStore((state) => state.properties);
  const fetch = useStore((state) => state.fetch);

  useEffectExceptOnMount(() => {
    fetch(filters);
  }, [filters]);

  const handleFiltersChange = (data: SelectedFilter | SelectedFilter[]) => {
    const newFilters: Filters = {};

    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        const key = (item as SelectedFilter).key;
        const value = (item as SelectedFilter).value;

        if (key === "status") {
          if (!newFilters.status) newFilters.status = [];
          if (index === 0 && !filters.status?.length) newFilters.status = [];
          newFilters.status.push(value as PropertyStatus);
        }
        if (key === "type") {
          if (!newFilters.type) newFilters.type = [];
          if (index === 0 && !filters.type?.length) newFilters.type = [];
          newFilters.type?.push(value as PropertyType);
        }
        if (key === "price") {
          newFilters.price = value as RequireAtLeastOne<Price>;
        }
      });
    } else {
      const key = (data as SelectedFilter).key;
      const value = (data as SelectedFilter).value;

      if (key === "status") {
        if (!newFilters.status) newFilters.status = [];
        newFilters.status.push(value as PropertyStatus);
      }
      if (key === "type") {
        if (!newFilters.type) newFilters.type = [];
        newFilters.type.push(value as PropertyType);
      }
      if (key === "price") newFilters.price = value as RequireAtLeastOne<Price>;
    }

    setFilters({ ...filters, ...newFilters });
  };

  const renderCard = ({ item }: { item: CompactProperty }) => (
    <PropertyCard property={item} isFullWidth onPress={() => null} />
  );

  const renderChip = ({ item }: { item: Filter }) => (
    <ChipPicker
      label={item.label as PropertyKeys}
      data={item.items}
      modalSize={item.modalSize}
      selection={item.selection}
      onConfirm={(data) => handleFiltersChange(data)}
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
