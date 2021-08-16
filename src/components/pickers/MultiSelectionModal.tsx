import React, { useState, useCallback } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useForceUpdate } from "../../utils";
import Modal from "../Modal";
import Data from "./Data";

type Props = {
  open: boolean;
  onConfirm: (values: Data[]) => void;
  onDismiss: () => void;
  data: Data[];
};

const MultiSelectionModal = ({ open, onConfirm, onDismiss, data }: Props) => {
  const [selected, setSelected] = useState<Data[]>([]);

  // `useForceUpdate` is needed to bypass a bug in `BottomSheetFlatList` which
  // doesn't re-render the FlatList once `data` changes.
  // TODO: Create an `issue` in https://github.com/gorhom/react-native-bottom-sheet/
  // Similar issue: https://github.com/gorhom/react-native-bottom-sheet/issues/480
  const forceUpdate = useForceUpdate();

  const isSelected = (item: Data) => {
    const found = selected?.find((element) => element.label === item.label);
    return !!found;
  };

  const handleItemRemoval = (item: Data) => {
    const newSelected = selected?.filter((value) => value.label !== item.label);
    setSelected(newSelected);
    forceUpdate();
  };

  const handleItemInsertion = (item: Data) => {
    const newSelected = selected;
    newSelected?.push(item);
    setSelected(newSelected);
    forceUpdate();
  };

  const renderItem = useCallback(
    ({ item }: { item: Data }) => (
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
        <Text>{item.label}</Text>
        {isSelected(item) && <Text>SELECTED</Text>}
      </TouchableOpacity>
    ),
    [selected]
  );

  return (
    <Modal
      open={open}
      disabledButton={!!selected && selected.length === 0}
      onConfirm={() => onConfirm(selected!)}
      onDismiss={onDismiss}
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
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});

export default MultiSelectionModal;
