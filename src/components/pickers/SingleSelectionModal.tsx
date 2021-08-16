import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Modal from "../Modal";
import Data from "./Data";

type Props = {
  open: boolean;
  onConfirm: (value: Data) => void;
  onDismiss: () => void;
  data: Data[];
};

const SingleSelectionModal = ({ data, open, onConfirm, onDismiss }: Props) => {
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
    <Modal open={open} onDismiss={onDismiss}>
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
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});

export default SingleSelectionModal;
