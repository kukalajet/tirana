import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import MultiSelectionModal from "./MultiSelectionModal";
import SingleSelectionModal from "./SingleSelectionModal";
import Data from "./Data";

type Props = {
  onConfirm: (values: Data[] | Data) => void;
  onDismiss: () => void;
  data: Data[];
};

const ChipPicker = ({ onConfirm, onDismiss, data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  // testing
  data = [{ label: "For Sale" }, { label: "For Rent" }, { label: "Sold" }];

  return (
    <Pressable onPress={() => setOpen(true)} style={styles.container}>
      <SingleSelectionModal
        data={data}
        open={open}
        onConfirm={(values) => {
          onConfirm(values);
          console.log(values);
          setOpen(false);
        }}
        onDismiss={() => {
          onDismiss();
          setOpen(false);
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "red",
    marginHorizontal: 4,
    backgroundColor: "#68a0cf",
  },
});

export default ChipPicker;
