import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Modal from "../Modal";
import Data from "./Data";

type Props = {
  open: boolean;
  data: Data[];
  onConfirm: (value: Data) => void;
  onRemove: () => void;
  onDismiss: () => void;
};

const SingleSelectionModal = ({
  data,
  open,
  onConfirm,
  onRemove,
  onDismiss,
}: Props) => {
  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        onPress={() => onConfirm(item)}
        style={styles.itemContainer}
      >
        <Text>{item.label}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <Modal open={open} onRemove={onRemove} onDismiss={onDismiss}>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
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

export default SingleSelectionModal;
