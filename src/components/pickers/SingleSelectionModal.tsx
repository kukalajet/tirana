import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Modal from "../Modal";
import { Data, ModalSize } from "../../models";

type Props = {
  open: boolean;
  label: string;
  data: Data[];
  size?: ModalSize;
  onConfirm: (value: Data) => void;
  onRemove: () => void;
  onDismiss: () => void;
};

const SingleSelectionModal = ({
  open,
  data,
  label,
  size,
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
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <Modal
      label={label}
      open={open}
      size={size}
      onRemove={onRemove}
      onDismiss={onDismiss}
    >
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
});

export default SingleSelectionModal;
