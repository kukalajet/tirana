import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import MultiSelectionModal from "./MultiSelectionModal";
import SingleSelectionModal from "./SingleSelectionModal";
import Data from "./Data";
import { makeStyles } from "../../utils";

type Props = {
  label: string;
  data: Data[];
  onConfirm: (values: Data[] | Data) => void;
  onRemove: () => void;
};

const ChipPicker = ({ label, onConfirm, onRemove, data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Data | Data[]>();
  const styles = useStyles({ selected: !!selected });

  const getLabel = (item: Data | Data[]): string => {
    if (Array.isArray(item)) {
      const items = (item as Data[]).map((value) => value.label).join(" | ");
      return items;
    }
    return (item as Data).label;
  };

  return (
    <Pressable onPress={() => setOpen(true)} style={styles.container}>
      <MultiSelectionModal
        data={data}
        open={open}
        onConfirm={(value) => {
          setSelected(value);
          onConfirm(value);
          setOpen(false);
        }}
        onRemove={() => {
          onRemove();
          setSelected(undefined);
          setOpen(false);
        }}
        onDismiss={() => setOpen(false)}
      />
      <Text style={styles.label}>{selected ? getLabel(selected!) : label}</Text>
    </Pressable>
  );
};

type StylesProps = {
  selected: boolean;
};

const useStyles = makeStyles(({ selected }: StylesProps) => ({
  container: {
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: selected ? "#68a0cf20" : "#00000020",
    marginHorizontal: 4,
    backgroundColor: selected ? "#68a0cf" : "#ffffff80",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
}));

export default ChipPicker;
