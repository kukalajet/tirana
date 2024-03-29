import React, { useState, useCallback } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Feather } from "@expo/vector-icons";
import CircularBackground from "../CircularBackground";
import { useForceUpdate } from "../../utils";
import { ModalSize } from "../../models";
import { SelectedFilter } from "./ChipPicker";
import Modal from "../Modal";

type Props = {
  open: boolean;
  label: string;
  data: SelectedFilter[];
  size?: ModalSize;
  onConfirm: (data: SelectedFilter[]) => void;
  onRemove: () => void;
  onDismiss: () => void;
};

const MultiSelectionModal = ({
  open,
  label,
  size,
  onConfirm,
  onRemove,
  onDismiss,
  data,
}: Props) => {
  const [selected, setSelected] = useState<SelectedFilter[]>([]);

  // `useForceUpdate` is needed to bypass a bug in `BottomSheetFlatList` which
  // doesn't re-render the FlatList once `data` changes.
  // TODO: Create an `issue` in https://github.com/gorhom/react-native-bottom-sheet/
  // Similar issue: https://github.com/gorhom/react-native-bottom-sheet/issues/480
  const forceUpdate = useForceUpdate();

  const isSelected = (item: SelectedFilter) => {
    const found = selected?.find((element) => element.value === item.value);
    return !!found;
  };

  const handleItemRemoval = (item: SelectedFilter) => {
    const newSelected = selected?.filter((value) => value.value !== item.value);
    setSelected(newSelected);
    forceUpdate();
  };

  const handleItemInsertion = (item: SelectedFilter) => {
    const newSelected = selected;
    newSelected?.push(item);
    setSelected(newSelected);
    forceUpdate();
  };

  const renderItem = useCallback(
    ({ item }: { item: SelectedFilter }) => (
      <TouchableOpacity
        onPress={() => {
          const selected = isSelected(item);
          if (!!selected) {
            handleItemRemoval(item);
          } else {
            handleItemInsertion(item);
          }
        }}
        style={styles.itemContainer}
      >
        <Text style={styles.label}>{item.value}</Text>
        {isSelected(item) ? (
          <CircularBackground style={styles.icon}>
            <Feather
              name="check"
              size={20}
              color="white"
              style={styles.check}
            />
          </CircularBackground>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    ),
    [selected]
  );

  return (
    <Modal
      label={label}
      open={open}
      size={size}
      disabledConfirmButton={!!selected && selected.length === 0}
      onConfirm={() => onConfirm(selected!)}
      onDismiss={onDismiss}
      onRemove={() => {
        setSelected([]);
        onRemove();
      }}
    >
      <BottomSheetFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 64,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f0f0f095",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 16,
  },
  check: {
    padding: 6,
  },
  icon: {
    marginHorizontal: 16,
  },
});

export default MultiSelectionModal;
